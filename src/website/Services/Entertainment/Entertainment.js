import Collaborate from 'components/redesign/Collaborate';
import WhatCanYouDo from 'components/redesign/WhatCanYouDo';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import Landing from './Landing';
import Portfolio from './Portfolio';

const data = [
  {
    title: 'Pitch your Project',
    imageSrc: '/redesign/icons/entertainment-features/project_1.png',
    description: 'Invite us to be a partner and support your event',
  },
  {
    title: 'Rent our Studio',
    imageSrc: '/redesign/icons/entertainment-features/studio-set_1.png',
    description:
      'Use our 18-sqm studio and 37-sqm office for your streaming, filming, photography, and recording projects',
  },
  {
    title: 'Organize your Event',
    imageSrc: '/redesign/icons/entertainment-features/event_1.png',
    description: 'Hire us to organize and promote your tournament',
  },
];

const Entertainment = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const container = {
    visible: {
      opacity: inView ? 1 : 0,
      transition: {
        when: 'beforeChildren',
        ease: 'easeInOut',
        staggerChildren: 0.3,
      },
    },
    hidden: { opacity: 0 },
  };
  const item = {
    visible: {
      opacity: 1,
      y: inView ? 0 : 50,

      transition: {
        duration: 1,
        stiffness: 260,
        damping: 20,
      },
    },
    hidden: { opacity: 0, y: 50 },
  };
  return (
    <div className="w-full">
      {/* CONTENT CREATORS UNITE! */}
      <Landing />
      {/* WHAT CAN YOU DO WITH EPLAYMENT ENTERTAINMENT? */}
      {/* <WhatCanYouDo data={data} titleText="WHAT CAN EPLAYMENT ENTERTAINMENT OFFER YOU?" /> */}
      <motion.div
        animate="visible"
        initial="hidden"
        variants={container}
        ref={ref}
        className="w-full px-5 flex flex-col"
      >
        <div className="text-[28px] leading-[36px] lg:text-[40px] lg:leading-[54px] text-center my-12 font-bold">
          WHAT CAN EPLAYMENT ENTERTAINMENT OFFER YOU?
        </div>
        <motion.div variants={item} className="flex flex-wrap gap-5 justify-center text-center">
          <Link href="/services/entertainment/pitch-your-project">
            <a className="group">
              <div className="max-w-[378px]">
                <img
                  className="group-hover:text-custom-taurus-forest-fern transition  max-h-[302px]"
                  src="/redesign/images/services/entertainment/pitch-your-project.png"
                  alt=""
                />
                <p className="group-hover:text-custom-taurus-forest-fern transition font-bold leading-9 text-custom-floppy-disk text-2xl">
                  Pitch your Project
                </p>
                <p className="group-hover:text-custom-taurus-forest-fern transition text-custom-floppy-disk w-[80%] mx-auto text-xl">
                  Invite us to be a partner and support your event
                </p>
              </div>
            </a>
          </Link>
          <motion.div variants={item} className="max-w-[378px]">
            <Link href="/services/entertainment/rent-our-studio">
              <a className="group">
                <img
                  className="group-hover:text-custom-taurus-forest-fern transition  max-h-[302px]"
                  src="/redesign/images/services/entertainment/rent-our-studio.png"
                  alt=""
                />
                <p className="group-hover:text-custom-taurus-forest-fern transition font-bold leading-9 text-custom-floppy-disk text-2xl">
                  Rent our Studio
                </p>
                <p className="group-hover:text-custom-taurus-forest-fern transition text-custom-floppy-disk w-[80%] mx-auto text-xl">
                  Use our 18-sqm studio and 37-sqm office for your streaming, filming, photography,
                  and recording projects
                </p>
              </a>
            </Link>
          </motion.div>
          <motion.div variants={item} className="max-w-[378px]">
            <Link href="/services/entertainment/organize-your-event">
              <a className="group">
                <img
                  className="group-hover:text-custom-taurus-forest-fern transition  max-h-[302px]"
                  src="/redesign/images/services/entertainment/organize-your-event.png"
                  alt=""
                />
                <p className="group-hover:text-custom-taurus-forest-fern transition font-bold leading-9 text-custom-floppy-disk text-2xl">
                  Organize your Event
                </p>
                <p className="group-hover:text-custom-taurus-forest-fern transition text-custom-floppy-disk w-[80%] mx-auto text-xl">
                  Hire us to organize and promote your tournament
                </p>
              </a>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
      <Collaborate text="WANT TO CREATE?" url="studio@eplayment.com" />
      {/* PORTFOLIO */}
      <Portfolio />
    </div>
  );
};

export default Entertainment;
