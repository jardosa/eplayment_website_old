import Button from 'components/redesign/Button';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

const SpringButton = motion(Button, { forwardMotionProps: true });

export default function CreateConnectConvert() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: inView ? 1 : 0,
      transition: {
        ease: 'easeInOut',
        staggerChildren: 0.1,
      },
    },
  };

  const text = {
    visible: {
      opacity: 1,
      y: inView ? 0 : 100,

      transition: {
        duration: 1,
        stiffness: 260,
        damping: 20,
      },
    },
    hidden: { opacity: 0, y: 100 },
  };

  const router = useRouter();
  return (
    <motion.div
      ref={ref}
      variants={container}
      animate="visible"
      initial="hidden"
      className="w-full my-10 mx-5 "
    >
      <motion.div
        variants={text}
        className="text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px] my-10 text-center tracking-tight font-bold leading-[40px] sm:leading-[58px] md:leading-[68px] lg:leading-[78px]"
      >
        <p>
          <span className="text-custom-medium-slate-blue">CREATE.</span>
          <span className="text-custom-taurus-forest-fern">{` CONNECT.`}</span>
        </p>
        <p>
          <span className="text-custom-medium-slate-blue">{` CONVERT WITH EPLAYMENT.`}</span>
        </p>
      </motion.div>
      <div className="px-5 w-full  justify-center relative gap-y-2 md:gap-y-9 items-center hidden sm:flex">
        {/* Left Image */}
        <div className="w-auto relative self-start ">
          <motion.div variants={text} className="lg:block hidden">
            <Image
              width={407}
              height={520}
              className="lg:block hidden"
              src="/redesign/images/home-create-connect-convert/creator.png"
              alt=""
            />
          </motion.div>
          <motion.div variants={text} className="lg:hidden block">
            <Image
              width={300}
              height={350}
              objectFit="cover"
              className="lg:hidden block"
              src="/redesign/images/home-create-connect-convert/creator-mobile.png"
              alt=""
            />
          </motion.div>
          <div className="hidden lg:block absolute top-0 left-[138px] w-[18px] h-[18px] rounded-full bg-custom-taurus-forest-fern" />
          <div className="hidden lg:block absolute  left-28 bottom-0 w-[25px] h-[25px] rounded-full bg-custom-taurus-forest-fern" />
          <div className="hidden lg:block absolute left-[42px] top-[43px] w-[34px] h-[34px] rounded-full bg-custom-medium-slate-blue" />
        </div>
        {/* Content */}
        <div className="w-max mx-auto flex-auto flex-col flex gap-y-[60px]">
          <motion.div
            variants={text}
            className="leading-[25px] text-left flex flex-col justify-between min-h-[150px] max-w-[405px] text-custom-medium-slate-blue  text-base lg:text-lg font-semibold"
          >
            <div>
              <p className="">
                Hey,
                <span className="font-bold">{` Creator!`}</span>
              </p>
              <p>Easily connect with your patrons</p>
              <p>with the Eplayment Wallet. </p>
            </div>
            <div>
              <p>Make easy, fun, and secure transactions across your platforms!</p>
            </div>
          </motion.div>

          <motion.div
            variants={text}
            className="leading-[25px] self-end text-right flex flex-col justify-between min-h-[200px] max-w-[360px] text-custom-floppy-disk text-base lg:text-lg  font-semibold"
          >
            <div>
              <p className="">
                Hey,
                <span className="font-bold">{` Fan!`}</span>
              </p>
              <p>Show love to your favorite creator</p>
              <p>through the Eplayment Wallet! </p>
            </div>
            <div>
              <p className="">Send your gifts by just using your username and mobile number.</p>
              <p>Easy, fast, and secure.</p>
            </div>
          </motion.div>
        </div>
        {/* Right Image */}
        <motion.div variants={text} className="w-auto relative self-end">
          <div className="lg:block hidden">
            <Image
              width={460}
              height={545}
              className="lg:block hidden"
              src="/redesign/images/home-create-connect-convert/patron.png"
              alt=""
            />
          </div>
          <div className="lg:hidden block">
            <Image
              width={300}
              height={350}
              objectFit="cover"
              className="lg:hidden block"
              src="/redesign/images/home-create-connect-convert/patron-mobile.png"
              alt=""
            />
          </div>
          <div className="hidden lg:block absolute right-14 bottom-14 w-[20px] h-[20px] rounded-full bg-custom-taurus-forest-fern" />
          <div className="hidden lg:block absolute bottom-[32px] left-[26px] w-[20px] h-[20px] rounded-full bg-custom-medium-slate-blue" />
          <div className="hidden lg:block absolute  left-[90px] top-0 w-[34px] h-[34px] rounded-full bg-custom-taurus-forest-fern" />
          <div className="hidden lg:block absolute right-24 top-[21px] w-[34px] h-[34px] rounded-full bg-custom-medium-slate-blue" />
        </motion.div>
      </div>
      <div className="w-max mx-auto">
        <SpringButton
          isOutline
          variants={text}
          title="LEARN MORE"
          className="w-[255px] hidden my-10 sm:block  hover:duration-100"
          onClick={() => router.push('/services/wallet')}
        />
      </div>
      {/* Mobile Version */}
      <div className="flex flex-col items-center justify-center sm:hidden w-full gap-5">
        <div>
          <Image
            width={300}
            height={350}
            className="lg:hidden block"
            src="/redesign/images/home-create-connect-convert/creator-mobile.png"
            alt=""
          />
        </div>
        <div className="leading-[25px] self-center text-left flex flex-col justify-between min-h-[150px] max-w-[405px] text-custom-medium-slate-blue text-base font-semibold">
          <div>
            <p className="">
              Hey,
              <span className="font-bold">{` Creator!`}</span>
            </p>
            <p>Easily connect with your patrons</p>
            <p>with the Eplayment Wallet. </p>
          </div>
          <div>
            <p>Make easy, fun, and secure transactions </p>
            <p>across your platforms!</p>
          </div>
        </div>
        <div className="mt-10">
          <Image
            width={300}
            height={350}
            src="/redesign/images/home-create-connect-convert/patron-mobile.png"
            alt=""
          />
        </div>
        <div className="leading-[25px] self-center text-left flex flex-col justify-between min-h-[200px] max-w-[314px] text-custom-floppy-disk text-base  font-semibold">
          <div>
            <p className="">
              Hey,
              <span className="font-bold">{` Fan!`}</span>
            </p>
            <p>Show love to your favorite creator</p>
            <p>through the Eplayment Wallet! </p>
          </div>
          <div>
            <p>Send your financial support</p>
            <p>by just using your username</p>
            <p>or mobile number.</p>
            <p>Easy, fast, and secure.</p>
          </div>
        </div>
        <div className="w-max mx-auto my-7">
          <SpringButton
            isOutline
            variants={text}
            initial="hidden"
            animate="visible"
            title="LEARN MORE"
            className="w-[255px] hover:duration-100"
            onClick={() => router.push('/services/wallet')}
          />
        </div>
      </div>
    </motion.div>
  );
}
