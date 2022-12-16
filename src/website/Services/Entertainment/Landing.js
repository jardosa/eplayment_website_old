import { css, cx } from '@emotion/css';
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import YouTube from 'react-youtube';
import PurplePlay from 'assets/icons/purple-play.svg';

export default function Landing() {
  const { ref, inView } = useInView({ threshold: 0.25, triggerOnce: true });
  const [showThumbnail, setShowThumbnail] = useState(true);
  const youtubeRef = useRef(null);

  const playVideo = () => {
    setShowThumbnail(false);
    youtubeRef?.current.internalPlayer.playVideo();
  };
  const landingContainer = {
    visible: {
      opacity: inView ? 1 : 0,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.3,
      },
    },
    hidden: { opacity: 0 },
  };

  const landingItem = {
    visible: {
      opacity: inView ? 1 : 0,
      x: inView ? 0 : -100,
    },
    hidden: { opacity: 0, x: -50 },
  };
  return (
    <motion.div
      variants={landingContainer}
      animate="visible"
      initial="hidden"
      ref={ref}
      className="w-full bg-entertainment-landing-bg max-h-[700px] px-5 flex flex-col  text-left justify-center lg:justify-between items-center"
    >
      <motion.div variants={landingItem} className="my-8 space-y-5">
        <p
          className={cx(
            css`
              font-size: clamp(35px, 5vw, 80px);
            `,
            '  text-custom-medium-slate-blue font-bold w-full text-center  leading-none',
          )}
        >
          CONTENT CREATORS,
          <span className="text-custom-taurus-forest-fern">{` UNITE!`}</span>
        </p>
        <div className="text-base md:text-xl leading-[21px] text-center md:leading-[27px]">
          <p>Eplayment Entertainment is a media production studio</p>
          <p>serving individuals and teams</p>
          <p>in the gaming and entertainment space.</p>
        </div>
      </motion.div>
      <motion.div variants={landingItem} className="iframe-container relative flex justify-center">
        <img
          draggable={false}
          className="absolute w-1/2 max-w-[443px] z-20 h-[15px]"
          src="/redesign/images/services/entertainment/iframe-border.svg"
          alt=""
        />
        <iframe
          src="https://www.youtube.com/embed/JHNAG4ukZHE"
          title="YouTube video player"
          frameBorder="0"
          className={cx(
            css`
              border: 10px solid;
              border-image-slice: 1;
              border-width: 5px;
              border-image-source: linear-gradient(to bottom, #7562e0, #00ff001c);
            `,
          )}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </motion.div>
    </motion.div>
  );
}
