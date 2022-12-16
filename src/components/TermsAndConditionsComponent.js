import { useRouter } from 'next/router';
import { css, cx } from '@emotion/css';

/* eslint-disable react/jsx-one-expression-per-line */
const TermsAndConditionsComponent = () => {
  const router = useRouter();

  return (
    <div className="break-out bg-home-4-white grid place-items-center  ">
      <div className="absolute inset-0 w-full h-full bg-white opacity-50" />
      <div className="w-full relative max-w-[1280px] mx-auto bg-home-4-white">
        <div className="bg-white" style={{ boxShadow: '0px 4px 16px 0px #7562E01A' }}>
          <div className=" mx-5 md:mx-[61px] bg-white font-gotham-book text-custom-floppy-disk">
            <div className="mb-8">
              <h1
                className={cx(
                  css`
                    font-size: clamp(28px, 2vw, 40px);
                  `,
                  // 'text-[30px]',
                  // 'md:ml-5',
                  'leading-none',

                  'text-left',
                  router?.query?.mobile === '1' ? 'pt-12' : 'pt-20',
                  'font-bold',
                  'text-custom-medium-slate-blue',
                )}
              >
                Terms and Conditions
              </h1>
              <p className=" opacity-50 my-3  text-left text=[#3D3D3D]">
                Updated on August 1, 2021
              </p>
            </div>
            <div className="w-full h-[2px] bg-black bg-opacity-10" />

            <div>
              <div className="py-10 md:text-sm mx-2 lg:text-base ">
                <p className="leading-8 pb-4">
                  Welcome to Eplayment. These Terms and Conditions (T&Cs) cover your rights and
                  obligations relating to your access and use of the products of Eplayment, the
                  Eplayment Wallet, Eplayment Visa Card, Epaygames Payment Gateway, Eplayment
                  Website, Eplayment Social Media Accounts, and all the services associated with it
                  (together, “Eplayment Service”). All references to “we”, “us”, “our”, or
                  “Eplayment” refer to Eplayment Corporation, a corporation organized under the laws
                  of the Philippines. We have been duly registered and licensed with the Bangko
                  Sentral ng Pilipinas (BSP) as an Operator of a Payment System (OPS). By
                  registering to Eplayment or using the Eplayment Service, you accept and agree to
                  be bound by these T&Cs.
                </p>
                <p className="leading-8 py-4">
                  In addition to these T&Cs, please review our Privacy Notice and Acceptable Use
                  Policy. The Privacy Notice describes how your personal data is collected and
                  processed when you use the Eplayment Service. The Acceptable Use Policy defines
                  the set of rules that you should comply with when using the Eplayment Service. If
                  you do not understand or do not wish to be bound by the T&Cs, Privacy Notice, and
                  Acceptable Use Policy, you should not access or use any portion of the Eplayment
                  Service.
                </p>
                <p className="leading-8 py-4">
                  Read these terms carefully, as they contain important information about your
                  rights and responsibilities. These T&Cs shall be valid and binding from the time
                  of your registration, and will remain binding up to its termination by us, except
                  for provisions that will remain effective after termination, as stated in these
                  T&Cs, laws, or regulations. Eplayment reserves the absolute and unequivocal right
                  to modify these T&Cs at any time with or without notice. Any changes to these T&Cs
                  will be effective immediately upon posting on the Eplayment Service, with an
                  indication as to the date of effectivity. By continuing to access and use
                  Eplayment Service after any such modifications, you are considered to have agreed
                  to be bound by the modifications.
                </p>

                <div>
                  <h3 className="my-2 text-base font-bold">1. TERMS</h3>
                  <p className="leading-8 py-4">
                    1.1. By registering for an Eplayment account and accepting these T&Cs, you
                    represent and warrant that you have reached the age of majority, which is 18
                    years old, and can validly transact on your own behalf. If we learn or have
                    reason to suspect that a user is under 18 years of age, we will promptly revoke
                    the user’s access to the Eplayment Service and delete any personally
                    identifiable information submitted by that user. Further, you represent and
                    warrant that your use of the Eplayment Service does not and will not conflict
                    with any pre-existing obligation in conflict or in any way inconsistent with the
                    provisions in these T&Cs.
                  </p>
                  <p className="leading-8 py-4">
                    1.2. If you are a business entity, you represent that you are licensed to do
                    business, and that the persons including your employees, officers,
                    representatives, and other agents accessing or using the Eplayment Service are
                    duly authorized to access or use the Eplayment Service. All transactions
                    conducted under your username and password are deemed for your account.
                  </p>
                </div>
                <div>
                  <h3 className="my-2 text-base font-bold">2. REGISTRATION AND VERIFICATION</h3>
                  <p className="leading-8 py-4">
                    2.1. Upon registration and acceptance of these T&Cs, you will set up your
                    Eplayment Wallet that is associated with a registered mobile number. Depending
                    on the particular Eplayment Service that you will be using, you will be required
                    to provide additional information, such as your complete name, present and/or
                    permanent address, date of birth, nationality, place of birth, gender, civil
                    status, mother’s maiden name, source of funds, employment status, employer or
                    business name, nature of work, proof of identification, a photo of yourself, and
                    a signature, in compliance with the requirements of Know-Your-Customer (KYC)
                    requirements of the BSP. In some cases, we may ask you to provide additional
                    information that can aid in verifying your identity.
                  </p>
                  <p className="leading-8 py-4">
                    2.2. A verification of your submitted information through a third party
                    verification vendor, may also be undertaken. Any such third party to whom we
                    disclose or transfer information about you for the above purpose is
                    contractually required to comply with confidentiality standards and establish
                    adequate safeguards for data privacy, undertake to respect any user’s right to
                    privacy and comply with applicable laws. We also require that said third parties
                    use information shared with them only for the above purposes and follow our
                    reasonable directions with respect to this information.
                  </p>
                  <p className="leading-8 py-4">
                    2.3. You agree to submit all required information or documentation and render
                    all reasonable assistance and cooperation in order to complete the verification.
                    Such information will be used to determine if you can continue to use your
                    Eplayment Wallet or the Eplayment Service. We reserve the right to close,
                    suspend, or limit your access to your Eplayment Wallet and/or the Eplayment
                    Service in the event that we are unable to verify your information. All
                    collection and use of your personal data by us is subject to the Privacy Notice
                    of Eplayment.
                  </p>
                  <p className="leading-8 py-4">
                    2.4. You are responsible for providing accurate and truthful information during
                    registration, keeping your account information up to date, and notifying us in
                    the event of changes, including but not limited to the nature of your business
                    activities, beneficial owners, principals, changes to the legal entity that
                    operates your business (for example, if you incorporate an entity), or any other
                    pertinent information. We may suspend your account or terminate this agreement
                    if you fail to keep this information current. In addition, as certain parts of
                    the Eplayment Service may become available or be offered only on a selective or
                    promotional basis, supplementary information may be required from your end in
                    order to enable and avail of it.
                  </p>
                  <p className="leading-8 py-4">
                    2.5. Upon KYC Verification, you will obtain a virtual Eplayment Visa Card within
                    your Eplayment Wallet and have the option of linking a physical Eplayment Visa
                    Card to it. Eplayment will store all information relating to your Eplayment Visa
                    Card, including but not limited to transaction details.
                  </p>
                  <p className="leading-8 py-4">
                    2.6. As part of the account registration process for Eplayment and Epaygames
                    Accredited Merchants, you will be asked to create an Eplayment account and a
                    public username (i.e. an identifier of your business which will be part of the
                    URL that you create and share with your customers). Your public account
                    information may appear on your customers’ bank or other statements. To minimize
                    confusion and avoid potential disputes, these descriptors must be recognizable
                    to your Customers and must accurately describe your business or activities. By
                    registering for an account on behalf of an entity, you represent and warrant
                    that you have authority to:
                    <ol className="alphabetical-list pl-8">
                      <li>accept these T&Cs on behalf of and bind such entity, and</li>
                      <li>
                        provide information on behalf of such entity. We may require you to provide
                        additional information or documentation demonstrating such authority to bind
                        the entity. Without our express written consent, you may not register or
                        attempt to register for an account on behalf of a user of Eplayment whose
                        account was previously terminated and is otherwise barred from further use
                        of the Eplayment Service.
                      </li>
                    </ol>
                  </p>
                  <p className="leading-8 py-4">
                    2.7. In addition to the above, at any time during your use of the Eplayment
                    Service, we may require additional information from you to verify beneficial
                    ownership or control of the business, validate information you provided, verify
                    your identity, and assess the risk (to Eplayment and the Eplayment Customer)
                    associated with your business. This additional information may include phone
                    numbers, physical and mailing addresses for you and your business, your
                    business’s tax identification number, business invoices, copies of
                    government-issued identification, business licenses, or other information
                    related to your business, its beneficial owners, or principals. We may also
                    request that you provide copies of financial statements or records pertaining to
                    your compliance with this agreement or require you to provide a personal or
                    company guarantee. Your failure to provide this information or material may
                    result in suspension or termination of your Eplayment account. We may share this
                    information, including any other personally identifiable information you provide
                    to us, with our third party vendors we use to comply with regulations, including
                    anti-money laundering laws.
                  </p>
                </div>
                <div>
                  <h3 className="my-2 text-base font-bold">3. DEFINITIONS</h3>
                  <p className="leading-8 py-4">
                    Definitions appearing in these T&Cs shall have the meanings ascribed to them
                    below.
                  </p>

                  <p className="leading-8 py-4">
                    <span className="term">“Application Programming Interface”</span> or{' '}
                    <span className="term">“API”</span> shall refer to a type of software interface,
                    offering a service to other pieces of software.
                  </p>

                  <p className="leading-8 py-4">
                    <span className="term">“Acquirers”</span> shall refer to a financial institution
                    that is authorized by a Payment Method Provider to connect to their API which
                    processes transactions from customers with an account in the Payment Method on
                    behalf of the Payment Method Provider;
                  </p>

                  <p className="leading-8 py-4">
                    <span className="term">“Biller”</span> shall refer to any entity accredited by
                    Eplayment to accept bills payment using the Eplayment Service.
                  </p>

                  <p className="leading-8 py-4">
                    <span className="term">“Cash In”</span> or
                    <span className="term">“Add Funds”</span> shall refer to the process of
                    exchanging physical cash to Eplayment Fund.
                  </p>

                  <p className="leading-8 py-4">
                    <span className="term">“Cash Out”</span> shall refer to the process of
                    exchanging Eplayment Fund to physical cash (only available to Eplayment account
                    holders who have successfully completed KYC verification).
                  </p>

                  <p className="leading-8 py-4">
                    <span className="term">“EON”</span> shall refer to the neo banking platform that
                    allows clients to apply and access their accounts through the official EON
                    Website, or through the official EON UnionBank app. An EON account holder can
                    also get EON Visa Cards at select UnionBank branches nationwide.
                  </p>
                  <p className="leading-8 py-4">
                    <span className="term">“Epaygames Accredited Merchant”</span> shall refer to any
                    business running a website or application that uses the Epaygames Payment
                    Gateway to process payments from the Payment Method Providers available in the
                    platform.
                  </p>

                  <p className="leading-8 py-4">
                    <span className="term">“Epaygames Payment Gateway”</span> shall refer to the
                    payment processing service with the software and API integration to allow
                    real-time secure data transmission for processing debit cards, credit cards and
                    certain other available Payment Methods provided by a Payment Method Provider on
                    the Epaygames Accredited Merchant’s website or application that allows their
                    customers to purchase their goods and services.
                  </p>
                  <p className="leading-8 py-4">
                    <span className="term">“Eplayment Accredited Merchant”</span> shall refer to any
                    establishment that accepts Eplayment Fund as payment for the purchase of goods
                    and services.
                  </p>

                  <p className="leading-8 py-4">
                    <span className="term">“Eplayment App”</span> shall refer to the Eplayment
                    Service application running on mobile devices where the Eplayment customer can
                    avail of the Eplayment Service or make use of the Eplayment Wallet.
                  </p>

                  <p className="leading-8 py-4">
                    <span className="term">“Eplayment Customer”</span> shall refer to a person who
                    has registered for an Eplayment Service.
                  </p>

                  <p className="leading-8 py-4">
                    <span className="term">“Eplayment Fund”</span> shall refer to a form of
                    electronic money which allows customers who registered to Eplayment Service to
                    easily transfer cash and make payments electronically.
                  </p>
                  <p className="leading-8 py-4">
                    <span className="term">“Eplayment Partner Outlet”</span> shall refer to an
                    establishment that accepts Cash In and/or Cash Out of Eplayment Fund
                    transactions.
                  </p>
                  <p className="leading-8 py-4">
                    <span className="term">“Eplayment Visa Card”</span> shall refer to a prepaid
                    card issued by EON UnionBank under license with Visa linked to an Eplayment
                    Wallet that is KYC verified which can be used for Point-Of-Sale (POS) purchases
                    and Automated Teller Machine (ATM) cash withdrawals.
                  </p>
                  <p className="leading-8 py-4">
                    <span className="term">“Eplayment Wallet”</span> shall refer to the electronic
                    money instrument that stores Philippine Peso (PHP) value which resides in the
                    Eplayment system. It is an account that is linked to the Eplayment Customer’s
                    Mobile Identity Number (MIN).
                  </p>

                  <p className="leading-8 py-4">
                    <span className="term">“Know-Your-Customer”</span> or{' '}
                    <span className="term">“KYC”</span> shall refer to the process of verifying the
                    identity of an Eplayment Customer, as mandated by the BSP. KYC shall be
                    mandatory for Silver (EON Lite), Gold (EON Plus) and Platinum (EON Pro)
                    Eplayment Customers and shall be performed by EON UnionBank.
                  </p>
                  <p className="leading-8 py-4">
                    <span className="term">“Mobile Banking Service”</span> or{' '}
                    <span className="term">“MBS”</span> shall refer to a transfer of a Philippine
                    Peso amount from a qualified bank account into the Eplayment Wallet.
                  </p>
                  <p className="leading-8 py-4">
                    <span className="term">“Mobile Personal Identification Number”</span> or{' '}
                    <span className="term">“MPIN”</span> shall refer to the six (6)-digit security
                    personal identification number of and nominated by the Eplayment Customer, that
                    they may use to access the Eplayment Wallet.
                  </p>

                  <p className="leading-8 py-4">
                    <span className="term">“Payment Method”</span> shall refer to the payment
                    methods such as debit cards, credit card, e-wallets, and over-the-counter
                    channels that are made available and processed real-time and securely by the
                    Epaygames Payment Gateway. Payment Methods include but are not limited to GCash,
                    PayMaya, GrabPay, 7-Eleven, M Lhuiller, and Cebuana Lhuillier. Your use of a
                    Payment Method may be subject to separate terms applicable to the Payment
                    Method. We may add or remove Payment Method Providers at any time.
                  </p>

                  <p className="leading-8 py-4">
                    <span className="term">“Payment Method Provider”</span> shall refer to the
                    provider of payment methods such as debit cards, credit card, e-wallets, and
                    over-the-counter channels that are made available and processed real-time and
                    securely by the Epaygames Payment Gateway.
                  </p>

                  <p className="leading-8 py-4">
                    <span className="term">“Payout”</span> refers to the amount due to the Eplayment
                    Accredited Merchant and Epaygames Accredited Merchant from their transactions
                    minus our fees and any fines, refunds, chargebacks, reversals, setoffs,
                    recoupments or any other amounts due to Eplayment;
                  </p>

                  <p className="leading-8 py-4">
                    <span className="term">“Peer-to-Peer Express Send”</span> or{' '}
                    <span className="term">“P2P Express Send”</span> shall refer to the existing
                    send money service which allows an Eplayment Wallet account to send money to
                    another Eplayment Wallet account. Eplayment Wallet accounts that have not been
                    KYC verified may not send money to KYC verified Eplayment Wallet accounts.
                  </p>
                  <p className="leading-8 py-4">
                    <span className="term">“Peer-to-Peer Transfer”</span> or{' '}
                    <span className="term">“P2P Transfer”</span> shall refer to the transfer of
                    money from an Eplayment Wallet account to another Eplayment Wallet account.
                    Eplayment Wallet accounts that have not been KYC verified may not send money to
                    KYC verified Eplayment Wallet accounts.
                  </p>
                  <p className="leading-8 py-4">
                    <span className="term">“Short Message Service”</span> or{' '}
                    <span className="term">“SMS”</span> shall refer to a telecommunications protocol
                    that allows the interchange of short text messages between mobile devices.
                  </p>
                  <p className="leading-8 py-4">
                    <span className="term">“Transfer QR”</span> shall refer to a specific QR code
                    which allows an Eplayment Wallet account to send money to or receive money from
                    another Eplayment Wallet account. Eplayment Wallet accounts that have not been
                    KYC verified may not send money to KYC verified Eplayment Wallet accounts.
                  </p>
                </div>
                <div>
                  <h3 className="my-2 text-base font-bold">4. EPAYGAMES PAYMENT GATEWAY</h3>
                  <p className="leading-8 py-4">
                    The Epaygames Payment Gateway is Eplayment’s software and aggregator API, which
                    is also integrated in the Eplayment Wallet so that users may add funds from
                    Payment Methods other than the Eplayment Wallet. It is subject to the rules and
                    regulations of the BSP, the Anti-Money Laundering Act (AMLA), as amended and the
                    Data Privacy Act of 2012 and its Implementing Rules and Regulations. Epaygames
                    Accredited Merchants and Eplayment Accredited Merchants may use the Epaygames
                    Payment Gateway within their website or application to collect payments from
                    their customers outside of the Eplayment system. In order to provide you with
                    access to the Payment Methods, we work with Payment Method Providers, Acquirers,
                    and other third parties.
                  </p>
                  <p className="leading-8 py-4">
                    Epaygames Accredited Merchants will be provided access to our APIs that you will
                    use to access the Epaygames Payment Gateway. You may use the APIs solely as
                    described in the API documentation or as otherwise communicated to you by us. We
                    may update the APIs and API documentation from time to time, and may add or
                    remove functionality. To the extent possible, we will communicate to you any
                    changes in functionality. We will provide more details on proper usage in the
                    API documentation.
                  </p>
                  <p className="leading-8 py-4">
                    Eplayment grants Epaygames Accredited Merchants a revocable, non-exclusive, and
                    non-transferable limited license to access and/or use Eplayment’s APIs,
                    developer’s toolkit, and other software in accordance with the accompanying API
                    documentation made available by Eplayment for purposes of using the Epaygames
                    Payment Gateway. This license grant includes all updates, upgrades, new versions
                    and replacement software for your use in connection with the Epaygames Payment
                    Gateway. If you do not comply with these T&Cs, the API documentation, and any
                    other requirements provided by Eplayment, then you will be liable for all
                    resulting damages suffered by you, Eplayment and third parties. Upon expiration
                    or termination of this Agreement, you will immediately cease all use of the
                    Eplayment Service, including the API and the Epaygames Payment Gateway.
                  </p>
                  <p className="leading-8 py-4">
                    Subject to the terms of this Agreement, Eplayment will remit to your Eplayment
                    Wallet account, all amounts due to you from your transactions, minus any fees,
                    fines, reversals, chargebacks, refunds, setoffs, recoupments, or other amounts
                    that you owe to Eplayment under this agreement. You affirm that you are
                    authorized to initiate settlements to and debits from your Eplayment account,
                    and that your Eplayment account is owned by you. If you update your Eplayment
                    account, then you must ensure that you continue to comply with the requirements
                    of this section. If the Payout is not sufficient to cover the amounts due,
                    without limiting our other rights and remedies (all of which are cumulative),
                    you agree that we may debit your Eplayment account for the applicable amounts,
                    and/or set-off the applicable amounts against future Payouts.
                  </p>
                  <p className="leading-8 py-4">
                    We may require a holding period before making an initial settlement to your
                    Eplayment account. Settlements to Eplayment Accredited Merchants will go
                    straight to their Eplayment account as they are billed. For Epaygames Accredited
                    Merchants, settlements cover 24 hours and are sent out in 2 to 3 days. Please be
                    aware that a Payment Method Provider or Acquirer may delay settlement for any
                    reason (and thus delay your Payout arrival), and we are not responsible for any
                    harm suffered by you stemming from such delay.
                  </p>
                  <p className="leading-8 py-4">
                    We reserve the right to suspend settlement to you. Examples of situations where
                    we may do so are:
                    <ol className="list-inside  alphabetical-list pl-8">
                      <li>
                        where there are pending, anticipated, or excessive chargebacks, refunds, or
                        reversals,
                      </li>
                      <li>
                        in the event that we suspect or become aware of suspicious activity, and
                      </li>
                      <li>where we are required by applicable law or court order.</li>
                    </ol>
                  </p>
                  <p className="leading-8 py-4">
                    We have the right to withhold settlement to your Eplayment account upon
                    termination of this agreement if we reasonably determine that we may incur
                    losses resulting from credit, fraud, or other legal risks associated with your
                    account. If we exercise our right to withhold a Payout for any reason, we will
                    communicate the general reason for withholding the Payout and give you a
                    timeline for releasing the funds.
                  </p>
                  <p className="leading-8 py-4">
                    You may only use our Epaygames Payment Gateway to conduct legitimate
                    transactions with your customers. You are responsible for your relationship with
                    your customers. We are not responsible for the products or services you
                    publicize or sell, or that your customers purchase using the Epaygames Payment
                    Gateway; or if you accept donations, for your communication to your customers of
                    the intended use of such donations. You understand and affirm that you are
                    solely responsible for the nature and quality of the products or services you
                    provide, and for delivery, support, refunds, returns, and for any other
                    ancillary services you provide to your customers.
                  </p>
                  <p className="leading-8 py-4">
                    To enable us to process Transactions for you, you authorize and direct us, our
                    affiliates, the Payment Method Providers and Acquirers to receive and settle any
                    amounts due to you from your transactions through the Epaygames Payment Gateway.
                    You may not grant or assign any interest in the amounts due to you from your
                    transactions to any third party until such time as such amounts are deposited
                    into your Eplayment account. You appoint Eplayment as your agent for the limited
                    purpose of directing, receiving, holding and settling such amounts. You agree
                    that Eplayment’s receipt of such amounts satisfies the relevant end-customer’s
                    obligations to make payments to you. We will promptly update your account
                    balance to reflect any such amounts that we receive on your behalf.
                  </p>
                  <p className="leading-8 py-4">
                    You understand that even authorized transactions may be subject to a chargeback.
                    We are not responsible for or liable to you for authorized and completed charges
                    that are later the subject of a chargeback, refund, or reversal, are submitted
                    without authorization or in error, or violate any applicable laws or
                    regulations.
                  </p>
                  <p className="leading-8 py-4">
                    Epaygames Accredited Merchants and Eplayment Accredited Merchants are
                    immediately responsible to us for all chargebacks, refunds, reversals, or fines
                    (as defined below) regardless of the reason or timing. We may decline to act
                    upon a refund instruction, or delay execution of the instruction, if:
                    <ol className="list-inside  alphabetical-list pl-8">
                      <li>it would cause your account balance to become negative,</li>
                      <li>you are the subject of bankruptcy proceedings; or</li>
                      <li>
                        where we otherwise believe that there is a risk that you will not meet your
                        liabilities under this agreement (including with respect to the charge that
                        is the subject of the refund instruction).
                      </li>
                    </ol>
                  </p>
                  <p className="leading-8 py-4">
                    Credit card refunds may only be performed upon the instruction of the Epaygames
                    Accredited Merchant and Eplayment Accredited Merchant, in writing, stating the
                    particular customer to be refunded and the amount. Eplayment may refuse to
                    perform the refund if there are pending amounts due to you under this Agreement
                    or any other products availed of by you with Eplayment. Eplayment may refuse at
                    any time to perform a refund for you to your customer even if there are
                    available funds. Performance of this service shall be subject to fees as stated
                    by Eplayment.
                  </p>
                  <p className="leading-8 py-4">
                    If you accept payment for products or services not immediately deliverable to
                    the Customer, we may, in our sole discretion, initiate a reversal. Payment
                    Method Providers and/or Acquirers may also initiate reversals. Reversals may
                    result from:
                    <ol className="list-inside  alphabetical-list pl-8">
                      <li>
                        invalidation of a charge by a Payment Method Provider or an Acquirer,{' '}
                      </li>
                      <li>funds settled to you in error or without authorization; and </li>
                      <li>
                        submission of a charge in violation of this agreement, third party rules,
                        and/or applicable laws and regulations.
                      </li>
                    </ol>
                  </p>
                  <p className="leading-8 py-4">
                    You may be able to challenge a chargeback by submitting evidence to us through
                    various channels, including email or as otherwise indicated by Eplayment. We may
                    request additional information to provide to Payment Method Providers and
                    Acquirers to assist you in contesting the chargeback, but we cannot guarantee
                    that your challenge will be successful. Payment Method Providers and Acquirers
                    may deny your challenge for any reason they deem appropriate. You may not submit
                    a new charge which duplicates a transaction that is subject to a chargeback.
                  </p>
                  <p className="leading-8 py-4">
                    You are liable for all losses you incur when lost or stolen payment credentials
                    or accounts are used to purchase products or services from you. Eplayment does
                    not and will not insure you against losses caused by fraud under any
                    circumstances.
                  </p>
                  <p className="leading-8 py-4">
                    Although we provide you with the Epaygames Payment Gateway, we have no way of
                    knowing if any transaction is accurate or complete, or normal for your business
                    in particular or your type of business. Only you are responsible for knowing
                    whether a transaction initiated by your customer is erroneous (such as a
                    customer purchasing one item when they meant to order another) or suspicious
                    (such as unusual or large purchases, or a request for delivery to a foreign
                    country where this typically does not occur). If you are unsure if a transaction
                    is erroneous or suspicious, you agree to research the transaction and, if
                    necessary, contact your customer before fulfilling or completing the
                    transaction. You are solely responsible for any losses you incur due to
                    erroneous or fraudulent transactions in connection with your use of the
                    Eplayment Service.
                  </p>
                  <p className="leading-8 py-4">
                    Except where Eplayment and a customer have otherwise agreed, you maintain the
                    direct relationship with your customers and are responsible for:
                    <ol className="list-inside  alphabetical-list pl-8">
                      <li>
                        acquiring appropriate consent to transact through the Epaygames Payment
                        Gateway on their behalf
                      </li>
                      <li>providing confirmation or receipts to customers for each transaction </li>
                      <li>verifying customers’ identities, and</li>
                      <li>
                        determining a customer’s eligibility and authority to complete transactions.
                      </li>
                    </ol>
                  </p>
                  <p className="leading-8 py-4">
                    Customers of Epaygames Accredited Merchants and Eplayment Accredited Merchants
                    must understand the purpose, amount, and conditions of transactions processed
                    through the Epaygames Payment Gateway. When using the Epaygames Payment Gateway
                    you agree to:
                    <ol className="list-inside  alphabetical-list pl-8">
                      <li>
                        accurately communicate, and not misrepresent, the nature of the transaction,
                        and the amount of the good/service in the appropriate currency prior to
                        submitting it to the Eplayment Service
                      </li>
                      <li>
                        provide a receipt that accurately describes each transaction to customers
                      </li>
                      <li>
                        provide customers a meaningful way to contact you in the event that the
                        product or service is not provided as described
                      </li>
                      <li>
                        not use the Eplayment Service to sell products or services in a manner that
                        is unfair or deceptive, exposes customers to unreasonable risks, or does not
                        disclose material terms of a purchase in advance, and
                      </li>
                      <li>
                        inform customers that Eplayment and its affiliates process transactions for
                        you. You also agree to maintain and make available to your customers a fair
                        and neutral return, refund, cancellation, or adjustment policy, and clearly
                        explain the process by which customers can receive a refund.
                      </li>
                    </ol>
                  </p>
                  <p className="leading-8 py-4">
                    You hereby agree to undertake, and you acknowledge and understand that it is
                    your sole responsibility, to:
                    <ol className="list-inside  alphabetical-list pl-8">
                      <li>
                        obtain your customers’ consent to these T&Cd and the Privacy Notice, and
                      </li>
                      <li>
                        provide all notices and obtain all consents necessary for Eplayment’s use of
                        customer data.
                      </li>
                    </ol>
                  </p>
                </div>
                <div>
                  <h3 className="my-2 text-base font-bold">5. EPLAYMENT WALLET</h3>
                  <p className="leading-8 py-4">
                    The Eplayment Wallet is a reloadable e-money instrument. It is not a bank
                    deposit account, nor is it covered by the Philippine Deposit Insurance
                    Corporation (PDIC). It does not earn interest. It is subject to the rules and
                    regulations of the BSP, the Anti-Money Laundering Act (AMLA), as amended and the
                    Data Privacy Act of 2012 and its Implementing Rules and Regulations. The value
                    loaded in your Eplayment Wallet may be used to transfer or send money between
                    Eplayment Wallets via P2P Express Send or Transfer QR except when the transfer
                    is from an unverified account to a KYC verified account, and purchase goods and
                    services from Eplayment Accredited Merchants within the Eplayment App. Eplayment
                    Customers may also purchase goods and services outside the Eplayment App via
                    offline or online POS systems through the use of the Eplayment Visa Card.
                  </p>
                </div>
                <div>
                  <h3 className="my-2 text-base font-bold">6. TYPES OF EPLAYMENT ACCOUNTS</h3>

                  <p className="leading-8 py-4">6.1. Bronze</p>
                  <ol className="alphabetical-list pl-8">
                    <li>Non-KYC</li>
                    <li>Default account after registration</li>
                    <li>No correspon`ding EON UnionBank prepaid account</li>
                    <li>
                      Limits
                      <ol className="list-inside">
                        <li>Cash In: PHP 5,000.00</li>
                        <li>Balance: PHP 5,000.00</li>
                      </ol>
                    </li>
                    <li>
                      Functions
                      <ol className="list-inside">
                        <li>
                          Cash in from banks, online banks, e-wallets, or over-the-counter channels
                          available in the Eplayment Wallet
                        </li>
                        <li>Send money to other Bronze account holders</li>
                        <li>Pay bills to Billers available in the Eplayment Wallet</li>
                        <li>
                          Buy load from mobile network load providers available in the Eplayment
                          Wallet
                        </li>
                        <li>Buy game credits and vouchers available in the Eplayment Wallet</li>
                      </ol>
                    </li>
                  </ol>
                  <p className="leading-8 py-4">6.2. Silver</p>
                  <ol className="alphabetical-list pl-8">
                    <li>KYC verified</li>
                    <li>
                      Considered an electronic money account and is governed by BSP Circular 649
                    </li>
                    <li>Corresponds to an EON Lite UnionBank account</li>
                    <li>
                      Limits
                      <ol className="list-inside">
                        <li>Cash In: PHP 100,000.00 monthly</li>
                        <li>Balance: PHP 100,000.00</li>
                        <li>Withdrawal: PHP 50,000.00 daily and PHP 100,000.00 monthly</li>
                        <li>Fund Transfer: PHP 100,000.00 daily and PHP 100,000.00 monthly</li>
                        <li>POS Purchase: PHP 100,000.00 daily and PHP 100,000.00 monthly</li>
                      </ol>
                    </li>
                    <li>
                      Fees
                      <ol className="list-inside">
                        <li>PHP 8.00 monthly or PHP 100.00 annually</li>
                      </ol>
                    </li>
                    <li>
                      Functions
                      <ol className="list-inside">
                        <li>Everything the Bronze account can do</li>
                        <li>Cash in or deposit money from UnionBank branches</li>
                        <li>Send money to any type of Eplayment Wallet account</li>
                        <li>
                          Send money to accounts from other banks and e-wallets available in the
                          Eplayment Wallet
                        </li>
                        <li>
                          Cash out from ATMs and UnionBank branches through the linked physical
                          Eplayment Visa Card
                        </li>
                        <li>
                          Purchase goods and services outside the Eplayment App via offline or
                          online POS systems
                        </li>
                      </ol>
                    </li>
                  </ol>
                  <p className="leading-8 py-4">6.3. Gold</p>
                  <ol className="alphabetical-list pl-8">
                    <li>KYC verified</li>
                    <li>
                      Considered an electronic money account and is governed by BSP Circular 649
                    </li>
                    <li>Corresponds to an EON Plus UnionBank account</li>
                    <li>
                      Limits
                      <ol className="list-inside">
                        <li>Cash In: PHP 500,000.00 monthly</li>
                        <li>Balance: PHP 500,000.00</li>
                        <li>Withdrawal: PHP 50,000.00 daily and PHP 500,000.00 monthly</li>
                        <li>Fund Transfer: PHP 500,000.00 daily and PHP 500,000.00 monthly</li>
                        <li>POS Purchase: PHP 500,000.00 daily and PHP 500,000.00 monthly</li>
                      </ol>
                    </li>
                    <li>
                      Fees
                      <ol className="list-inside">
                        <li>PHP 17.00 monthly or PHP 200.00 annually</li>
                      </ol>
                    </li>
                    <li>
                      Functions
                      <ol className="list-inside">
                        <li>Everything the Silver account can do</li>
                      </ol>
                    </li>
                  </ol>
                  <p className="leading-8 py-4">6.4. Platinum</p>
                  <ol className="alphabetical-list pl-8">
                    <li>KYC verified</li>
                    <li>
                      Considered an electronic money account and is governed by BSP Circular 649
                    </li>
                    <li>Corresponds to an EON Pro UnionBank account</li>
                    <li>
                      Limits
                      <ol className="list-inside">
                        <li>Cash In: PHP 1,000,000.00 monthly</li>
                        <li>Balance: PHP 1,000,000.00</li>
                        <li>Withdrawal: PHP 50,000.00 daily and PHP 1,000,000.00 monthly</li>
                        <li>Fund Transfer: PHP 1,000,000.00 daily and PHP 1,000,000.00 monthly</li>
                        <li>POS Purchase: PHP 1,000,000.00 daily and PHP 1,000,000.00 monthly</li>
                      </ol>
                    </li>
                    <li>
                      Fees
                      <ol className="list-inside">
                        <li>PHP 29.00 monthly or PHP 350.00 annually</li>
                      </ol>
                    </li>
                    <li>
                      Functions
                      <ol className="list-inside">
                        <li>Everything the Platinum account can do</li>
                      </ol>
                    </li>
                  </ol>
                </div>
                <div>
                  <h3 className="my-4 text-base font-bold">7. CASH IN AND CASH OUT</h3>
                  <p className="leading-8 py-4">
                    You may cash in value into your Eplayment Wallet through any of the following
                    means:
                  </p>
                  <ol className="alphabetical-list pl-8">
                    <li>Eplayment Partner Outlets;</li>
                    <li>Mobile Banking Service;</li>
                    <li>Peer-to-Peer Transfer;</li>
                    <li>Transfer QR;</li>
                    <li>UnionBank Deposit (except for Bronze Eplayment Customers).</li>
                  </ol>
                  <p className="leading-8 py-4">
                    You may cash out your Eplayment Fund to Philippine Peso through ATMs and
                    UnionBank branches through the linked physical Eplayment Visa Card
                  </p>
                </div>
                <div>
                  <h3 className="my-2 text-base font-bold">8. REMOTE PURCHASES</h3>

                  <p className="leading-8 py-4">
                    When making online purchases, the Eplayment Customer is expected to conduct due
                    diligence to determine if the persons or merchant entities he is dealing with
                    are legitimate and reputable. Eplayment shall not be held liable and accountable
                    for any unauthorized transactions.
                  </p>

                  <p className="leading-8 py-4">
                    Once the transaction has been authorized, you bind yourself with the merchant’s
                    terms of sale such as but not limited to how you will receive the goods and/or
                    services that you purchased. Eplayment is not liable and accountable for any
                    undelivered, defective, or damaged goods and/or services.
                  </p>

                  <p className="leading-8 py-4">
                    Since you have done your due diligence, you shall be solely accountable for
                    payment transactions you have entered into, especially in dealing with web-based
                    merchants that have limited refund policy for invalid disputes. For purposes of
                    clarity, invalid disputes refer to all disputes except if the dispute pertains
                    to items purchased online that are no longer available.
                  </p>
                </div>
                <div>
                  <h3 className="my-2 text-base font-bold">9. BILLS PAYMENT</h3>

                  <p className="leading-8 py-4">
                    Payment of bills does not require a printed document from the Biller. Eplayment
                    shall partner with MultiPay Solutions to affiliate Billers to accept payments
                    via the “Pay Bills” menu. For this transaction, the Eplayment Customer shall
                    select the biller to be paid, and input their payment details and the amount to
                    be paid. Once these have been inputted, the Eplayment Customer shall see a
                    summary page with the payment details displayed for confirmation by the
                    Eplayment Customer. The Eplayment Customer will then confirm the transaction,
                    upon which an SMS or email receipt with a Transaction Reference Number is sent
                    to them as proof of payment.
                  </p>

                  <p className="leading-8 py-4">
                    Erroneous transactions, or payments sent by an Eplayment Customer to a wrong
                    party, shall be deemed successful and shall follow a no refund policy if the
                    erroneous transaction has been proven to be due to Eplayment Customer error
                    after investigation (e.g. wrong account details, wrong biller). The decision of
                    Eplayment after the investigation shall be conclusive.
                  </p>
                </div>
                <div>
                  <h3 className="my-2 text-base font-bold">10. TRANSACTION AND WALLET LIMIT</h3>
                  <p className="leading-8 py-4">
                    Transaction and Wallet balance limits shall be determined solely by Eplayment,
                    pursuant to applicable laws. Limits are applied not on a per Eplayment Wallet
                    basis but on a per Eplayment Customer basis. Limits shall be shared across all
                    the Eplayment accounts linked to the Eplayment Customer’s Customer Profile.
                  </p>
                </div>
                <div>
                  <h3 className="my-2 text-base font-bold">
                    11. ACTIVATION AND DEACTIVATION OF EPLAYMENT WALLET
                  </h3>

                  <p className="leading-8 py-4">
                    Eplayment may introduce or deactivate Eplayment Wallet features at its sole
                    option.
                  </p>

                  <p className="leading-8 py-4">
                    Eplayment may suspend or terminate an Eplayment Customer’s privilege to use a
                    particular feature of the Eplayment Service, whenever it deems necessary,
                    particularly, but not limited to occasions when there are fraudulent
                    transactions. In case of reactivation of said feature as requested by the
                    Eplayment Customer, a reactivation charge may apply. The approval of any
                    reactivation request remains the sole option of Eplayment.
                  </p>

                  <p className="leading-8 py-4">
                    All KYC verified Eplayment Customers are awarded at least one Eplayment Visa
                    Card subject to the terms and conditions of Visa.
                  </p>

                  <p className="leading-8 py-4">
                    Any Eplayment Visa Card issued to an Eplayment Customer remains the sole
                    property of Eplayment and is non-transferable. Eplayment may suspend or
                    terminate the use of the Eplayment Visa Card for whatever reason it deems fit.
                    The Eplayment Customer agrees to surrender the Eplayment Visa Card upon demand
                    by Eplayment. In the event of any suspension, termination, or confiscation of
                    the Eplayment Visa Card, the Eplayment Customer agrees to hold Eplayment and its
                    affiliates, board of directors, officers, and employees free and harmless from
                    any claim, damage, loss, expense, suit, or liability whatsoever, arising from
                    such suspension, termination, or confiscation.
                  </p>

                  <p className="leading-8 py-4">
                    In the event of any unauthorized use of the Eplayment Visa Card, Eplayment shall
                    not be liable for any inconvenience or damage caused to the Eplayment Customer.
                    Moreover, Eplayment shall not be liable for any failure by Eplayment Customers
                    to avail of Eplayment Services due to non-compliance with the application
                    requirements.
                  </p>
                </div>
                <div>
                  <h3 className="my-2 text-base font-bold">12. LOYALTY OR REWARDS PROGRAM</h3>
                  <p className="leading-8 py-4">
                    Eplayment, at its sole option, shall have the option to run a Loyalty or Rewards
                    Program on the use of the Eplayment Service. The Eplayment Customer’s rights and
                    obligations in the program shall be covered by separate Terms and Conditions
                    specific to the Loyalty or Rewards Program.
                  </p>
                </div>
                <div>
                  <h3 className="my-2 text-base font-bold">13. FEES, RATES, AND OTHER CHARGES</h3>
                  <p className="leading-8 py-4">
                    The Eplayment Customer agrees to pay all fees and charges to use the Eplayment
                    Wallet as may be imposed by Eplayment, such as, but not limited to, Cash In,
                    Cash Out, ATM withdrawal, and KYC account annual fees. Fees and other charges,
                    as may be applicable, shall be inclusive of all applicable Philippine taxes and
                    shall be debited from the Eplayment Customer’s Eplayment Wallet or paid up
                    front.
                  </p>

                  <p className="leading-8 py-4">
                    An account becomes dormant if there has been no activity (deposit or withdrawal
                    excluding earned interest and withholding tax imposed thereon) for a period of
                    two (2) years. A “Notice of Dormancy” letter shall be sent to the account holder
                    at least 60 calendar days before the account becomes dormant. Eplayment will
                    impose a dormancy fee on a dormant account five (5) years after the last
                    activity, provided that:
                    <ol className="alphabetical-list pl-8">
                      <li>the balance falls below the minimum monthly ADB, if any;</li>
                      <li>
                        the monthly dormancy fee will not exceed P30.00 in accordance with BSP
                        regulations, and
                      </li>
                      <li>
                        the required two notice requirement prior to charging the dormancy fee is
                        made, as required by existing banking regulations, or as may be amended from
                        time to time.
                      </li>
                    </ol>
                  </p>

                  <p className="leading-8 py-4">
                    Aside from dormancy fee, a monthly service charge will be automatically deducted
                    from dormant accounts every end of the month, if the account&apos;s remaining
                    balance is below the required minimum monthly average daily balance (ADB) for at
                    least two (2) consecutive months, or as may be required by existing BSP
                    regulations.
                  </p>

                  <p className="leading-8 py-4">
                    After ten (10) years of continuous inactivity, dormant accounts will be
                    reclassified to “Due to Treasurer of the Philippines”. In accordance with the
                    Unclaimed Balance Law, the dormant account shall be escheated in favor of the
                    Philippine Government upon order of the court. If the “unclaimed balance” has
                    been deposited by the Bank to the Treasurer of the Philippines, the account
                    holder will have to go directly to the Bureau of the Treasury for the proper
                    procedure on reactivation.
                  </p>

                  <p className="leading-8 py-4">
                    Eplayment will provide the Epaygames Payment Gateway at the rates and for the
                    fees described on the Eplayment Website. We may revise the fees at any time. In
                    case fees are revised, Eplayment will provide the Eplayment Accredited Merchant
                    and Epaygames Accredited Merchant with no less than 30 days advance notice of
                    such change. In addition to the fees, you are also responsible for any penalties
                    or fines imposed on you in relation to your account by Eplayment or any Payment
                    Method Provider or Acquirer resulting from your use of Epaygames Payment Gateway
                    in a manner not permitted by this agreement or a Payment Method Provider’s third
                    party rules.
                  </p>

                  <p className="leading-8 py-4">
                    Our fees for the Epaygames Payment Gateway are exclusive of any applicable
                    taxes, except as expressly stated to the contrary. You shall pay, indemnify, and
                    hold Eplayment harmless from:
                    <ol className="alphabetical-list pl-8">
                      <li>
                        any sales, use, excise, import or export, value-added, or similar tax or
                        duty, and any other tax or duty not based on Eplayment’s income, and
                      </li>
                      <li>
                        all government permit fees, customs fees and similar fees which Eplayment
                        may incur with respect to this agreement.
                      </li>
                    </ol>
                  </p>

                  <p className="leading-8 py-4">
                    Such taxes, fees and duties paid by you shall not be considered a part of, a
                    deduction from, or an offset against, payments due to Eplayment hereunder.
                    Additionally, you understand that we may send documents to you and tax
                    authorities for transactions processed using the Eplayment Service. Pursuant to
                    applicable law, we may be required to file periodic informational returns with
                    taxing authorities in relation to your use of the Eplayment Service.
                  </p>

                  <p className="leading-8 py-4">
                    To know more about Eplayment fees, please visit Eplayment Help & Support.
                  </p>
                </div>
                <div>
                  <h3 className="my-2 text-base font-bold">14. TRANSACTION HISTORY</h3>
                  <p className="leading-8 py-4">
                    Upon the request of the Eplayment Customer, Eplayment shall send a copy of the
                    Eplayment Customer’s Transaction History via email. The mere act of Eplayment in
                    sending the Transaction History to the Eplayment Customer is a conclusive
                    presumption that the Eplayment Customer has received the same. Eplayment shall
                    be held free and harmless from any and all liability should the Transaction
                    History be read by any person other than the Eplayment Customer. Neither may the
                    Eplayment Customer thereafter raise the defense that they failed to receive the
                    Transaction History statement.
                  </p>
                </div>
                <div>
                  <h3 className="my-2 text-base font-bold">
                    15. DISPUTES AND ERRONEOUS TRANSACTIONS
                  </h3>
                  <p className="leading-8 py-4">
                    The details in the SMS confirmation message after particular transactions
                    including, but not limited to, Cash In, Send Money, Pay Bills, Buy Load, and Buy
                    Game Credits, and the entries in the Transaction History are presumed true and
                    correct unless the Eplayment Customer notifies Eplayment in writing of any
                    discrepancy or dispute thereon within fifteen (15) days from the date of
                    transaction. If no such dispute is reported within the said period, all
                    transactions and the entries in the Transaction History are considered
                    conclusively true and correct. Disputed transactions shall only be credited back
                    to the Eplayment Wallet once the dispute has been properly investigated, and
                    ascertained to be in favor of the Eplayment Customer. On the other hand, there
                    shall be no reversals for transactions made through erroneous transactions made
                    by the Eplayment Customer.
                  </p>
                </div>
                <div>
                  <h3 className="my-2 text-base font-bold">
                    16. DEVICE, EPLAYMENT WALLET, AND EPLAYMENT VISA CARD SECURITY
                  </h3>
                  <p className="leading-8 py-4">
                    The Eplayment Customer shall be responsible for the security of their device,
                    Eplayment Wallet and/or Visa Card, MIN, MPIN, and password. All transactions
                    made using the Eplayment Wallet and/or Visa Card are conclusively presumed to be
                    made by the Eplayment Customer, and the Eplayment Customer shall be liable
                    therefore.
                  </p>
                </div>
                <div>
                  <h3 className="my-2 text-base font-bold">
                    17. LOSS OF EPLAYMENT REGISTERED MIN AND/OR EPLAYMENT VISA CARD
                  </h3>
                  <p className="leading-8 py-4">
                    The security and proper care of the Eplayment registered MIN and Eplayment Visa
                    Card, as well as the confidentiality of their MPIN and password shall be the
                    Eplayment Customer’s sole responsibility.
                  </p>
                  <p className="leading-8 py-4">
                    In case of loss of Eplayment registered MIN and Eplayment Visa Card, the
                    Eplayment Customer shall immediately report to Eplayment Help & Support of such
                    loss within twenty-four (24) hours, via phone call or written report/affidavit
                    scanned and sent through email or submitted to the Eplayment office. Suspension
                    of the Eplayment Wallet and/or Eplayment Visa Card shall be processed only upon
                    proper authentication of the phone call or written report/affidavit, as the case
                    may be. All transactions made prior to the report of loss shall continue to be
                    the liability of the Eplayment Customer.
                  </p>
                  <p className="leading-8 py-4">
                    A replacement MIN and/or Eplayment Visa Card may also be created at the cost of
                    the Eplayment Customer.
                  </p>
                </div>
                <div>
                  <h3 className="my-2 text-base font-bold">18. TERMINATION OF EPLAYMENT ACCOUNT</h3>

                  <p className="leading-8 py-4">
                    At any time, you may discontinue your use of the Eplayment Service. Visit our
                    Privacy Notice to understand how we handle your information accordingly. For
                    privacy information on the Epaygames Payment Gateway, visit our Privacy Notice
                    for Epaygames.
                  </p>

                  <p className="leading-8 py-4">
                    Termination does not immediately relieve you of obligations incurred by you
                    under this agreement. Upon termination, you agree to:
                    <ol className="alphabetical-list pl-8">
                      <li>complete all pending transactions</li>
                      <li>stop accepting new transactions</li>
                      <li>
                        for Epaygames Accredited Merchants, immediately remove all trademarks from
                        your website or application (unless permitted under a separate license with
                        the payment network), and/or
                      </li>
                      <li>
                        for Eplayment Accredited Merchants, immediately remove all trademarks from
                        your website or application
                      </li>
                    </ol>
                  </p>
                  <p className="leading-8 py-4">
                    Your continued or renewed use of the Eplayment Service after all pending
                    transactions have been processed serves to renew your consent to these T&Cs. If
                    you terminate this agreement, we will pay out any remaining funds owed to you
                    subject to these T&Cs. After termination by either party, you shall no longer
                    have access to, and shall cease all use of the Eplayment Service. Any
                    termination of this agreement does not relieve you of any obligations to pay any
                    financial obligation incurred by you or through your use of the Eplayment
                    Service prior to or after termination. In addition, all licenses granted to you
                    by Eplayment under this agreement shall be terminated.
                  </p>

                  <p className="leading-8 py-4">
                    Should the Eplayment Customer fail to comply with the Terms and Conditions
                    provided herein, the right to use the Eplayment Wallet and/or Eplayment Visa
                    Card shall be terminated.
                  </p>

                  <p className="leading-8 py-4">
                    Any account with zero balance for three (3) consecutive months regardless of
                    status, may automatically be closed by the Bank without notice.
                  </p>

                  <p className="leading-8 py-4">
                    Eplayment retains the right, at its sole discretion, and at any time, without
                    obligation to disclose the reasons for such closure, to close any or all of the
                    account holder’s accounts, refuse to accept any further deposits, and return to
                    the account holder the whole or part of his deposit together with the interest
                    due upon the same. The account holder may be notified either personally or by
                    email. Eplayment is authorized to close accounts even without prior notice in
                    case said accounts are:
                  </p>
                  <ol className="alphabetical-list pl-8">
                    <li>
                      mishandled by the issuance of unfunded or insufficiently funded check(s); or
                    </li>
                    <li>
                      involved in or used or suspected to be used for any fraudulent, criminal or
                      unlawful activities.
                    </li>
                  </ol>
                </div>
                <div>
                  <h3 className="my-2 text-base font-bold">19. LIMITATION ON LIABILITY</h3>
                  <p className="leading-8 py-4">
                    Eplayment makes no warranty, express or implied, regarding the Eplayment
                    Service. The Eplayment Service is offered on an “AS IS, AS AVAILABLE” basis
                    without warranties of any kind, other than warranties that are incapable of
                    exclusion, waiver, or limitation under the laws applicable to these Terms and
                    Conditions.{' '}
                  </p>

                  <p className="leading-8 py-4">
                    Without limiting the generality of the foregoing, Eplayment makes no warranty:
                  </p>
                  <ol className="alphabetical-list pl-8">
                    <li>
                      as to the content, quality, or accuracy of the data or information provided by
                      Eplayment hereunder or received or transmitted using the Eplayment Services;
                    </li>
                    <li>as to any service or product obtained using the Eplayment Services;</li>
                    <li>that the Eplayment Services will be uninterrupted or error-free; and</li>
                    <li>that any particular result or information will be obtained.</li>
                  </ol>

                  <p className="leading-8 py-4">
                    Eplayment shall not be liable for any loss, cost, compensation, damage, or
                    liability to you or any third party arising from, directly or indirectly, or as
                    a result of any or all of the following:
                  </p>
                  <ol className="alphabetical-list pl-8">
                    <li>
                      refusal of Eplayment, any bank, financial institution, ATM, or merchant
                      establishment and the like to allow, accept, or honor the Eplayment account;
                    </li>
                    <li>
                      Eplayment Service/Eplayment Wallet is honored by any bank, financial
                      institution, ATM, or merchant establishment; however, payment transaction is
                      not authorized, for any reason whatsoever;
                    </li>
                    <li>
                      any delay, interruption, or termination of the Eplayment transaction whether
                      caused by administrative error, technical, mechanical, electrical, or
                      electronic fault or difficulty or any other reason or circumstance beyond
                      Eplayment’s control (including but not limited to acts of God, strike, labor
                      disputes, fire, disturbance, action of government, atmospheric conditions,
                      lightning, interference, or damage by third parties or any change in
                      legislation);
                    </li>
                    <li>
                      theft or unauthorized use of Eplayment Wallet or Eplayment Visa Card or any
                      loss, costs, damages, or payables to any third party by the Eplayment
                      Customer;
                    </li>
                    <li>
                      any misrepresentation or fraud by or misconduct of any third party, such as
                      but not limited to owners, employees, or Eplayment agents.
                    </li>
                  </ol>
                  <p className="leading-8 py-4">
                    In the event of any action that the Eplayment Customer may file against
                    Eplayment, the Eplayment Customer agrees that Eplayment’s liability shall not
                    exceed ONE THOUSAND PESOS (PHP 1,000.00), or the amount of the damages actually
                    suffered by the Eplayment Customer, whichever is lower.
                  </p>
                </div>
                <div>
                  <h3 className="my-2 text-base font-bold">20. FRAUDULENT TRANSACTIONS</h3>

                  <p className="leading-8 py-4">
                    20.1. Blocked Eplayment Wallet and Eplayment Visa Card
                  </p>

                  <p className="leading-8 py-4">
                    Eplayment shall have the right to automatically suspend or block the Eplayment
                    Wallet and Eplayment Visa Card in the event that Eplayment has reason to believe
                    that the Eplayment Customer’s Eplayment Wallet and/or Eplayment Visa Card may be
                    used for fraudulent or suspicious transactions or by an unauthorized person.
                    Eplayment may, but shall not have the obligation to, inform the Eplayment
                    Customer prior to suspending or blocking the Eplayment Wallet and/or Eplayment
                    Visa Card pursuant to this Section. The Eplayment Customer acknowledges the
                    authority of Eplayment to suspend or block the Eplayment Wallet and/or Eplayment
                    Visa Card and accordingly, the Eplayment Customer shall hold Eplayment free and
                    harmless against any and all consequences of such suspension or blocking, or any
                    loss or damage which the Eplayment Customer may suffer as a result thereof.
                  </p>

                  <p className="leading-8 py-4">20.2. Discretion</p>

                  <p className="leading-8 py-4">
                    Without giving any reason or notice, and without prejudice to the other
                    provision hereof, Eplayment has the absolute discretion to:
                  </p>
                  <ol className="alphabetical-list pl-8">
                    <li>
                      refuse to approve any Eplayment transaction even if there is sufficient
                      available balance;
                    </li>
                    <li>
                      suspend, terminate or cancel the Eplayment Customer’s right to use the
                      Eplayment Wallet and/or Eplayment Visa Card;
                    </li>
                    <li>increase or decrease the balance limit;</li>
                    <li>refuse to re-issue, renew, or replace the Eplayment Visa Card; and</li>
                    <li>
                      introduce, amend, vary, restrict, terminate, or withdraw the benefits,
                      services, facilities and privileges with respect to or in connection with the
                      Eplayment Wallet, whether specifically relating to the Eplayment Customer or
                      generally to all or specific Eplayment Customers.
                    </li>
                  </ol>

                  <p className="leading-8 py-4">
                    {' '}
                    20.3. Fraudulent Credit Card Transactions via Epaygames Payment Gateway
                  </p>
                  <p className="leading-8 py-4">
                    Each party undertakes to provide complete support and assistance to the other
                    party in detecting, investigating and preventing any offense that may be
                    committed, or has been committed under this agreement, by any person against
                    Eplayment or the Epaygames Accredited Merchant. Should any prohibited practices
                    or restricted service, fraudulent transactions, counterfeit cards, chargebacks,
                    violation of any BSP rules and regulations, and/or similar incidents be
                    performed by the Epaygames Accredited Merchant, Eplayment Accredited Merchant,
                    or third party (Suspected Activity), the incident may be the subject of an
                    investigation, at the option of Eplayment.
                  </p>

                  <p className="leading-8 py-4">
                    Where Eplayment suspects involvement of the Epaygames Accredited Merchant,
                    Eplayment Accredited Merchant and/or its representatives in the Suspected
                    Activity:
                    <ol className=" alphabetical-list pl-8">
                      <li>
                        Eplayment may investigate the matter by appointing an Investigating Officer
                        and entrusting them with necessary powers;
                      </li>
                      <li>
                        The Investigating Officer may investigate the records of the Epaygames
                        Accredited Merchant or Eplayment Accredited Merchant relating to
                        transactions of the customers and require any information or clarification
                        from the Epaygames Accredited Merchant, Eplayment Accredited Merchant, or
                        its representatives;
                      </li>
                      <li>
                        Eplayment shall have the right to require and/ or ask for help of any
                        government or outside agency in investigating frauds;
                      </li>
                      <li>
                        Eplayment may suspend all or any of its activities at the Epaygames
                        Accredited Merchant or Eplayment Accredited Merchant’s application, website,
                        and other platforms, until the matter under investigation is resolved to the
                        satisfaction of Eplayment. In order to avoid any doubt the parties agree
                        that all payments due to the Epaygames Accredited Merchant or Eplayment
                        Accredited Merchant shall be suspended until the matter under investigation
                        is resolved.{' '}
                      </li>
                      <li>
                        The Epaygames Accredited Merchant or Eplayment Accredited Merchant, upon
                        request by Eplayment or the Investigating Officer, shall provide all
                        information, documents and other materials to Eplayment or to the
                        Investigating Officer pertaining to any Suspected Activity relating to
                        transactions of the customers without undue delay;
                      </li>
                      <li>
                        Where the Investigating Officer proves that the Epaygames Accredited
                        Merchant, Eplayment Accredited Merchant and/ or its representatives are
                        involved in any offense committed against.
                      </li>
                    </ol>
                  </p>

                  <p className="leading-8 py-4">
                    20.4. Credit Card Chargebacks via Epaygames Payment Gateway
                  </p>

                  <p className="leading-8 py-4">
                    Notwithstanding any provision of this agreement to the contrary or any
                    authorization given in relation to such transaction, Eplayment shall be
                    entitled, to refuse payment to the Epaygames Accredited Merchant or Eplayment
                    Accredited Merchant of all or part of any amount of any transaction less the
                    discount and less applicable taxes, in case of the following events (each, a
                    “Chargeback Event”) occurs:
                    <ol className="alphabetical-list pl-8">
                      <li>
                        The cardholder disputes the nature, quality, use or fitness of the goods
                        sold and/or services entered under the transaction, or alleges that the
                        Epaygames Accredited Merchant or Eplayment Accredited Merchant has breached
                        the terms of the contract of sale or service entered into between the
                        Epaygames Accredited Merchant or Eplayment Accredited Merchant and the
                        cardholder or any representation or warranty made by the Epaygames
                        Accredited Merchant or Eplayment Accredited Merchant to the cardholder;
                      </li>
                      <li>
                        The cardholder disputes or denies that the transaction was effected by
                        him/her or the contract of sale or service with the Epaygames Accredited
                        Merchant or Eplayment Accredited Merchant was entered into by him/her or
                        delivery of the goods sold and/or performance of the services rendered under
                        the transaction was received by him/her;
                      </li>
                      <li>
                        Eplayment shall refer to the Epaygames Accredited Merchant or Eplayment
                        Accredited Merchant all transaction/s disputed by the cardholder and
                        Epaygames Accredited Merchant or Eplayment Accredited Merchant undertakes to
                        resolve the dispute with the cardholder within fifteen (15) business days
                        upon receipt of advice from Eplayment. Disputed transaction/s which the
                        Epaygames Accredited Merchant or Eplayment Accredited Merchant has failed to
                        resolve within the aforestated period shall be automatically charged back by
                        Eplayment from the Epaygames Accredited Merchant or Eplayment Accredited
                        Merchant. The contract of sale or service entered into between the Epaygames
                        Accredited Merchant or Eplayment Accredited Merchant and the cardholder in
                        relation to the goods and/or services rendered under the transaction is void
                        or voidable at law, or the use of the card or the performance of any
                        person’s obligations under such contract of sale or service involves any
                        illegal or unlawful act. Provided, in case of voidable contract, it shall be
                        raised by the cardholder and communicated by Eplayment to Epaygames
                        Accredited Merchant or Eplayment Accredited Merchant within ten (10) days
                        from the consummation of transaction;
                      </li>
                      <li>
                        Payment in relation to the Transaction has been mistakenly or wrongly made
                        by the cardholder to the Epaygames Accredited Merchant or Eplayment
                        Accredited Merchant;
                      </li>
                      <li>
                        No authorization and/or authorization code numbers were sought by and/or
                        granted to the Epaygames Accredited Merchant or Eplayment Accredited
                        Merchant for the transaction as required under this agreement;
                      </li>
                      <li>
                        The card used for the transaction is not valid card and/or has been listed
                        in any warning bulletin;
                      </li>
                      <li>
                        The cardholder alleges that the transaction draft or charge slip has been
                        drawn or altered without his consent or authority;
                      </li>
                      <li>
                        The transaction draft or charge slip is not signed by the cardholder or any
                        part of it is illegible, on the case when the transaction draft or charge
                        slip requires cardholder’s signature;
                      </li>
                      <li>
                        The copy of any transaction draft or charge slip or any document required to
                        be signed by the cardholder in relation to any transaction presented to
                        Eplayment or retained by the Epaygames Accredited Merchant or Eplayment
                        Accredited Merchant is not identical to the copy of the same as given to the
                        cardholder;
                      </li>
                      <li>
                        The Epaygames Accredited Merchant or Eplayment Accredited Merchant does not
                        furnish Eplayment the original copy of the transaction draft or charge slip
                        or a copy of it, invoice or other document or record relating to the
                        transaction forthwith upon request of Eplayment;
                      </li>
                      <li>
                        The Epaygames Accredited Merchant or Eplayment Accredited Merchant does not
                        comply with any of its obligations or the requirements under this agreement
                        in relation to any transaction or any security measures or guidelines
                        relating to this agreement issued by Eplayment;
                      </li>
                      <li>
                        There has been a breach by the Epaygames Accredited Merchant or Eplayment
                        Accredited Merchant of any other of its obligations under this agreement not
                        specified herein, or of any other agreement entered into between the
                        Epaygames Accredited Merchant or Eplayment Accredited Merchant, and
                        Eplayment or non- payment or non-performance of any other obligation
                        whatsoever owed by the Epaygames Accredited Merchant or Eplayment Accredited
                        Merchant to Eplayment, whether or not related to this agreement;
                      </li>
                      <li>
                        The Epaygames Accredited Merchant or Eplayment Accredited Merchant processed
                        the same transaction more than once; or
                      </li>
                      <li>
                        The occurrence of fraud and other events determined by card network or any
                        other issuer and notified by Eplayment and its payment partners as a
                        chargeback event.
                      </li>
                    </ol>
                  </p>

                  <p className="leading-8 py-4">
                    If any of the foregoing Chargeback Events occur, Eplayment has the right not to
                    accept the transactions and chargeback such amount to the Epaygames Accredited
                    Merchant or Eplayment Accredited Merchant via a notice to them of such
                    chargeback.
                  </p>

                  <p className="leading-8 py-4">
                    The amount corresponding to the chargeback (Chargeback Amount) shall first be
                    applied by Eplayment against the future billings of the Epaygames Accredited
                    Merchant or Eplayment Accredited Merchant. If no sum or payment is due to the
                    Epaygames Accredited Merchant or Eplayment Accredited Merchant that will allow
                    Eplayment to deduct/set-off the Chargeback Amount, Eplayment shall seek
                    reimbursement from the Epaygames Accredited Merchant or Eplayment Accredited
                    Merchant of the Chargeback Amount, upon which the Epaygames Accredited Merchant
                    or Eplayment Accredited Merchant shall reimburse Eplayment within three (3)
                    banking days from receipt of written demand. If despite receipt of such demand,
                    Epaygames Accredited Merchant or Eplayment Accredited Merchant fails to
                    reimburse Eplayment, Epaygames Accredited Merchant or Eplayment Accredited
                    Merchant hereby expressly authorizes Eplayment to deduct the Chargeback Amount
                    due without the need of demand or of any further act or deed, against any money,
                    securities and things of value which are now or may hereinafter be in the
                    possession of Eplayment or any of its subsidiaries and affiliates.
                  </p>
                </div>

                <div>
                  <h3 className="my-2 text-base font-bold">21. DATA PRIVACY</h3>

                  <p className="leading-8 py-4">
                    <span className="term">“Biometrics”</span> shall refer to the user’s measurement
                    and analysis of unique physical or behavioral characteristics (such as the face,
                    fingerprint, or voice patterns) especially as a means of verifying personal
                    identity.
                  </p>

                  <p className="leading-8 py-4">21.1. Data Collection</p>

                  <p className="leading-8 py-4">
                    Eplayment shall keep all Eplayment Customer files in strictest confidence. By
                    providing their information for the purpose of availing an Eplayment Wallet, the
                    Eplayment Customer expressly consents to the processing of their supplied
                    customer data, as may be applicable. Customer Data are either Personal
                    Information or Non-Personal Information. Personal Information is any information
                    from which the identity of an individual can be reasonably and directly
                    ascertained, or when put together with other information would directly and
                    certainly identify an individual. It also includes, but is not limited to, data
                    that would help us verify:
                  </p>
                  <ol className="alphabetical-list pl-8">
                    <li>
                      the Eplayment Customer’s identity such as such as name, gender, date of birth,
                      address, telephone/mobile number, email address, proof of identification,
                      source of income, employment, and other data points whenever applicable;
                    </li>
                    <li>
                      the location of the Eplayment Customer’s device whether desktop, laptop, or
                      mobile devices whenever the Eplayment Customer accesses the Eplayment App or
                      the Eplayment Website; and
                    </li>
                    <li>
                      the navigation experience when accessing the Eplayment App and the Eplayment
                      Website to see activities done in the channels, the pages visited, and the
                      sequence thereof.
                    </li>
                  </ol>

                  <p className="leading-8 py-4">
                    By enabling biometrics login, Eplayment Customers allow Eplayment to use
                    biometrics data saved in their device for the sole purpose of securing their
                    login in the Eplayment App and Eplayment Wallet. This data shall not be used for
                    any other purpose.
                  </p>
                  <p className="leading-8 py-4">21.2. Data Usage </p>

                  <p className="leading-8 py-4">
                    Without limiting the generality of the foregoing, the Eplayment Customer
                    consents and authorizes Eplayment to store, process, disclose, exchange, and
                    release the said information to its associates, affiliates, subsidiaries,
                    officers, employees, agents, lawyers, and other consultants,
                    prepaid/debit/credit bureaus or any such persons as Eplayment deems necessary,
                    or as required by law, rule, or regulation, including but not limited to:
                  </p>
                  <ol className="alphabetical-list pl-8">
                    <li>
                      providing the Eplayment Customer with chosen Eplayment products and services,
                      including customer support;
                    </li>
                    <li>
                      enhancing customer experience and improving, developing, and determining
                      tailored products to meet Eplayment Customer preferences and needs;
                    </li>
                    <li>
                      communicating relevant products and/or advisories to Eplayment Customers;
                    </li>
                    <li>
                      showing relevant ads on and off the Eplayment Service and measuring the
                      effectiveness and reach of ads and services;
                    </li>
                    <li>
                      abiding by any safety, security, public service, or legal requirements and
                      processes; and
                    </li>
                    <li>
                      processing information for statistical, analytical, and research purposes.
                    </li>
                    <li>
                      marketing your Eplayment Accredited Merchant account, Epaygames Accredited
                      Merchant account, and/or public username in our marketing materials including,
                      but not limited to use on the Eplayment Website, in public Eplayment Customer
                      listings, in press releases, in partnership campaigns, and in our social media
                      pages.
                    </li>
                  </ol>
                  <p className="leading-8 py-4">
                    We may provide you with various information in furtherance of the Eplayment
                    Service. Our intention in doing so is to be helpful and to make the Eplayment
                    Service more useful to you. However, you agree that all information and
                    suggestions that we provide to you through the Service is strictly for
                    informational purposes and shall not be construed or relied upon in any way, and
                    specifically shall not be construed or relied upon as professional advice of any
                    kind. You agree that, to the fullest extent permitted by law, and as detailed
                    above in the “Limitation on Liability” section of these T&Cs, we will not incur
                    any liability at all whatsoever in the event that your reliance on any
                    information provided by us results in harm or damage to you or your property.
                  </p>
                </div>
                <div>
                  <h3 className="my-2 text-base font-bold">22. DATA SHARING</h3>
                  <p className="leading-8 py-4">
                    You hereby consent to and authorize Eplayment, its subsidiaries and affiliates,
                    and/or its third party partners contracted by Eplayment for the purpose of
                    conducting its operations, including but not limited to fraud and risk
                    management, sales and marketing activities, communications relating to their
                    products and/or services, product and system development and innovation,
                    customer experience management and improvement, and market research, to collect
                    and process any and all information related thereto from whatever relevant
                    source.
                  </p>

                  <p className="leading-8 py-4">
                    You hereby consent to and authorize the disclosure of and release by Eplayment
                    and its subsidiaries and affiliates, and Eplayment’s third party partners, of
                    any and all information required by Eplayment and/or its third party partners
                    such as, but not limited to, the following:
                  </p>
                  <ol className="alphabetical-list pl-8">
                    <li>promo subscription and redemption records;</li>
                    <li>customer relationship management records;</li>
                    <li>data usage records;</li>
                    <li>top up and usage records;</li>
                    <li>credit information;</li>
                    <li>KYC data;</li>
                    <li>registration data;</li>
                    <li>transaction data.</li>
                  </ol>

                  <p className="leading-8 py-4">
                    In addition, you hereby agree to share your Eplayment information details,
                    including but not limited to your complete name, gender, marital status, address
                    (permanent and present), date and place of birth, nationality, contact details,
                    nature of work, identification (with number) type, and occupation or source of
                    funds, to Eplayment’s remittance partners for purposes of service fulfillment
                    and local and international anti-money laundering compliance requirements.
                  </p>

                  <p className="leading-8 py-4">
                    The foregoing consents and authorizations shall continue for the duration of,
                    and shall survive the termination of, this Agreement, or any other transactions,
                    dealings, arrangements, and accounts which you may have with, or avail from,
                    Eplayment.
                  </p>
                </div>
                <div>
                  <h3 className="my-2 text-base font-bold">23. VENUE OF LITIGATION</h3>
                  <p className="leading-8 py-4">
                    Any case or dispute arising from these terms and conditions shall be governed
                    and litigated under the laws of the Republic of the Philippines. Venue of all
                    suits shall be exclusively at the appropriate courts of Quezon City or at any
                    location at the exclusive option of Eplayment.
                  </p>
                </div>
                <div>
                  <h3 className="my-2 text-base font-bold">24. NON-WAIVER OF RIGHTS</h3>
                  <p className="leading-8 py-4">
                    Failure, omission, or delay on the part of Eplayment to exercise its rights or
                    remedies under these Terms and Conditions shall not operate as a waiver.
                  </p>
                </div>
                <div>
                  <h3 className="my-2 text-base font-bold">25. SEPARABILITY CLAUSE</h3>
                  <p className="leading-8 py-4">
                    Should any term or condition in this Agreement be rendered void, illegal, or
                    unenforceable in any respect under any law, the validity, legality, and
                    enforceability of the remaining terms and conditions shall not be affected or
                    impaired thereby.
                  </p>
                </div>
                <div>
                  <h3 className="my-2 text-base font-bold">26. AGREEMENT</h3>
                  <p className="leading-8 py-4">
                    The Eplayment Customer agrees to be bound by the Terms and Conditions governing
                    the issuance and use of the Eplayment Service upon the Eplayment Customer
                    downloading, activating, or using Eplayment. Should the Eplayment Customer
                    disagree with the Terms and Conditions, the Eplayment Customer shall cut the
                    Eplayment Visa Card in half, if applicable, and call or provide a written notice
                    of cancellation of their Eplayment account to Eplayment Help & Support,
                    otherwise, the Eplayment Customer shall continue to be liable for all charges
                    incurred through the use of the Eplayment Wallet and/or Eplayment Visa Card.
                  </p>
                </div>
                <div>
                  <h3 className="my-2 text-base font-bold">27. CONSENT</h3>
                  <p className="leading-8 py-4">
                    Consent given by the Eplayment Wallet holder to an affiliate for any of its
                    services/products involving use, processing, and/or disclosure of their
                    Eplayment account information shall be deemed to be consent given to Eplayment.
                  </p>
                </div>
                <div>
                  <h3 className="my-2 text-base font-bold">28. CUSTOMER COMPLAINTS</h3>
                  <p className="leading-8 py-4">
                    We are committed to maintaining the highest standards of financial consumer
                    protection. Your requests, feedback, and customer needs are our priority. If you
                    have any concerns about a procedure or have encountered a problem with our
                    service, please contact Eplayment Help & Support or email us at
                    support@eplayment.com. All information disclosed shall be treated with utmost
                    confidentiality and will be resolved in the most efficient and effective manner.
                  </p>
                </div>
                <div className="divider" />
                <div className="pt-20">
                  <h2 className="text-center font-bold">Acceptable Use Policy</h2>
                  <p className="leading-8 py-4">
                    This Acceptable Use Policy is a set of rules on usage to guide Eplayment
                    Customers on how the Eplayment Service ought to be used.
                  </p>
                  <h3 className="my-2 text-base font-bold">1. EPLAYMENT SERVICE</h3>

                  <p className="leading-8 py-4">
                    1.1. You agree to not incorporate any word in your name, message identification,
                    or custom user title that is defamatory or slanderous, obscene or profane, or
                    which violates any trademark, service mark, or other intellectual property
                    rights of any third party, including that of Eplayment. You likewise agree not
                    to use any trademark, trade name, service mark, or logo in a way that is likely
                    or intended to cause confusion about the owner or authorized user of such marks,
                    names, or logo. We take claims of intellectual property infringement seriously.
                    As such, we reserve the right to suspend and/or revoke access to the Eplayment
                    Service for any user who is found to have infringed on the intellectual property
                    rights of third parties, or us, or otherwise is found to have violated any
                    intellectual property laws.
                  </p>

                  <p className="leading-8 py-4">
                    1.2. You may choose to submit comments or ideas about improvements to the
                    Eplayment Service. If you submit these comments and ideas to us, we will presume
                    that your submission was voluntary, unsolicited by us, and delivered to us
                    without any restrictions on our use of the idea. You also agree that Eplayment
                    has no fiduciary or any other obligation to you in connection with any idea you
                    submit to us, and that we are free to use your ideas without any attribution or
                    compensation to you. You also agree that we do not waive any rights to use
                    similar or related ideas previously known to us, developed by our employees or
                    contractors, or obtained from other sources.
                  </p>

                  <p className="leading-8 py-4">
                    1.3. You agree to not alter, modify, or cause the alteration or modification, of
                    the Eplayment Service, without prior written consent from Eplayment. You further
                    agree not to use the Eplayment Service for any commercial use, without prior
                    written authority from Eplayment.
                  </p>

                  <p className="leading-8 py-4">
                    1.4. You agree to not use any “deep-link”, “page-scrape”, “robot”, “spider”, or
                    other automatic device, program, algorithm or methodology, or any similar or
                    equivalent manual process, to access, acquire, copy, or monitor any part of the
                    Eplayment Service, or in any way reproduce or circumvent its navigational
                    structure or presentation, as well as to obtain or attempt to obtain any
                    material, document, or information through any means not purposely made
                    available through the Eplayment Service.
                  </p>

                  <p className="leading-8 py-4">
                    1.5. You agree to not obtain or attempt to obtain unauthorized access to any
                    part or feature of the Eplayment Service or to any other system or network
                    connected to the Eplayment Service. You also agree not to collect, harvest, or
                    otherwise gather information about others using the Eplayment Service without
                    their explicit informed consent; nor restrict, prevent, or prohibit any other
                    party from using the Eplayment Service, including but not limited to such
                    actions which may tend to discourage others from using the Eplayment Service,
                    such as stalking, flaming or the lashing out at other parties, spamming or the
                    sending of unsolicited information, advertisement, or content, flooding or the
                    sending of repetitive message, trolling or the use of insulting or deliberately
                    divisive information, material, or content, other forms of annoyances, and the
                    like.
                  </p>

                  <p className="leading-8 py-4">
                    1.6. You agree to not circumvent, disable, or otherwise interfere with
                    security-related features of the Eplayment Service, including those that prevent
                    or restrict use or copying of any content, material, or information available on
                    or through the Eplayment Service, as well as those that enforce limitations on
                    the use of the Eplayment Service.
                  </p>

                  <p className="leading-8 py-4">
                    1.7. You agree to not probe, scan, or test the vulnerability of the Eplayment
                    Service or any network connected to it, and not to breach the security or
                    authentication measures on the same. You agree not to reverse look-up, trace, or
                    seek to trace any information on any user of or visitor to the Eplayment
                    Service, or any other customer of Eplayment including any account maintained
                    with the Eplayment Service not owned by you, to its source, or exploit the
                    Eplayment Service or any information made available or offered by or through the
                    Eplayment Service, in any way where the purpose is to reveal any information,
                    including but not limited to personal identification, other than your own.
                  </p>

                  <p className="leading-8 py-4">
                    1.8. You agree to not use or access the Eplayment Service for your information
                    and personal use solely as intended through the provided functionality of the
                    services. You agree not to copy or download any material or content from or
                    through the Eplayment Service unless such copying or downloading is explicitly
                    allowed by a visible manifestation thereof such as a “download” button or a
                    similar link ostensibly displayed. You further agree not to engage or attempt to
                    engage in the use, copying, transmission, broadcast, display, distribution, or
                    sale of any of the contents, material, or information available on or through
                    the Eplayment Service, including user comments and the like, other than as
                    expressly permitted herein, or as explicitly indicated in the Eplayment Service,
                    including use thereof for commercial purposes.
                  </p>

                  <p className="leading-8 py-4">
                    1.9. You agree to not take any form of action that imposes an unreasonable or
                    disproportionately large load on the infrastructure of the Eplayment Service or
                    its systems or networks, or any systems or networks connected to the Eplayment
                    Service.
                  </p>

                  <p className="leading-8 py-4">
                    1.10. You agree to not use any device or routine to interfere or attempt to
                    interfere with the proper working of the Eplayment Service or any transaction
                    being conducted using the Eplayment Service, or with any other person’s use of
                    the Eplayment Service. You agree to not engage in any activity that interferes
                    with or disrupts the Eplayment Service or the servers and networks which are
                    connected to the Eplayment Service.
                  </p>

                  <p className="leading-8 py-4">
                    1.11. You agree to not use the Eplayment Service for any purpose that is
                    illegal, unlawful, or prohibited by these terms, or to solicit the performance
                    of any illegal activity or other activity which infringes on the rights of
                    Eplayment or others. You further agree not to modify, rent, lease, loan, sell,
                    distribute, or create derivative works based on any content, material, or
                    information, either in whole or in part, available on or through the Eplayment
                    Service, unless you have been specifically permitted to do so by Eplayment or by
                    the owner of that content, material, or information in a separate agreement.
                  </p>
                  <p className="leading-8 py-4">
                    1.12. You agree to only use the Epaygames Payment Gateway to facilitate a
                    purchase, sale, donation, order, or other transaction with your customers. You
                    may not use the Epaygames Payment Gateway for any other purposes prohibited by
                    this Agreement. You represent and warrant to Eplayment that each transaction
                    that you process using the Epaygames Payment Gateway is solely in payment for
                    your provision or sale of bona fide goods or services (including charitable
                    services) to your customers.
                  </p>
                  <h3 className="my-2 text-base font-bold">2. EPLAYMENT USER CONTENT</h3>

                  <p className="leading-8 py-4">
                    2.1. You agree to undertake the sole responsibility and hold Eplayment free of
                    liability to you or to any third party, for any User Content that you create,
                    upload, transmit, or display while using the Eplayment Service. You agree and
                    hereby undertake sole responsibility for the consequences of your actions and
                    interactions using the Eplayment Service, and hereby stipulate admission of
                    liability to Eplayment for whatever loss or damage Eplayment may suffer as a
                    consequence of your use or misuse of the Eplayment Service.
                  </p>

                  <p className="leading-8 py-4">
                    2.2. You agree not to share, create, upload, transmit, or display using the
                    Eplayment Service any material, information, or User Content which is or may be
                    covered by copyright, patent, trade secret, trademark, trade name, service mark,
                    or any property rights, including privacy and/or publicity rights, unless you
                    have the necessary licenses, rights, consents, and permissions to use and to
                    authorize Eplayment to use any and/or all User Content that you create, upload,
                    transmit, or display using the Eplayment Service.
                  </p>

                  <p className="leading-8 py-4">
                    2.3. You agree not to use fictitious names and conceal true names for the
                    purpose of concealing crime, evading the execution of a judgment, or causing
                    damage.
                  </p>

                  <p className="leading-8 py-4">
                    2.4. You agree not to share, create, upload, transmit, or display using the
                    Eplayment Service any material, information, or User Content which:
                  </p>
                  <ol className="alphabetical-list pl-8">
                    <li>
                      infringes on the intellectual property, privacy, and/or publicity rights of
                      any third party;
                    </li>
                    <li>
                      is knowingly false and/or defamatory, inaccurate, abusive, vulgar, hateful,
                      harassing, obscene, indecent, pornographic, profane, threatening, racist,
                      gruesome, offensive to public morals, invasive of another’s privacy, or
                      otherwise violative of any rule, regulation, or law; or
                    </li>
                    <li>
                      contains any viruses, Trojan horses, worms, time bombs, bots, ransomware, any
                      malware, or any computer program, code, or routine that may or is intended to
                      damage, detrimentally interfere with, surreptitiously intercept or expropriate
                      any system, data or personal information, and/or that which promotes or abets
                      piracy.
                    </li>
                  </ol>

                  <p className="leading-8 py-4">
                    2.5. You agree not to engage in pyramid, ponzi, or similar schemes, or other
                    damaging schemes in the future; not to start or forward chain letters; and not
                    to conduct or aid in the conduct of surveys, contests, petitions, and the like,
                    using the Eplayment Service, unless the service has been specifically designed
                    and explicitly made available for such purpose.
                  </p>

                  <p className="leading-8 py-4">
                    2.6. Where relevant, you agree to store your password on the device and our
                    servers in an encrypted form. This form of encryption disguises your password on
                    the server, but still allows us to authenticate you when you sign into the
                    Eplayment Services. You represent and warrant that you own or that you have the
                    necessary licenses, rights, consents, and permissions to use and to authorize
                    Eplayment to use, reproduce, adapt, modify, translate, publish, publicly
                    perform, publicly display, distribute, or transmit over public networks and in
                    various media any and/or all user content that you create, upload, transmit, or
                    display using the Eplayment Service, as you hereby authorize and grant Eplayment
                    perpetual, irrevocable, worldwide, royalty-free, and non-exclusive right,
                    license, consent, and permission to use, reproduce, adapt, modify, translate,
                    publish, publicly perform, publicly display, distribute, or transmit over public
                    networks and in various media any and/or all User Content which you may create,
                    upload, transmit, or display using the Eplayment Service, in a manner Eplayment
                    may deem fit and necessary, including but not limited to making such User
                    Content available to a third party in compliance with a requirement of law, rule
                    or regulation, or making such User Content available to any third party,
                    including Eplayment affiliates and subsidiaries, for its use, reproduction,
                    adaptation, modification, translation, publication, public performance, public
                    display, distribution, or transmission. You agree to hold Eplayment free from
                    any liability, both under equity and the law, arising or that may arise out of
                    its use of your User Content or the use of your User Content by a third party to
                    which Eplayment made available your User Content.
                  </p>
                  <h3 className="my-2 text-base font-bold">3. THIRD PARTY CONTENT AND SERVICES</h3>
                  <p className="leading-8 py-4">
                    3.1. The Eplayment Service contains content and resources provided by Third
                    Party services. You acknowledge and agree that we are not responsible or liable
                    for the availability or accuracy, appropriateness, completeness, or
                    non-infringement of such Third Party services; or the content, products, or
                    services available on or through such Third Party services. Unless specified by
                    us, the availability of such Third Party services does not imply any endorsement
                    by us of such Third Party services or the content, products, or services
                    available therefrom.
                  </p>

                  <p className="leading-8 py-4">
                    3.2. You may not remove, alter, modify, or obscure any copyright, trademark,
                    service mark, or other proprietary rights notices incorporated in or
                    accompanying the application and the services or in any Third Party services.
                  </p>

                  <p className="leading-8 py-4">
                    3.3. Eplayment makes no representation or warranties whatsoever about any
                    service, content, and/or any other resources provided by the Third Party.
                  </p>

                  <h3 className="my-2 text-base font-bold">4. RESERVED RIGHTS</h3>

                  <p className="leading-8 py-4">
                    4.1. We reserve, at our sole and full discretion but without obligation, the
                    right to deny access to and/or discontinue the Eplayment Service or any
                    component thereof to anyone at any time, temporarily or permanently, without
                    giving any reason and/or prior notice. You hereby irrevocably agree, affirm, and
                    warrant to hold Eplayment free from any liability, both under equity and the
                    law, arising or that may arise out of any such denial of access to or the
                    discontinuance of the Eplayment Service.
                  </p>

                  <p className="leading-8 py-4">
                    4.2. We reserve, at our sole and full discretion but without obligation, the
                    right to collect, screen, review, flag, filter, modify, block, refuse, or remove
                    any and/or all information provided by any user, explicitly or implicitly, to
                    and through the Eplayment Service, including but not limited to hardware
                    information, IP address, browser-type related information, cookies, and the
                    like. You hereby irrevocably agree, affirm, and warrant to hold Eplayment free
                    from any liability, both under equity and the law, arising or that may arise out
                    of any such collection, screening, review, flagging, filtering, modification,
                    blocking, refusal, or removal of any and/or all information provided by any user
                    to and through the Eplayment Service.
                  </p>

                  <p className="leading-8 py-4">
                    4.3 We reserve, at our sole and full discretion but without obligation, the
                    right to enhance, improve, develop, and introduce new features and
                    functionalities to the Eplayment Service at any time and without prior notice.
                    You hereby understand, agree, and affirm that any such enhancement, improvement,
                    development, new feature, and/or new functionality to the Eplayment Service
                    shall form part of the Eplayment Service as defined herein and thus shall
                    likewise be covered by these terms and its subsequent updates, revisions, or
                    amendments, as applicable.
                  </p>

                  <p className="leading-8 py-4">
                    4.4. We reserve, at our sole and full discretion but without obligation, the
                    right to verify, check, cross-refer, validate, and ascertain the veracity and
                    truthfulness of all information supplied by you by acquiring, accessing,
                    retrieving, or otherwise acquiring similar or additional information supplied by
                    you to other third party service providers, including, but not limited to
                    telecommunications providers, etc. You hereby expressly, unequivocally, and
                    voluntarily allow Eplayment to request for and secure such information, and
                    expressly, unequivocally, and voluntarily instruct such third party providers
                    to:
                  </p>
                  <ol className="alphabetical-list pl-8">
                    <li>receive and process Eplayment’s request; </li>
                    <li>favorably act at all times by producing the information requested; and</li>
                    <li>
                      provide the latter with certified digital or printed copies of the said
                      information when requested by Eplayment.
                    </li>
                  </ol>

                  <p className="leading-8 py-4">
                    4.5. We reserve, at our sole and full discretion but without obligation, the
                    right to send you or cause to send you service updates and/or messages,
                    including SMS, notifications, email and/or any data message transmission,
                    informing you of enhancements, improvements, developments, features,
                    functionalities, products, promotions, offers, advertisement, and/or any other
                    information relative to the Eplayment Service. Eplayment makes no warranty of
                    any kind, express or implied, for such service updates and/or messages, but you
                    hereby agree to receive such service updates and/or messages and hold Eplayment
                    free from any liability and/or claims for indemnification or damages that may
                    arise therefrom.
                  </p>

                  <p className="leading-8 py-4">
                    4.6. We reserve, at our sole and full discretion but without obligation, the
                    right to set limitations to and charge fees and applicable taxes for the use of
                    the Eplayment Service, at any time and without prior notice. You further
                    understand and agree that Eplayment reserves the right, at its sole and full
                    discretion and under no obligation, to change the applicable fees, taxes, and
                    charges levied for the use of the services at any time and with prior written
                    notice to you thirty (30) days prior to effective date of change in fees,
                    charges, or penalties.
                  </p>

                  <p className="leading-8 py-4">
                    4.7. We reserve, at our sole and full discretion but without obligation, the
                    right to limit the provision, availability, quantity, and quality of any
                    feature, product, or service to any person or to anyone within the same
                    geographic area, demographic profile, or any other market, commercial, and/or
                    trading segments. You likewise understand and agree that Eplayment reserves the
                    right, at its sole and full discretion but without obligation, to administer and
                    operate any of the Eplayment Service from any or various locations outside the
                    Republic of the Philippines. You hereby understand, agree, and undertake sole
                    responsibility for your continued access to or use of the Eplayment Service, as
                    well as the results or consequences of such access and use, including the
                    responsibility for compliance with applicable local laws and the sole liability
                    for non-compliance or breach thereof.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditionsComponent;
