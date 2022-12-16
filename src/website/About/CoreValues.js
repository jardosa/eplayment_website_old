import { motion } from 'framer-motion';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { Element } from 'react-scroll';

const coreValues = [
  {
    title: 'Agile',
    description:
      'In a space that’s constantly evolving and innovating, we must think, move, and breathe agile.',
    imageSrc: '/redesign/icons/about/core-values1.svg',
  },
  {
    title: 'Committed',
    description:
      'As gamers and creators ourselves, we’re committed to designing products that benefit the creative lifestyle.',
    imageSrc: '/redesign/icons/about/core-values2.svg',
  },
  {
    title: 'Fun',
    description:
      'Your passion is important. Enjoying yourself is important. We’re here to support that. ',
    imageSrc: '/redesign/icons/about/core-values3.svg',
  },
];

export default function CoreValues() {
  const { ref, inView } = useInView({ threshold: 0.25, triggerOnce: true });

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
    <motion.div variants={container} ref={ref} animate="visible" initial="hidden">
      <motion.p
        variants={item}
        id="corevalues"
        className="text-center text-[40px] mt-24 pt-24 leading-[54px] font-bold text-custom-floppy-disk"
      >
        CORE VALUES
      </motion.p>
      <Element
        name="corevalues"
        className="flex flex-wrap justify-center my-5 lg:my-10 gap-5 px-5 sm:gap-10 lg:gap-20 w-full"
      >
        {coreValues.map(({ title, imageSrc, description }) => (
          <motion.div
            key={title}
            variants={item}
            id={title.toLowerCase()}
            style={{ boxShadow: '0px 4px 16px 0px #7562E01A' }}
            className="rounded-[32px] border border-transparent shadow-sm flex items-center justify-evenly flex-col w-full min-h-[336px] max-w-[311px] lg:max-w-[244px] px-[24px] py-[26px]"
          >
            <div className="max-w-[173px] max-h-[173px]">
              <Image src={imageSrc} width={173} height={173} />
            </div>
            <div className="text-custom-floppy-disk">
              <p className="text-center text-2xl font-bold leading-[33px]">{title}</p>
              <p className="text-xl">{description}</p>
            </div>
          </motion.div>
        ))}
      </Element>
    </motion.div>
  );
}
