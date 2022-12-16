import { css, cx } from '@emotion/css';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

export default function OurPartners() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const container = {
    visible: {
      opacity: inView ? 1 : 0,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.1,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: 'afterChildren',
      },
    },
  };

  const item = {
    visible: {
      opacity: inView ? 1 : 0,
      y: inView ? 0 : -100,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.1,
      },
    },
    hidden: {
      opacity: 0,
      y: -100,
      transition: {
        when: 'afterChildren',
      },
    },
  };

  const channels = {
    visible: {
      opacity: inView ? 1 : 0,
      x: inView ? 0 : -100,
    },
    hidden: {
      opacity: 0,
      x: -100,
    },
  };

  return (
    <motion.div
      variants={container}
      animate="visible"
      initial="hidden"
      ref={ref}
      className="w-full   "
    >
      <motion.div
        variants={item}
        className="flex flex-col mt-5 mb-[-85px]  lg:flex-row max-h-[320px] min-h-[320px]  lg:max-h-auto   justify-center items-center gap-x-8"
      >
        <div
          className={cx(
            'lg:w-[472px] w-[296px]',
            'lg:order-1 order-2',
            'lg:translate-y-10',
            'h-full',
          )}
        >
          <Image
            draggable={false}
            width={472}
            height={337}
            src="/redesign/images/girl_ep.png"
            alt=""
          />
        </div>
        <div
          className={cx(
            css`
              font-size: clamp(40px, 7vw, 90px);
            `,
            ' leading-none tracking-[-3.5px] font-bold text-custom-floppy-disk',
            'lg:order-2 order-1 my-8',
            'text-center',
          )}
        >
          OUR PARTNERS
        </div>
      </motion.div>
      <div
        // variants={item}
        className="flex flex-wrap pb-10 bg-custom-ghost-white px-5 min-h-[583px] items-center justify-center gap-[65px]"
      >
        <motion.div variants={item} className="grid gap-y-5 place-items-center text-center">
          <div>
            <div
              className={[
                'rounded-[20px]',
                'mt-[55px] mb-[20px]',
                'max-w-[552px]',
                'border border-opacity-50',
                'px-[20px] sm:px-[34px] lg:px-[52px] py-[54px] lg:py-[82px]',
                'border-custom-medium-slate-blue',
                'grid grid-cols-4 place-items-center',
                'gap-x-5 gap-y-6',
                'lg:gap-x-7 lg:gap-y-10',
              ].join(' ')}
            >
              {[...Array(8).keys()].map((key) => (
                <motion.div
                  className="rounded-[9px]"
                  key={key}
                  variants={channels}
                  style={{ boxShadow: '0px 4px 16px 0px #7562E01A' }}
                >
                  <img
                    draggable={false}
                    loading="lazy"
                    alt="channel"
                    className={cx(
                      css`
                        width: clamp(58px, 10vw, 89px);
                      `,
                      'rounded-[9px]',
                    )}
                    src={`/redesign/icons/channels/channel${key + 1}.jpg`}
                  />
                </motion.div>
              ))}
            </div>

            <span className="text-[28px] text-center leading-none font-bold text-custom-medium-slate-blue">
              PAYMENT CHANNELS
            </span>
          </div>
        </motion.div>
        <motion.div variants={item} className="grid gap-y-5 place-items-center text-center">
          <div>
            <div
              className={[
                'rounded-[20px]',
                'mt-[55px] mb-[20px]',
                'max-w-[552px]',
                'border border-opacity-50',
                'py-[54px] px-[20px]',
                'sm:px-[34px] lg:py-[82px] lg:px-[52px]',
                'border-custom-medium-slate-blue',
                'grid grid-cols-4 place-items-center',
                'gap-x-5 gap-y-6',
                'lg:gap-x-7 lg:gap-y-10',
              ].join(' ')}
            >
              {[...Array(8).keys()].map((key) => (
                <motion.div
                  key={key}
                  variants={channels}
                  style={{ boxShadow: '0px 4px 16px 0px #7562E01A' }}
                >
                  <img
                    draggable={false}
                    loading="lazy"
                    alt="biller"
                    className={cx(
                      css`
                        width: clamp(58px, 10vw, 89px);
                      `,
                      'rounded-[9px]',
                    )}
                    src={`/redesign/icons/billers/biller${key + 1}.jpg`}
                  />
                </motion.div>
              ))}
            </div>
            <span className="text-[28px] text-center leading-none font-bold text-custom-medium-slate-blue">
              BILLERS
            </span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
