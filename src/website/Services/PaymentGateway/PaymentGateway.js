import Collaborate from 'components/redesign/Collaborate';
import WhatCanYouDo from 'components/redesign/WhatCanYouDo';
import Graph from './Graph';
import Landing from './Landing';

const data = [
  {
    title: 'Widen your Reach',
    description:
      'Give your customers more payment method options and a convenient payment process – no more screenshots!',
    imageSrc: '/redesign/icons/epaygames-features/network_1.svg',
  },
  {
    title: 'Simplify your Settlements',
    description:
      'Receive consolidated settlements from all payment methods straight into your Eplayment account',
    imageSrc: '/redesign/icons/epaygames-features/centralized_1.svg',
  },
  {
    title: 'Block Fraudulent Payments',
    description:
      'Never be fooled again as we process payments in compliance with anti-fraud procedures',
    imageSrc: '/redesign/icons/epaygames-features/phishing_1.svg',
  },
];

const PaymentGateway = () => {
  return (
    <div className="w-full">
      <Landing />
      {/* WHAT CAN YOU DO WITH EPAYGAMES? */}
      <WhatCanYouDo titleText="WHAT CAN YOU DO WITH EPAYGAMES?" data={data} />
      {/* We’ve processed over PHP 2B worth of payments to date. */}
      <Graph />
      <Collaborate text="WANT TO CONNECT?" url="partner@eplayment.com" />
    </div>
  );
};

export default PaymentGateway;
