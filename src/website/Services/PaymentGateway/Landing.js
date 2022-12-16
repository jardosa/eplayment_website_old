import { motion } from 'framer-motion';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

export default function Landing() {
  const { ref, inView } = useInView({ threshold: 0.25, triggerOnce: true });

  const icon = {
    visible: {
      opacity: 1,
      y: [0, 20, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: 'linear',
      },
    },
  };

  const landingContainer = {
    visible: {
      opacity: inView ? 1 : 0,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.5,
      },
    },
    hidden: { opacity: 0 },
  };

  const landingItem = {
    visible: {
      opacity: inView ? 1 : 0,
      x: inView ? 0 : -100,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.3,
      },
    },
    hidden: { opacity: 0, x: -50 },
  };
  return (
    <motion.div
      ref={ref}
      variants={landingContainer}
      animate="visible"
      initial="hidden"
      className="flex items-center my-10 px-5 flex-wrap lg:flex-nowrap gap-x-[88px] justify-center"
    >
      <motion.div variants={landingItem} className="lg:order-1 order-2">
        <div className="w-max lg:block hidden relative">
          <Image
            width={558}
            height={630}
            src="/redesign/images/services/epaygames/epaygames-girl.png"
          />
          <motion.img
            variants={icon}
            className="absolute right-[15%] top-[18%]"
            src="/redesign/icons/epaygames-features/landing-icon-1.png"
            alt=""
          />
          <motion.img
            variants={icon}
            className="absolute left-[-7%] top-[40%]"
            src="/redesign/icons/epaygames-features/landing-icon-2.png"
            alt=""
          />
          <motion.img
            variants={icon}
            className="absolute right-[5%] top-[36%]"
            src="/redesign/icons/epaygames-features/landing-icon-3.png"
            alt=""
          />
        </div>
        <div className="lg:hidden block">
          <Image
            width={587}
            height={630}
            quality={100}
            draggable={false}
            src="/redesign/images/services/epaygames/epaygames.png"
          />
        </div>
      </motion.div>
      <motion.div variants={landingItem} className="max-w-[500px] space-y-5 order-1 lg:order-2">
        <Image src="/redesign/logos/ep_logo_2.svg" width={500} height={244} />
        <div className="text-custom-floppy-disk text-center  text-base md:text-lg lg:text-xl leading-[27px]">
          <p>Epaygames is a payment gateway API</p>
          <p>that processes payments for your</p>
          <p>entertainment business.</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
