import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function RoadmapDesktop() {
  const [ref, inView] = useInView({ threshold: 0.25, triggerOnce: true });
  const [firstRef, firstInView] = useInView({ threshold: 1, triggerOnce: true });
  const [secondRef, secondInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const [thirdRef, thirdInView] = useInView({ threshold: 1, triggerOnce: true });
  const [fourthRef, fourthInView] = useInView({ threshold: 1, triggerOnce: true });
  const [fifthRef, fifthInView] = useInView({ threshold: 1, triggerOnce: true });
  const [sixthRef, sixthInView] = useInView({ threshold: 1, triggerOnce: true });

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

  const timelineAnimator = (view) => ({
    visible: {
      opacity: view ? 1 : 0,
      y: view ? 0 : -100,
    },
    hidden: { opacity: 0, y: -100 },
  });

  const leftAnimate = (view) => ({
    visible: {
      opacity: view ? 1 : 0,
      x: view ? 0 : -100,
      transition: {
        duration: 0.8,
        ease: 'easeIn',
      },
    },
    hidden: { opacity: 0, x: -100 },
  });

  const rightAnimate = (view) => ({
    visible: {
      opacity: view ? 1 : 0,
      x: view ? 0 : 100,
      transition: {
        duration: 0.8,
        ease: 'easeIn',
      },
    },
    hidden: { opacity: 0, x: 100 },
  });

  return (
    <motion.div
      ref={ref}
      variants={container}
      animate="visible"
      initial="hidden"
      className=" hidden md:grid grid-cols-2"
    >
      {/* 2019 */}
      <div className="text-right h-[195px] justify-self-end flex gap-10 mr-[-17px]">
        <motion.div
          ref={firstRef}
          variants={leftAnimate(firstInView)}
          animate="visible"
          initial="hidden"
          className="space-y-3"
        >
          <div className="flex items-center gap-5 justify-end">
            <p className="text-custom-medium-slate-blue text-[40px] leading-none font-bold">2019</p>
            <img src="/redesign/images/about/timeline-1.svg" alt="" />
          </div>
          <p className="text-custom-taurus-forest-fern leading-none text-[32px] font-bold ">
            Content Production
          </p>
          <div className="text-custom-floppy-disk text-base max-w-[336px]">
            Eplayment started at the grassroots, creating gaming and esports content. We experienced
            firsthand the obstacles in creative freedom and creator monetization.
          </div>
        </motion.div>
        <div className="flex-shrink-0 w-[34px]">
          <div className="w-[34px] h-[34px]  bg-custom-medium-slate-blue rounded-full" />
          <div className=" mx-auto mt-[-5px] w-[12px] h-full bg-custom-medium-slate-blue" />
        </div>
      </div>

      {/* 2020 */}
      <div className="text-left h-[195px] justify-self-start row-start-2 col-start-2 flex gap-10 ml-[-17px]">
        <div className="flex-shrink-0 w-[34px]">
          <div className="w-[34px] h-[34px]  bg-custom-medium-slate-blue rounded-full" />
          <div className=" mx-auto mt-[-5px] w-[12px] h-full bg-custom-medium-slate-blue" />
        </div>
        <motion.div
          ref={secondRef}
          variants={rightAnimate(secondInView)}
          animate="visible"
          initial="hidden"
          className="space-y-3"
        >
          <div className="flex items-center gap-5 justify-start">
            <img src="/redesign/images/about/timeline-2.svg" alt="" />
            <p className="text-custom-medium-slate-blue text-[40px] leading-none font-bold">2020</p>
          </div>
          <p className="text-custom-taurus-forest-fern leading-none text-[32px] font-bold ">
            Payment Gateway
          </p>
          <div className="text-custom-floppy-disk text-base max-w-[415px]">
            With a newfound drive to solve the structural problem, we entered the world of fintech,
            one step at a time. This led to the development of a payment gateway for businesses in
            gaming and entertainment.
          </div>
        </motion.div>
      </div>

      {/* 2021 Quarter 3 */}
      <div className="text-right h-[195px] justify-self-end flex gap-10 row-start-3 mr-[-17px]">
        <motion.div
          ref={thirdRef}
          variants={leftAnimate(thirdInView)}
          animate="visible"
          initial="hidden"
          className="space-y-3"
        >
          <div className="flex items-center gap-5 justify-end">
            <p className="text-custom-medium-slate-blue text-[40px] leading-none font-bold">
              2021 Quarter 3
            </p>
            <img src="/redesign/images/about/timeline-3.svg" alt="" />
          </div>

          <p className="text-custom-taurus-forest-fern leading-none text-[32px] font-bold ">
            Eplayment Wallet (Phase 1)
          </p>
          <div className="text-custom-floppy-disk text-base max-w-[434px]">
            After months of development, we released a beta of our flagship product – the Eplayment
            Wallet. This version can be used for fund transfers and digital purchases of game and
            entertainment credits.
          </div>
        </motion.div>
        <div className="flex-shrink-0 w-[34px]">
          <div className="w-[34px] h-[34px] border-[5px] border-custom-medium-slate-blue bg-white rounded-full grid place-items-center">
            <div className="w-[16px] h-[16px] rounded-full bg-custom-taurus-forest-fern" />
          </div>
          <div className=" mx-auto mt-[-5px] w-[12px] h-full border-l-[5px] ml-[15px] border-dashed  border-custom-medium-slate-blue" />
        </div>
      </div>

      {/* 2021 Quarter 4 */}
      <div className="text-left h-[195px] justify-self-start row-start-4 col-start-2 flex gap-10 ml-[-17px]">
        <div className="flex-shrink-0 w-[34px]">
          <div className="w-[34px] h-[34px] border-[5px] border-custom-medium-slate-blue bg-white rounded-full grid place-items-center" />
          <div className=" mx-auto mt-[-5px] w-[12px] h-full border-l-[5px] ml-[15px] border-dashed  border-custom-medium-slate-blue" />
        </div>
        <motion.div
          ref={fourthRef}
          variants={rightAnimate(fourthInView)}
          animate="visible"
          initial="hidden"
          className="space -y-3"
        >
          <div className="flex items-center gap-5 justify-start">
            <img src="/redesign/images/about/timeline-4.svg" alt="" />
            <p className="text-custom-medium-slate-blue text-[40px] leading-none font-bold">
              2021 Quarter 4
            </p>
          </div>
          <p className="text-custom-taurus-forest-fern leading-none text-[32px] font-bold ">
            Banking (Phase 2)
          </p>
          <div className="text-custom-floppy-disk text-base max-w-[302px]">
            Bank transfers, a Visa card, ATM withdrawal, and POS purchases.
          </div>
        </motion.div>
      </div>

      {/* 2022 Quarter 2 */}
      <div className="text-right h-[195px] justify-self-end flex gap-10 row-start-5 mr-[-17px]">
        <motion.div
          ref={fifthRef}
          variants={leftAnimate(fifthInView)}
          animate="visible"
          initial="hidden"
          className="space-y-3 flex flex-col items-end"
        >
          <div className="flex items-center gap-5 justify-end">
            <p className="text-custom-medium-slate-blue text-[40px] leading-none font-bold">
              2022 Quarter 2
            </p>
            <img src="/redesign/images/about/timeline-5.png" alt="" />
          </div>
          <p className="text-custom-taurus-forest-fern leading-none text-[32px] font-bold ">
            Creator Tools (Phase 3)
          </p>
          <div className="text-custom-floppy-disk text-base max-w-[295px]">
            Financial and software tools designed for the creator lifestyle.
          </div>
        </motion.div>
        <div className="flex-shrink-0 w-[34px]">
          <div className="w-[34px] h-[34px] border-[5px] border-custom-medium-slate-blue bg-white rounded-full grid place-items-center" />
          <div className=" mx-auto mt-[-5px] w-[12px] h-full border-l-[5px] ml-[15px] border-dashed  border-custom-medium-slate-blue" />
        </div>
      </div>

      <div className="text-left h-[195px] justify-self-start row-start-6 col-start-2 flex gap-10 ml-[-17px]">
        <div className="flex-shrink-0 w-[34px]">
          <div className="w-[34px] h-[34px] border-[5px] border-custom-medium-slate-blue bg-white rounded-full grid place-items-center" />
        </div>
        <motion.div
          variants={rightAnimate(sixthInView)}
          ref={sixthRef}
          animate="visible"
          initial="hidden"
          className="space-y-3"
        >
          <div className="flex items-center gap-5 justify-start">
            <img src="/redesign/images/about/timeline-6.svg" alt="" />
            <p className="text-custom-medium-slate-blue text-[40px] leading-none font-bold">
              2022 Quarter 2
            </p>
          </div>
          <p className="text-custom-taurus-forest-fern leading-none text-[32px] font-bold ">
            Crypto (Phase 4)
          </p>
          <div className="text-custom-floppy-disk text-base">
            Buy, sell, store, and gift crypto and NFTs.
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
