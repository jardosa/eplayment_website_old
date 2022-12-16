import PropTypes from 'prop-types';
import { cx } from '@emotion/css';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const WhatCanYouDo = ({ titleText, data }) => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const group = {
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

  const member = {
    visible: {
      opacity: inView ? 1 : 0,
      y: inView ? 0 : 100,
      transition: {
        duration: 1,
        stiffness: 260,
        damping: 20,
      },
    },
    hidden: { opacity: 0, y: 100 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={group}
      ref={ref}
      className="w-full flex flex-col my-5 mt-[80px] mb-[80px] md:mt-[122px] md:mb-[172px] space-y-[60px] px-5"
    >
      <div className="text-custom-floppy-disk text-center text-[26px] sm:text-[40px] font-bold w-full leading-none">
        {titleText}
      </div>
      <div className="flex flex-wrap justify-center gap-[49px]">
        {data.map(({ title, imageSrc, description }) => (
          <motion.div
            key={title}
            variants={member}
            style={{ boxShadow: '0px 4px 16px 0px #7562E01A' }}
            className="rounded-[32px] border flex flex-col max-w-[394px] max-h-[425px]"
          >
            <img className={cx('w-[161px] mx-auto my-10')} src={imageSrc} alt={title} />
            <div className="mx-8 mb-8">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-custom-floppy-disk">
                {title}
              </p>
              <p className="text-custom-floppy-disk  text-base md:text-lg lg:text-xl">
                {description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

WhatCanYouDo.propTypes = {
  titleText: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      imageSrc: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default WhatCanYouDo;
