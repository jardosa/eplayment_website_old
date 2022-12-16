import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import Title from 'assets/icons/logos/what-is-eplayment.svg';
import Ely from 'assets/images/ely-octopus-mobile.svg';
import TitleMobile from 'assets/icons/logos/what-is-eplayment-mobile.svg';

export default function Landing() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const container = {
    visible: {
      opacity: inView ? 1 : 0,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.3,
      },
    },
    hidden: { opacity: 0 },
  };

  const item = {
    visible: {
      opacity: inView ? 1 : 0,
      x: inView ? 0 : -100,
    },
    hidden: { opacity: 0, x: -50 },
  };

  return (
    <motion.div
      variants={container}
      ref={ref}
      initial="hidden"
      animate="visible"
      className=" min-h-[400px] max-h-[660px] px-5 lg:max-h-[600px]"
    >
      <div className="mx-auto pt-10 flex gap-x-5 items-center">
        <Title className="w-full mx-auto max-w-[843px] lg:block hidden" />
        <TitleMobile className="lg:hidden block max-w-[360px] mx-auto" />
      </div>
      <motion.div
        variants={item}
        className="flex flex-wrap justify-center gap-x-28 items-center lg:flex-nowrap"
      >
        <div className="lg:hidden order-2 block">
          <Ely className="translate-y-[37px]" />
        </div>
        <div className="lg:block hidden lg:order-1 order-2 transform relative translate-y-[70px] ">
          <div className="absolute transform translate-y-[130px] translate-x-[-100px] w-max">
            <img alt="about" className="w-[860px]" src="/redesign/vectors/about/Vector.svg" />
          </div>
          <motion.div variants={item}>
            <Image src="/redesign/images/about/ely-octopus.png" width={448} height={588} />
          </motion.div>
        </div>
        <motion.div
          variants={item}
          className="lg:order-2 order-1 max-w-[566px] space-y-2 lg:space-y-10 text-center lg:text-left  self-start mt-5 lg:mt-20"
        >
          <p className="text-[27px] leading-[30px] md:leading-[36px] lg:text-5xl lg:leading-[56px]  text-custom-floppy-disk max-w-[636px] font-bold">
            Your Wallet for Gaming and Entertainment
          </p>
          <p className="text-xl  lg:text-3xl lg:leading-[40px] text-custom-floppy-disk ">
            Eplayment is an e-wallet designed for the creative hustle.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
