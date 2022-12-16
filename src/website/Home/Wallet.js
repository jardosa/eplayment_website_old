import Button from 'components/redesign/Button';
import { css, cx } from '@emotion/css';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { motion, useMotionValue, useTransform, useViewportScroll } from 'framer-motion';
import { useEffect } from 'react';
import { Element } from 'react-scroll';

export default function Wallet() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { scrollY } = useViewportScroll();

  const y = useMotionValue(0);

  const text = {
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

  useEffect(() => {
    scrollY.onChange((v) => y.set(v));
  }, [scrollY, y]);

  const container = {
    visible: {
      opacity: inView ? 1 : 0,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.3,
        duration: 0.8,
      },
    },
    hidden: { opacity: 0 },
  };

  const router = useRouter();
  return (
    <motion.div
      variants={container}
      animate="visible"
      initial="hidden"
      ref={ref}
      id="wallet"
      className={cx(
        'bg-wallet bg-contain lg:bg-cover z-10 mt-[-40px] lg:mt-[-85px] w-full min-h-[800px]  px-10 flex flex-wrap md:flex-nowrap justify-center items-center',
      )}
    >
      <motion.div
        variants={text}
        animate="visible"
        initial="hidden"
        className="py-14 mx-5 md:mx-0 md:py-20 text-left flex flex-col gap-10 order-1 md:order-2 w-full"
      >
        <Element
          name="wallet"
          className={cx(
            css`
              font-size: clamp(28px, 5vw, 60px);
              line-height: clamp(36px, 5vw, 70px);
            `,
            'text-custom-floppy-disk tracking-tighter text-center font-bold',
          )}
        >
          <p>YOUR WALLET FOR</p>
          <p
            className={cx(
              css`
                font-size: clamp(32px, 5vw, 70px);
                line-height: clamp(40px, 5vw, 118px);
              `,
              'text-custom-taurus-forest-fern',
            )}
          >
            {` GAMING & ENTERTAINMENT`}
          </p>
        </Element>

        <div className="flex gap-10  flex-wrap lg:flex-nowrap">
          <motion.div variants={text} className="w-max flex-grow-0">
            <Image
              draggable={false}
              width={676}
              height={430}
              src="/redesign/images/wallet/phone3.png"
              alt=""
            />
          </motion.div>
          <motion.div
            variants={text}
            className="h-auto my-auto flex flex-col items-center lg:items-start  flex-auto"
          >
            <div className="space-y-5 md:space-y-10 text-lg">
              <p>We want the best gaming experience for you!</p>
              <div>
                <p>We aim to bring you the fullest potential of </p>
                <p>entertainment’s dynamic space and virtual finance</p>
                <p>combined through our tools and services.</p>
              </div>
              <p>
                <span className="text-custom-medium-slate-blue font-bold ">{`Ready, set, play, `}</span>
                now with the
                <span className="font-bold text-custom-taurus-forest-fern">{` Eplayment `}</span>
                Wallet!
              </p>
            </div>
            <div className="my-5 grid place-items-center sm:place-items-start">
              <Button
                isOutline
                onClick={() => router.push('/about')}
                // className="!h-auto duration-200"
                title="MORE ABOUT EPLAYMENT"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
