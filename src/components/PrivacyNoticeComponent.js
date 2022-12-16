import { useRouter } from 'next/router';

/* eslint-disable react/jsx-one-expression-per-line */
const PrivacyNoticeComponent = () => {
  const router = useRouter();
  return (
    <div className="break-out bg-home-4-white grid place-items-center mb-">
      <div className="absolute inset-0 w-full h-full bg-white opacity-50" />
      <div className="relative lg:max-w-[1280px] mx-auto bg-white">
        <div
          style={{ boxShadow: '0px 4px 16px 0px #7562E01A' }}
          className=" mx-auto  px-5 md:px-[61px] font-gotham-book text-custom-floppy-disk"
        >
          <h1
            className={[
              'xs:text-[30px]',
              'md:ml-5',
              'xs:text-center',
              'leading-none',
              'md:text-left',
              'md:text-[24px]',
              'lg:text-[40px]',
              'text-custom-medium-slate-blue',
              router.query.mobile === '1' ? 'pt-12' : 'pt-20',
              'font-bold',
            ].join(' ')}
          >
            Privacy Notice for Eplayment Wallet
          </h1>

          <div className="space-y-4 mx-5 bg-white pb-20">
            <div className="w-full  border my-10 border-black border-opacity-10" />

            <div className="">
              <div>
                <p className="leading-8">
                  <span className="term">Eplayment Corporation</span> &nbsp; is a financial
                  technologies and entertainment company creating a digital space for people to
                  conveniently and securely engage with others, and experience the fullest potential
                  of fintech, gaming, and entertainment combined. Our Eplayment Wallet is a digital
                  wallet application currently available in the Philippines that holds money and
                  enables financial transactions. The Eplayment Wallet aims to be known and utilized
                  as the go-to wallet for gaming and entertainment that follows our company values:
                  Fun, Secure, Convenient, Excellent, and Adaptable.
                </p>

                <p className="leading-8">
                  As advocates of data privacy, we recognize the importance of protecting your data,
                  and commit to safeguarding the confidentiality of all of our clients and users.
                  That being said, we ensure that we comply with the Data Privacy Act of 2012 (RA
                  10173), along with its Implementing Rules and Regulations as well as any other
                  relevant data privacy related laws and issuances by the National Privacy
                  Commission. Furthermore, we only collect and process personal information that is
                  necessary to fulfill the purpose of our platforms.
                </p>
                <p className="leading-8">
                  In accordance with this, this privacy notice will cover any and all necessary
                  information about how Eplayment will collect, process, and store your personal
                  data. This includes how long we will retain the information, all your privacy
                  rights in relation to that data, and to whom we may share it with when necessary.
                </p>
                <p className="leading-8">
                  The content of this Privacy Notice may be updated or amended from time to time to
                  align with any future platform configurations, and to comply with any changes in
                  relevant laws and policies. Should these changes require your consent, we will be
                  sure to notify you and request for your said updated consent as you proceed with
                  using the platform. Otherwise, changes will be rendered effective immediately upon
                  posting.
                </p>
              </div>
              <div>
                <h3 className="my-2 text-base font-bold">DEFINITION OF TERMS</h3>
                <ol>
                  <li className="leading-8 list-disc">
                    <span className="term">Personal Information</span> &nbsp; refers to any
                    information, whether recorded in a material form or not, from which the identity
                    of an individual is apparent or can be reasonably and directly ascertained by
                    the entity holding the information, or when put together with other information
                    would directly and certainly identify an individual;
                  </li>
                  <li className="leading-8 list-disc">
                    <span className="term">Personal Information</span> &nbsp; Data Subject / User
                    refers to an individual whose Personal, Sensitive or Privileged information is
                    processed;
                  </li>
                  <li className="leading-8 list-disc">
                    <span className="term">Consent of the Data Subject</span> &nbsp; refers to any
                    freely given, specific, informed indication of will, whereby the Data Subject
                    agrees to the processing of his or her personal, sensitive personal, or
                    privileged information. It may also be given on behalf of a Data Subject by a
                    lawful representative or an agent specifically authorized by the Data Subject to
                    do so;
                  </li>
                  <li className="leading-8 list-disc">
                    <span className="term">Processing</span> &nbsp; refers to any operation or set
                    of operations performed upon Personal Data including, but not limited to, the
                    collection, recording, organization, storage, updating or modification,
                    retrieval, consultation, use, consolidation, blocking, erasure, or destruction
                    of data. Processing may be performed through automated means, or manual
                    processing, if the Personal Data are contained or are intended to be contained
                    in a filing system;
                  </li>
                  <li className="leading-8 list-disc">
                    <span className="term">Outsourcing</span> &nbsp; refers to the disclosure or
                    transfer of Personal Data by the Parties to their respective Personal
                    Information Processor/s (PIP/s), if any, for the Processing of Personal Data
                    obtained or shared under this Agreement;
                  </li>
                  <li className="leading-8 list-disc">
                    <span className="term">Personal Data Breach</span> &nbsp; refers to a breach of
                    security leading to the accidental or unlawful destruction, loss, alteration,
                    unauthorized disclosure of, or access to, Personal Data transmitted, stored, or
                    otherwise processed
                  </li>
                </ol>
              </div>
              <div>
                <h3 className="my-2 text-base font-bold">WHAT WE COLLECT</h3>
                <p className="leading-8">
                  In order to create an account, we request the following information from our users
                  so that we register them properly:
                </p>
                <ol>
                  <li className="leading-8 list-disc">Mobile Number</li>
                  <li className="leading-8 list-disc">First and Last Name</li>
                  <li className="leading-8 list-disc">Middle Name (optional)</li>
                  <li className="leading-8 list-disc">Date of birth (must be 18 and above)</li>
                  <li className="leading-8 list-disc">Username</li>
                  <li className="leading-8 list-disc">Email address (optional)</li>
                  <li className="leading-8 list-disc">Password</li>
                  <li className="leading-8 list-disc">Mobile Personal Identification Number</li>
                </ol>
                <p className="leading-8">
                  Upon registering your account, we shall request further personal information for
                  verification purposes, as well as for the usage of the various functions of the
                  platform such as add money, pay bills, buy load, buy game credits and vouchers,
                  withdraw money, and send money.
                </p>
                Said information may include but is not limited to:
                <ul>
                  <li className="leading-8 list-disc">
                    Your name and personal particulars such as contact details, residence, gender,
                    birthdate, civil status, nationality, and mother’s maiden name
                  </li>
                  <li className="leading-8 list-disc">
                    Financial Information such as income source
                  </li>
                  <li className="leading-8 list-disc">
                    Employment details and business information
                  </li>
                  <li className="leading-8 list-disc">
                    Government ID(s) and corresponding photo with the ID
                  </li>
                </ul>
                <p className="leading-8">
                  Users may opt to not verify their accounts, but will only have limited access to
                  the features of the application. Furthermore, users may also choose to enable
                  biometrics (Facial Recognition or Fingerprint Recognition), on their respective
                  device as a method of logging in to their account for ease of access. This feature
                  is completely optional and will not be activated unless the user gives the
                  specific permissions. In any instance wherein we request personal data for a
                  specific reason that is not covered in this privacy policy, we will expound on the
                  purpose of why we need said information, as well as our lawful basis for
                  collecting it. Correspondingly, if there is any instance we are to process your
                  data for any purpose other than for which it was originally collected, we shall
                  provide you with a clear explanation and description of said purpose, along with
                  any other relevant information pertinent to the processing.
                </p>
              </div>
              <div>
                <h3 className="my-2 text-base font-bold">
                  PURPOSE OF COLLECTION / HOW WE USE YOUR DATA
                </h3>
                <p className="leading-8">
                  We may use your personal data for various purposes, including the following and
                  any other future purpose not mentioned herein shall be disclosed and lawful:
                </p>
                <ul>
                  <li className="leading-8 list-disc">
                    Know-Your-Customer examination/investigation or client identification related
                    activities as required by law
                  </li>
                  <li className="leading-8 list-disc">
                    Assessment and/or processing your applications or transactions with the Bank
                    such as but not limited to opening of accounts, fund transfer, withdrawal, bill
                    payments, avail load and purchase game credits and vouchers
                  </li>
                  <li className="leading-8 list-disc">
                    Responding to any customer inquiries, requests, concerns or complaints
                  </li>
                  <li className="leading-8 list-disc">
                    Management of your accounts and performing other audit, administrative and
                    operational tasks necessary and incidental to the management of the account
                  </li>
                  <li className="leading-8 list-disc">
                    Detection, prevention, investigation, and prosecution of fraud or crime
                  </li>
                  <li className="leading-8 list-disc">
                    Performance of activities that you have consented to
                  </li>
                  <li className="leading-8 list-disc">
                    Performance of other activities permitted by law
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="my-2 text-base font-bold">DATA SHARING / OUTSOURCING</h3>
                <p className="leading-8">
                  Within the company, data will be accessible to our backend developers, admin,
                  support, and finance teams, who will only have access to the relevant data to
                  perform their tasks successfully for the purposes of the application. Data
                  collected for the Know-Your-Customer procedure shall only be disclosed and shared
                  with our partner processor, EON/UnionBank. Our technology partners, Multisys and
                  UniPin, will have only limited access to any pertinent data to facilitate their
                  respective services within the application. Technology partners may not store any
                  of the information, and no data collected by the application shall be disclosed or
                  shared with any other third parties.
                </p>
              </div>
              <div>
                <h3 className="my-2 text-base font-bold">RETENTION OF USER DATA</h3>
                <p className="leading-8">
                  Eplayment and EON/UnionBank shall retain data provided by the user for a period of
                  five (5) years upon account closure. No data shall be deleted while there is still
                  a remaining balance within the user’s wallet. Users also have the option of
                  contacting us and requesting their data to be deleted at any given time. Once the
                  retention period is over or if the data is no longer needed, we shall securely
                  delete said information.
                </p>
              </div>
              <div>
                <h3 className="my-2 text-base font-bold">HOW WE PROTECT YOUR INFORMATION</h3>
                <p className="leading-8">
                  We implement reasonable and appropriate physical, technical, and organizational
                  measures to prevent the loss, destruction, misuse, or alteration of your
                  information. We keep and protect your information using a secured server behind a
                  firewall, encryption, and security controls to ensure our clients we are committed
                  to protecting their information from personal data breaches. In line with our
                  retention policy, Eplayment and EON/UnionBank shall securely delete the data
                  collected upon expiry of the aforementioned retention period or when deemed no
                  longer necessary.
                </p>
              </div>
              <div>
                <h3 className="my-2 text-base font-bold">YOUR RIGHTS AS A DATA SUBJECT</h3>
                <p className="leading-8">
                  As a user of our Eplayment Wallet, you are entitled to the following data privacy
                  rights:
                </p>
                <ol>
                  <li className="leading-8 list-disc">
                    To be informed whether Personal Data pertaining to him or her shall be, are
                    being, or have been processed;
                  </li>
                  <li className="leading-8 list-disc">
                    To reasonable access to any Personal Data collected and processed in duration of
                    employment;
                  </li>
                  <li className="leading-8 list-disc">
                    To object or withhold consent with regards to the collection and processing of
                    your Personal Data.
                  </li>
                  <li className="leading-8 list-disc">
                    To suspend, withdraw, or order the blocking, removal, or destruction of Personal
                    Data from the relevant company’s filing system;
                  </li>
                  <li className="leading-8 list-disc">
                    To dispute the inaccuracy or error in Personal Data, and the relevant company
                    shall correct it immediately and accordingly, upon the request unless the
                    request is vexatious or otherwise unreasonable;
                  </li>
                  <li className="leading-8 list-disc">
                    To obtain a copy of their data in an electronic or structured format that is
                    commonly used and allows for further use by the Data Subject;
                  </li>
                  <li className="leading-8 list-disc">
                    To be indemnified for any damages sustained pursuant to the provisions of the
                    Data Privacy Act or Other Privacy Laws
                  </li>
                </ol>
              </div>
              <div>
                <h3 className="my-2  text-base font-bold">CONTACT US</h3>
                <p className="leading-8">
                  Eplayment is fully committed to protecting and maintaining your privacy. For any
                  questions, concerns or clarifications regarding this privacy policy and how to
                  exercise your rights as a data subject, you may contact our Data Protection
                  Officer at dpo@eplayment.com. You may also get in touch with us at &nbsp;
                  <a
                    className="font-medium hover:text-eplayment-purple"
                    href="mailto:support@eplayment.com?"
                  >
                    support@eplayment.com
                  </a>
                  , or reach us at our main office at LG1 Capitol Greenstreet, Capitol Hills Drive,
                  Matandang Balara, Quezon City 1119.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyNoticeComponent;
