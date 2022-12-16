import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function RoadmapMobile() {
  const [firstRef, firstInView] = useInView({ threshold: 0.05, triggerOnce: true });
  const [secondRef, secondInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const [thirdRef, thirdInView] = useInView({ threshold: 0.05, triggerOnce: true });
  const [fourthRef, fourthInView] = useInView({ threshold: 0.05, triggerOnce: true });
  const [fifthRef, fifthInView] = useInView({ threshold: 0.05, triggerOnce: true });
  const [sixthRef, sixthInView] = useInView({ threshold: 0.05, triggerOnce: true });

  const timelineAnimator = (view) => ({
    visible: {
      opacity: view ? 1 : 0,
      y: view ? 0 : -100,
    },
    hidden: { opacity: 0, y: -100 },
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
    <div className="md:hidden block">
      <div className="flex justify-start min-h-[195px] gap-5">
        <div className="flex-shrink-0 w-[34px]">
          <div className="w-[34px] h-[34px]  bg-custom-medium-slate-blue rounded-full" />
          <div className=" mx-auto mt-[-5px] w-[7px] h-full bg-custom-medium-slate-blue" />
        </div>
        <motion.div
          animate="visible"
          initial="hidden"
          ref={firstRef}
          variants={rightAnimate(firstInView)}
          className="space-y-3 mb-10"
        >
          <div className="flex items-center gap-5">
            <img className="max-w-[48px]" src="/redesign/images/about/timeline-1.svg" alt="" />
            <p className="text-custom-medium-slate-blue text-[28px] md:text-[40px] leading-none font-bold">
              2019
            </p>
          </div>
          <p className="text-custom-taurus-forest-fern leading-none text-xl font-bold ">
            Content Production
          </p>
          <div className="text-custom-floppy-disk text-base">
            Eplayment started at the grassroots, creating gaming and esports content. We experienced
            firsthand the obstacles in creative freedom and creator monetization.
          </div>
        </motion.div>
      </div>
      <div className="flex justify-start min-h-[195px] gap-5">
        <div className="flex-shrink-0   w-[34px]">
          <div className="w-[34px] h-[34px]  bg-custom-medium-slate-blue rounded-full" />
          <div className=" mx-auto mt-[-5px] w-[7px] h-full bg-custom-medium-slate-blue" />
        </div>
        <motion.div
          animate="visible"
          initial="hidden"
          ref={secondRef}
          variants={rightAnimate(secondInView)}
          className="space-y-3 mb-10"
        >
          <div className="flex items-center gap-5">
            <img className="max-w-[48px]" src="/redesign/images/about/timeline-2.svg" alt="" />
            <p className="text-custom-medium-slate-blue text-[28px] md:text-[40px] leading-none font-bold">
              2020
            </p>
          </div>
          <p className="text-custom-taurus-forest-fern leading-none text-xl font-bold ">
            Payment Gateway
          </p>
          <div className="text-custom-floppy-disk text-base">
            With a newfound drive to solve the structural problem, we entered the world of fintech,
            one step at a time. This led to the development of a payment gateway for businesses in
            gaming and entertainment.
          </div>
        </motion.div>
      </div>
      <div className="flex justify-start min-h-[195px] gap-5">
        <div className="flex-shrink-0   w-[34px]">
          <div className="w-[34px] h-[34px] border-[5px] border-custom-medium-slate-blue bg-white rounded-full grid place-items-center">
            <div className="w-[16px] h-[16px] rounded-full bg-custom-taurus-forest-fern" />
          </div>
          <div className=" mx-auto mt-[-5px] w-[12px] h-full border-l-[5px] ml-[15px] border-dashed  border-custom-medium-slate-blue" />
        </div>
        <motion.div
          animate="visible"
          initial="hidden"
          ref={thirdRef}
          variants={rightAnimate(thirdInView)}
          className="space-y-3 mb-10"
        >
          <div className="flex items-center gap-5">
            <img className="max-w-[48px]" src="/redesign/images/about/timeline-3.svg" alt="" />
            <p className="text-custom-medium-slate-blue text-[28px] md:text-[40px] leading-none font-bold">
              2021 Quarter 3
            </p>
          </div>
          <p className="text-custom-taurus-forest-fern leading-none text-xl font-bold ">
            Eplayment Wallet (Phase 1)
          </p>
          <div className="text-custom-floppy-disk text-base">
            After months of development, we released a beta of our flagship product – the Eplayment
            Wallet. This version can be used for fund transfers and digital purchases of game and
            entertainment credits.
          </div>
        </motion.div>
      </div>
      <div className="flex justify-start min-h-[195px] gap-5">
        <div className="flex-shrink-0   w-[34px]">
          <div className="w-[34px] h-[34px] border-[5px] border-custom-medium-slate-blue bg-white rounded-full grid place-items-center" />
          <div className=" mx-auto mt-[-5px] w-[12px] h-full border-l-[5px] ml-[15px] border-dashed  border-custom-medium-slate-blue" />
        </div>
        <motion.div
          animate="visible"
          initial="hidden"
          ref={fourthRef}
          variants={rightAnimate(fourthInView)}
          className="space-y-3 mb-10"
        >
          <div className="flex items-center gap-5">
            <img className="max-w-[48px]" src="/redesign/images/about/timeline-4.svg" alt="" />
            <p className="text-custom-medium-slate-blue text-[28px] md:text-[40px] leading-none font-bold">
              2021 Quarter 4
            </p>
          </div>
          <p className="text-custom-taurus-forest-fern leading-none text-xl font-bold ">
            Banking (Phase 2)
          </p>
          <div className="text-custom-floppy-disk text-base">
            Bank transfers, a Visa card, ATM withdrawal, and POS purchases.
          </div>
        </motion.div>
      </div>
      <div className="flex justify-start min-h-[195px] gap-5">
        <div className="flex-shrink-0   w-[34px]">
          <div className="w-[34px] h-[34px] border-[5px] border-custom-medium-slate-blue bg-white rounded-full grid place-items-center" />
          <div className=" mx-auto mt-[-5px] w-[12px] h-full border-l-[5px] ml-[15px] border-dashed  border-custom-medium-slate-blue" />
        </div>
        <motion.div
          animate="visible"
          initial="hidden"
          ref={fifthRef}
          variants={rightAnimate(fifthInView)}
          className="space-y-3 mb-10"
        >
          <div className="flex items-center gap-5">
            <img className="w-[48px]" src="/redesign/images/about/timeline-5.png" alt="" />
            <p className="text-custom-medium-slate-blue text-[28px] md:text-[40px] leading-none font-bold">
              2022 Quarter 2
            </p>
          </div>
          <p className="text-custom-taurus-forest-fern leading-none text-xl font-bold ">
            Creator Tools (Phase 3)
          </p>
          <div className="text-custom-floppy-disk text-base">
            Financial and software tools designed for the creator lifestyle.
          </div>
        </motion.div>
      </div>
      <div className="flex justify-start min-h-[195px] gap-5">
        <div className="flex-shrink-0   w-[34px]">
          <div className="w-[34px] h-[34px] border-[5px] border-custom-medium-slate-blue bg-white rounded-full grid place-items-center" />
        </div>
        <motion.div
          animate="visible"
          initial="hidden"
          ref={sixthRef}
          variants={rightAnimate(sixthInView)}
          className="space-y-3 mb-10"
        >
          <div className="flex items-center gap-5">
            <img className="max-w-[48px]" src="/redesign/images/about/timeline-6.svg" alt="" />
            <p className="text-custom-medium-slate-blue text-[28px] md:text-[40px] leading-none font-bold">
              2022 Quarter 2
            </p>
          </div>
          <p className="text-custom-taurus-forest-fern leading-none text-xl font-bold ">
            Crypto (Phase 4)
          </p>
          <div className="text-custom-floppy-disk text-base">
            Buy, sell, store, and gift crypto and NFTs.
          </div>
        </motion.div>
      </div>
    </div>
  );
}
