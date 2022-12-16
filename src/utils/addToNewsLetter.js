import { waitlistDoc } from './connectToGoogleSheets';

const defaultSheetID = process.env.NEWSLETTER_SHEET_ID;

const emailDuplicateChecker = async (email, doc) => {
  const rows = await doc.getRows();
  if (rows?.find((row) => email.match(new RegExp(row.email, 'i')))) {
    return true;
  }
  return false;
};

const addEmailToNewsLetter = async (email) => {
  const creds = {
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    private_key: process.env.GOOGLE_SERVICE_PRIVATE_KEY.replace(/\\n/g, '\n'),
  };
  await waitlistDoc.useServiceAccountAuth(creds);
  await waitlistDoc.loadInfo();

  const sheet = waitlistDoc.sheetsById[defaultSheetID];

  const isDuplicate = await emailDuplicateChecker(email, sheet);

  if (isDuplicate) {
    throw Error('Duplicate Email. Please provide another email address.');
  }

  return sheet.addRow({ email });
};

export default addEmailToNewsLetter;
