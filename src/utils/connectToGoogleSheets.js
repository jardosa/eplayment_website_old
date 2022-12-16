import { GoogleSpreadsheet } from 'google-spreadsheet';
import createDate from './createDate';

export const waitlistDoc = new GoogleSpreadsheet(process.env.SPREADSHEET_ID);

const refNoGenerator = (refId) => {
  return [
    'EP',
    refId
      .toString(10)
      .split('')
      .map(Number)
      .reduce((acc, curr) => acc + curr),
    Math.floor(1000000 + Math.random() * 9000000),
  ].join('-');
};

const emailDuplicateChecker = async (email, doc) => {
  const rows = await doc.getRows();
  if (rows?.find((row) => row.email === email)) {
    return true;
  }
  return false;
};

const appendSpreadSheet = async (row, referrerName = 'Website', pid = null) => {
  const creds = {
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    private_key: process.env.GOOGLE_SERVICE_PRIVATE_KEY.replace(/\\n/g, '\n'),
  };
  const defaultSheetID = process.env.SHEET_ID;
  const referrerRegexp = new RegExp(String.raw`^${referrerName}$`, 'i');

  let newRecord = {};
  let refNo = '';
  let isDuplicate;
  let error;

  try {
    await waitlistDoc.useServiceAccountAuth(creds);
    await waitlistDoc.loadInfo();

    const referrerInsensitive = Object.keys(waitlistDoc.sheetsByTitle).find((key) =>
      key.match(referrerRegexp),
    );

    const referrer = waitlistDoc.sheetsByTitle[referrerInsensitive];

    isDuplicate = await emailDuplicateChecker(row.email, referrer);

    if (referrer.title === 'Website' || !referrer) {
      // automatically assumes user signed up through website him/herself
      // can possibly eliminate issues with incorrect referrer

      refNo = refNoGenerator(defaultSheetID);

      const sheet = waitlistDoc.sheetsById[defaultSheetID];

      if (!isDuplicate) {
        newRecord = sheet.addRow({ ...row, refNo, createDate: createDate(), pid });
      }
    } else if (!isDuplicate) {
      refNo = refNoGenerator(referrer.sheetId);
      newRecord = referrer.addRow({ ...row, refNo, createDate: createDate() });
    }
  } catch (e) {
    error = e;
  }
  return { newRecord: isDuplicate ? '' : newRecord, refNo, isDuplicate, error };
};

export default appendSpreadSheet;
