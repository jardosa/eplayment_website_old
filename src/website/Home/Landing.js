import { css, cx } from '@emotion/css';
import AppButton from 'components/AppButton';
import { motion, useMotionValue, useTransform, useViewportScroll } from 'framer-motion';
import Image from 'next/image';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const MotionAppButton = motion(AppButton, { forwardMotionProps: true });

export default function Landing() {
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });
  const { scrollY } = useViewportScroll();

  const y = useMotionValue(0);
  const logoY = useTransform(y, (value) => value / 4);

  const container = {
    visible: { opacity: inView ? 1 : 0 },
    hidden: { opacity: 0 },
  };

  useEffect(() => {
    scrollY.onChange((v) => y.set(v));
  }, [scrollY, logoY, y]);

  const appButtons = {
    visible: {
      opacity: inView ? 1 : 0,
      transition: {
        when: 'beforeChildren',
        delayChildren: 0.3,
        staggerChildren: 0.3,
      },
    },
    hidden: { opacity: 0 },
  };

  const button = {
    visible: { opacity: inView ? 1 : 0, x: inView ? 0 : -50 },
    hidden: { opacity: 0, x: -50 },
  };

  const phone = {
    visible: (i) => ({
      opacity: 1,
      y: [1, 20, 30, 20, 1, -20, -30, -20, 1],

      transition: {
        duration: 5 + i,
        ease: 'linear',
        repeat: Infinity,
      },
    }),
    hidden: { opacity: 0 },
  };

  return (
    <motion.div
      variants={container}
      animate="visible"
      initial="hidden"
      ref={ref}
      className={[
        'w-full',
        'lg:min-h-[800px]',
        'flex flex-wrap lg:flex-nowrap relative justify-center',
        'font-bold',
        'text-custom-medium-slate-blue',
        // 'mb-[-100px]',
        'lg:mb-[-30px]',
        'overflow-hidden',
      ].join(' ')}
    >
      <div className="absolute lg:block hidden right-0 transform bottom-0 h-full">
        <img
          alt="vector"
          className="h-full relative object-cover "
          src="/redesign/icons/home-landing/home-vector.svg"
        />
      </div>
      <div className="w-full flex justify-center">
        <div
          className={cx(
            css`
              margin: 0 clamp(0px, 5vw, 81px);
              padding: clamp(25px, 5vw, 49px) 0;
            `,
            'space-y-6',
          )}
        >
          <motion.p
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 100 }}
            transition={{
              duration: 0.5,
              ease: 'easeOut',
              type: 'spring',
              stiffness: 260,
              damping: 20,
            }}
            className={cx(
              css`
                font-size: clamp(32px, 10vw, 148px);
                line-height: clamp(30px, 8vw, 160px);
                flex: auto;
              `,
              'tracking-[-2%]',
              'align-top',
              'whitespace-pre-wrap',
              'text-center md:text-left',
            )}
          >
            READY
            <span className="sm:hidden">,</span>
            {` SET`}
            <span className="sm:hidden">,</span>
            {` PLAY!`}
          </motion.p>
          <div className="space-y-5 text-eplayment-black">
            <div className="sm:block hidden text-[20px] sm:text-[24px] md:text-[28px] leading-[22px] sm:leading-[26px]  md:leading-[30px] text-center lg:text-left">
              Get your Eplayment App now
            </div>
            <motion.div
              variants={appButtons}
              initial="hidden"
              animate="visible"
              className="flex justify-center lg:justify-start gap-4"
            >
              <MotionAppButton os="android" variants={button} />
              <MotionAppButton os="ios" variants={button} />
            </motion.div>
          </div>
        </div>
      </div>
      {/* Mobile Version  */}
      <div className="w-max mx-auto h-full block lg:hidden">
        <Image
          objectFit="scale-down"
          width={414}
          height={441}
          src="/redesign/images/home-landing/mobile-hand.png"
          alt=""
        />
      </div>
      {/* Desktop Version */}
      <div className="h-full w-full relative">
        <div className="hidden h-full w-full lg:block">
          {/* ICONS */}
          <div className="absolute min-w-[200px] z-10 min-h-[200px] top-[84px]">
            <motion.div
              animate={{ scale: 1, opacity: 1 }}
              initial={{ opacity: 0, scale: 0 }}
              transition={{ delay: 1.3 }}
              className="absolute top-0"
            >
              <img src="/redesign/icons/home-landing/arcade.svg" alt="" />
            </motion.div>
            <motion.div
              animate={{ scale: 1, opacity: 1 }}
              initial={{ opacity: 0, scale: 0 }}
              transition={{ delay: 1.5 }}
              className="absolute top-[90px] left-[10px]"
            >
              <img src="/redesign/icons/home-landing/paper.svg" alt="" />
            </motion.div>
            <motion.div
              animate={{ scale: 1, opacity: 1 }}
              initial={{ opacity: 0, scale: 0 }}
              transition={{ delay: 1.7 }}
              className="absolute top-[20px] -right-5"
            >
              <img src="/redesign/icons/home-landing/console.svg" alt="" />
            </motion.div>
          </div>
          <div className="absolute min-w-[200px] z-10 min-h-[200px] top-[84px] left-[450px]">
            <motion.div
              animate={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0 }}
              transition={{
                delay: 1.9,
              }}
              className="absolute top-0"
            >
              <img src="/redesign/icons/home-landing/money.svg" alt="" />
            </motion.div>
            <motion.div
              animate={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0 }}
              transition={{
                delay: 2.1,
              }}
              className="absolute top-[90px] left-[10px]"
            >
              <img src="/redesign/icons/home-landing/coin.svg" alt="" />
            </motion.div>
            <motion.div
              animate={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0 }}
              transition={{
                delay: 2.4,
              }}
              className="absolute top-[20px] right-2"
            >
              <img src="/redesign/icons/home-landing/treasure.png" alt="" />
            </motion.div>
          </div>

          <div className={cx('absolute translate-y-[450px] translate-x-[50px] transform')}>
            <Image src="/redesign/images/home-landing-hand.png" width={663} height={324} />
          </div>
          <motion.div
            animate={{ opacity: 1, scale: 1, y: [192, 210, 192] }}
            initial={{ y: 192, x: 20 }}
            transition={{
              delay: 0.5,
              duration: 4,
              type: 'spring',
              repeat: Infinity,
              ease: 'linear',
            }}
            className={cx('absolute transform translate-y-48 left-24')}
          >
            <Image
              src="/redesign/images/home-landing-phone-bottom.png"
              quality={100}
              width={397}
              height={321}
            />
          </motion.div>
          <motion.div
            animate={{ opacity: 1, scale: 1, y: [0, 20, 0] }}
            initial={{ x: 192 }}
            transition={{
              delay: 1,
              duration: 4,
              type: 'spring',
              repeat: Infinity,
              ease: 'linear',
            }}
            className={cx('absolute  transform translate-x-48 top-10')}
          >
            <Image
              src="/redesign/images/home-landing-phone-top.png"
              quality={100}
              width={322}
              height={421}
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
