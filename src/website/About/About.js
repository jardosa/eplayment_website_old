/* eslint-disable react/jsx-wrap-multilines */
import { cx } from '@emotion/css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import * as Scroll from 'react-scroll';
import Roadmap from './Roadmap';
import MissionVision from './MissionVision';
import CoreValues from './CoreValues';
import Regulation from './Regulation';
import Landing from './Landing';

const links = ['mission', 'vision', 'core values', 'roadmap', 'regulation'];

const About = () => {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });

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
      x: inView ? 0 : -50,
    },
    hidden: { opacity: 0, x: -50 },
  };
  return (
    <>
      <div className="w-full overflow-hidden ">
        {/* WHAT IS EPLAYMENT */}
        <Landing />
        <motion.div
          ref={ref}
          variants={container}
          animate="visible"
          initial="hidden"
          className="w-full relative bg-white space-y-[100px] py-10 pb-10"
        >
          {/* LINKS */}
          <motion.div
            variants={item}
            className="flex flex-wrap w-full justify-center gap-6 sm:gap-5 lg:gap-8 px-2"
          >
            {links.map((link) => (
              <Scroll.Link key={link} to={link.toLowerCase().replace(' ', '')} offset={-200} smooth>
                <motion.button
                  variants={item}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={cx(
                    'border-2 rounded-md',
                    'cursor-pointer',
                    'border-custom-medium-slate-blue text-custom-medium-slate-blue',
                    'hover:bg-custom-medium-slate-blue hover:text-white',
                    'duration-200 text-sm sm:text-base lg:text-lg font-bold',
                    'uppercase',
                    'px-3 sm:px-5 lg:px-8 py-3',
                  )}
                >
                  {link}
                </motion.button>
              </Scroll.Link>
            ))}
          </motion.div>

          {/* MISSION VISION */}
          <MissionVision />
          {/* CORE VALUES */}
          <CoreValues />
        </motion.div>
        {/* ROADMAP */}
        <Roadmap />
        {/* REGULATION */}
        <Regulation />
      </div>
    </>
  );
};

export default About;
