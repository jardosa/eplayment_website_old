import { motion } from 'framer-motion';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { Element } from 'react-scroll';

const missionVision = [
  {
    name: 'mission',
    title: 'MISSION',
    description:
      'We aim to bring the world of virtual finance and entertainment to everyone as a fun, secure, and convenient fintech institution.',
    imageSrc: '/redesign/icons/about/mission_1.svg',
  },
  {
    name: 'vision',
    title: 'VISION',
    description:
      'We see a digital space to securely engage with people in and experience the fullest potential of fintech and entertainment combined.',
    imageSrc: '/redesign/icons/about/telescope_1.svg',
  },
];

export default function MissionVision() {
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
      className="flex flex-wrap  justify-center gap-5 mt-10 pt-10 sm:gap-10 lg:gap-20 px-5 w-full"
    >
      {missionVision.map(({ name, title, imageSrc, description }) => (
        <motion.div
          key={title}
          variants={item}
          id={title.toLowerCase()}
          style={{ boxShadow: '0px 4px 16px 0px #7562E01A' }}
          className="rounded-[32px] border border-transparent shadow-sm flex items-center justify-evenly flex-col w-full min-h-[442px]  max-w-[394px] px-[39px]"
        >
          <Element name={name} className="max-w-[173px] max-h-[173px]">
            <Image src={imageSrc} width={173} height={173} />
          </Element>
          <div className="text-custom-floppy-disk">
            <p className="text-center text-2xl font-bold leading-[33px]">{title}</p>
            <p className="text-xl">{description}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
