import Collaborate from 'components/redesign/Collaborate';
import { css, cx } from '@emotion/css';
import AppButton from 'components/AppButton';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import EmailInput from 'components/EmailInput';
import Image from 'next/image';

const MotionAppButton = motion(AppButton, { forwardMotionProps: true });

const data = [
  {
    title: 'Send Money',
    description: 'Send and receive money within Eplayment using your username or mobile number',
    imgSrc: '/redesign/icons/walletfeatures/feature1.png',
  },
  {
    title: 'Buy Game Credits',
    description:
      'Buy credits, vouchers, and gift cards for your favorite gaming, lifestyle, and entertainment platforms',
    imgSrc: '/redesign/icons/walletfeatures/feature2.png',
  },
  {
    title: 'Add Funds',
    description: 'Top up your Eplayment account from any of our payment methods',
    imgSrc: '/redesign/icons/walletfeatures/feature3.png',
  },
  {
    title: 'Buy Load',
    description: 'Buy mobile network load from any of our load providers',
    imgSrc: '/redesign/icons/walletfeatures/feature4.png',
  },
  {
    title: 'Pay Bills',
    description: 'Buy mobile network load from any of our load providers',
    imgSrc: '/redesign/icons/walletfeatures/feature5.png',
  },
  {
    title: 'Withdraw from ATM',
    description:
      'Withdraw money from any Bancnet ATM using your physical Visa card (exclusive to fully verified accounts)',
    imgSrc: '/redesign/icons/walletfeatures/feature6.png',
  },
];

const Wallet = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  const container = {
    visible: { opacity: inView ? 1 : 0 },
    hidden: { opacity: 0 },
  };

  const group = {
    visible: {
      opacity: inView ? 1 : 0,
      transition: {
        when: 'beforeChildren',
        ease: 'easeInOut',
        staggerChildren: 0.3,
      },
    },
    hidden: { opacity: 0 },
  };

  const member = {
    visible: {
      opacity: inView ? 1 : 0,
      y: inView ? 0 : 100,
      transition: {
        duration: 1,
        stiffness: 260,
        damping: 20,
      },
    },
    hidden: { opacity: 0, y: 100 },
  };

  const button = {
    visible: { opacity: inView ? 1 : 0, x: inView ? 0 : -50 },
    hidden: { opacity: 0, x: -50 },
  };

  return (
    <motion.div
      variants={container}
      animate="visible"
      initial="hidden"
      ref={ref}
      className="w-full min-h-[800px]"
    >
      {/* YOUR WALLET FOR GAMING AND ENTERTAINMENT */}
      <div className="mt-10 px-5 w-full flex flex-wrap lg:flex-nowrap justify-center lg:justify-between relative items-center">
        <motion.div variants={button} className="order-2 lg:order-1 px-10 ">
          <Image
            width={580}
            height={486}
            quality={100}
            className={cx(
              css`
                width: clamp(300px, 50vw, 640px);
              `,
              'order-2 lg:order-1 ',
            )}
            src="/redesign/images/services/eplayment-wallet/landing.png"
            alt=""
          />
        </motion.div>

        <motion.div
          variants={button}
          className=" self-center flex flex-col items-center lg:items-end lg:order-2 order-1"
        >
          <p
            className={cx(
              css`
                font-size: clamp(28px, 5vw, 73px);
              `,
              'font-bold text-custom-medium-slate-blue lg:text-right text-center leading-none',
            )}
          >
            YOUR WALLET FOR
          </p>
          <p
            className={cx(
              css`
                font-size: clamp(20px, 3vw, 50px);
              `,
              'font-bold  leading-none text-custom-taurus-forest-fern',
            )}
          >
            GAMING
            <span className="text-custom-medium-slate-blue">{` & `}</span>
            ENTERTAINMENT
          </p>
          <div className="text-sm sm:text-base lg:text-2xl w-full my-2 md:my-6 lg:my-10 max-w-[623px] text-center text-custom-floppy-disk">
            <p>Eplayment is an e-wallet for gamers and creators</p>
            <p>that allows them to make</p>
            <p>easy, fun, and secure transactions</p>
            <p>across platforms.</p>
          </div>
        </motion.div>
      </div>
      {/* WHAT CAN YOU DO WITH EPLAYMENT? */}
      <motion.div
        variants={group}
        animate="visible"
        initial="hidden"
        className="w-full bg-custom-wash-me"
      >
        <div className="flex flex-col max-w-[960px] mx-auto">
          <div className="w-full text-center my-[80px] text-custom-floppy-disk text-[29px] md:text-[35px] lg:text-[44px] leading-none font-bold">
            WHAT CAN YOU DO WITH EPLAYMENT?
          </div>
          <div className="flex justify-center flex-wrap gap-[20px]  md:gap-[60px] lg:gap-[80px]">
            {data.map(({ title, description, imgSrc }) => (
              <motion.div
                key={title}
                variants={member}
                style={{ boxShadow: '0px 4px 16px 0px #7562E01A' }}
                className="max-w-[173px] sm:max-w-[244px] lg  max-h-full rounded-[32px] px-3 sm:p-5"
              >
                <div className="max-w-[127px] min-h-[127px] grid place-items-center mx-auto w-full">
                  <img className="mx-auto" src={imgSrc} alt={title} />
                </div>
                <div className="my-5">
                  <div className="text-custom-floppy-disk font-bold text-base sm:text-xl">
                    {title}
                  </div>
                  <div className=" text-sm sm:text-base my-1 leading-[21px]">{description}</div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className=" w-max mx-auto my-16 space-y-5">
            <p className="text-2xl sm:text-[28px] text-center leading-none font-bold">
              Download the app now
            </p>
            <div className="flex justify-center mx-5 gap-x-3 md:gap-x-8 ">
              <MotionAppButton variants={button} os="android" />
              <MotionAppButton variants={button} os="ios" />
            </div>
          </div>
        </div>
      </motion.div>
      {/* SUBSCRIBE TO OUR NEWSLETTER */}
      <div className="w-full mt-[142px] px-5 flex flex-col justify-center items-center text-center">
        <div className=" text-[24px] leading-[32px] md:text-[40px] md:leading-[54px] font-bold text-custom-floppy-disk">
          Subscribe to our Newsletter!
        </div>
        <div className="text-custom-floppy-disk text-base sm:text-[22px] leading-[22px]">
          Get updates on our latest releases and exclusive offers
        </div>
        <EmailInput />
      </div>
      {/* WANT TO COLLABORATE? */}
      <Collaborate text="WANT TO COLLABORATE?" url="partner@eplayment.com" />
    </motion.div>
  );
};

export default Wallet;
