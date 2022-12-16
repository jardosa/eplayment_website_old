import Button from 'components/redesign/Button';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { css, cx } from '@emotion/css';
import Ely from '../../../public/redesign/images/home-gaming-content/ely.svg';

const MotionButton = motion(Button, { forwardMotionProps: true });

export default function GamingContent() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: inView ? 1 : 0,
      transition: {
        ease: 'easeInOut',
        staggerChildren: 0.3,
      },
    },
  };

  const text = {
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

  const router = useRouter();
  return (
    <motion.div
      variants={container}
      animate="visible"
      initial="hidden"
      ref={ref}
      className="w-full min-h-[600px] p-5 flex flex-col space-y-[100px] my-[40px] sm:my-[60px] md:my-[80px] lg:my-[100px] justify-center items-center"
    >
      <motion.p
        variants={text}
        className="mx-5 lg:mx-20 xl:mx-36 font-bold text-custom-floppy-disk text-[42px] md:text-[60px] lg:text-[80px] leading-none tracking-[-3.5px] text-center"
      >
        GAMING CONTENT IS OUR
        <span className="text-custom-taurus-forest-fern">{` ALPHA`}</span>
        {` & `}
        <span className="text-custom-medium-slate-blue">OMEGA</span>
      </motion.p>
      <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center">
        <motion.div variants={text} className="w-full max-w-[676px] max-h-[525px] h-full">
          <Ely className=" h-full lg:translate-y-8 w-full" />
        </motion.div>
        <motion.div
          variants={text}
          className="text-base md:text-xl   w-full h-full text-left flex flex-col gap-y-7 leading-[27px]"
        >
          <div>
            <p>We started our journey at the grassroots</p>
            <p>by creating gaming & Esports content</p>
            <p>and endeavored to learn more as we went along.</p>
          </div>

          <div>
            <p>Our purpose is to empower anyone</p>
            <p>trying to break into the space of content creation.</p>
          </div>

          <div>
            <p>Encourage creative freedom.</p>
            <p>Provide convenient access to financial solutions.</p>
            <p>Pre-membering culture and eliminating gatekeeping.</p>
            <p>Equalizing opportunities.</p>
          </div>

          <div>
            <span className="font-bold text-custom-medium-slate-blue">Create</span>
            <span>,</span>
            <span className="font-bold text-custom-medium-slate-blue">{` Connect`}</span>
            <span>, and</span>
            <span className="font-bold text-custom-medium-slate-blue">{` Convert `}</span>
            with
            <span className="font-bold text-custom-taurus-forest-fern">{` Eplayment`}</span>
            <span>.</span>
          </div>
          <MotionButton
            variants={text}
            onClick={() => router.push('/services/entertainment')}
            title="MORE ON CONTENT"
            className="min-w-[255px] text-base lg:px-8 max-w-[62px] sm:self-start self-center hover:bg-custom-taurus-forest-fern duration-200"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
