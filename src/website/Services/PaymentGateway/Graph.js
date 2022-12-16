import { css, cx } from '@emotion/css';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import convertToPeso from 'utils/conversionUtils';

export default function Graph() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [counter, setCounter] = useState(0);
  const payments = 5_000_000_000;

  useEffect(() => {
    if (counter < payments) {
      setTimeout(() => {
        setCounter((prevVal) => prevVal + 5000000);
      }, 0.01);
    }
  }, [counter]);

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
      y: inView ? 0 : 100,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.3,
        duration: 0.8,
      },
    },
    hidden: { opacity: 0, y: 100 },
  };

  return (
    <motion.div
      ref={ref}
      variants={container}
      animate="visible"
      initial="hidden"
      className="w-full px-5 flex flex-col justify-center items-center space-y-[48px]"
    >
      <motion.div
        variants={item}
        className={cx(
          css`
            font-size: clamp(20px, 5vw, 32px);
            line-height: clamp(26px, 5vw, 46px);
          `,
          'text-custom-floppy-disk font-bold text-center',
        )}
      >
        We’ve processed over PHP 5B worth of payments to date.
      </motion.div>
      <motion.div className="flex flex-col justify-center items-center" variants={item}>
        <p className="text-custom-taurus-forest-fern font-bold text-3xl md:text-3xl lg:text-[32px] text-center">
          PAYMENTS FROM 2020 - 2021
        </p>
        <p className="font-semibold text-custom-medium-slate-blue text-4xl sm:text-5xl md:text-7xl lg:text-[100px] leading-[70px] sm:leading-[96px]  md:text-[80px]  md:leading-[116px]  lg:leading-[136px]  text-center">
          {`${convertToPeso(counter)}`}
        </p>
        <div className="relative h-[max-content]">
          <motion.img
            variants={item}
            className="absolute right-[10%] top-[-1%] w-[90px] sm:w-[135px] "
            src="/redesign/icons/epaygames-features/philippine-peso.svg"
            alt=""
          />
          <motion.img
            variants={item}
            className="absolute left-[-10%] bottom-[30%] w-[90px] sm:w-[135px] "
            src="/redesign/icons/epaygames-features/philippine-peso.svg"
            alt=""
          />
          <motion.img
            variants={item}
            className="absolute right-[-10%] bottom-[20%] w-[90px] sm:w-[135px] "
            src="/redesign/icons/epaygames-features/philippine-peso.svg"
            alt=""
          />
          <motion.img
            variants={item}
            className="my-14 relative"
            src="/redesign/images/services/epaygames/processed.svg"
            alt=""
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
