import { css, cx } from '@emotion/css';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { Element } from 'react-scroll';

export default function Regulation() {
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
      y: inView ? 0 : -100,
    },
    hidden: { opacity: 0, y: -100 },
  };
  return (
    <motion.div
      ref={ref}
      variants={container}
      animate="visible"
      initial="hidden"
      id="regulation"
      className="my-5  md:my-[100px]"
    >
      <Element
        name="regulation"
        id="regulation"
        className={cx(
          css`
            font-size: clamp(40px, 5vw, 60px);
            line-height: clamp(46px, 5vw, 66px);
          `,
          'text-center my-6 md:my-10 text-custom-medium-slate-blue font-bold',
        )}
      >
        REGULATION
      </Element>
      <div className="w-full px-5 flex flex-wrap gap-20 justify-center">
        <motion.div
          variants={item}
          style={{ boxShadow: '0px 4px 16px 0px #7562E01A' }}
          className="rounded-[32px] border border-transparent shadow-sm flex items-center max-w-[394px] justify-evenly flex-col w-full min-h-[336px]  gap-5 px-[24px] py-[26px]"
        >
          <Image src="/redesign/icons/about/regulation1.svg" width={130} height={185} />
          <div className="text-custom-floppy-disk flex-auto">
            <p className="text-center text-xl md:text-2xl font-bold leading-[33px]">COMPLIANCE</p>
            <ul className="text-base md:text-xl list-disc">
              <li>National Privacy Commision (NPC)</li>
              <li>Know-Your-Customer (KYC)</li>
            </ul>
          </div>
        </motion.div>
        <motion.div
          variants={item}
          style={{ boxShadow: '0px 4px 16px 0px #7562E01A' }}
          className="rounded-[32px] border border-transparent shadow-sm flex items-center max-w-[394px] justify-evenly flex-col w-full min-h-[336px] gap-5 px-[24px] py-[26px]"
        >
          <Image src="/redesign/icons/about/regulation2.svg" width={228} height={185} />
          <div className="text-custom-floppy-disk flex-auto">
            <p className="text-center text-xl md:text-2xl font-bold leading-[33px]">LICENSE</p>
            <p className="text-base md:text-xl">Operator of Payment Systems (OPS)</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
