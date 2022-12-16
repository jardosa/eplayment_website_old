import { css, cx } from '@emotion/css';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { useInView } from 'react-intersection-observer';

const Collaborate = ({ text, url }) => {
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
      x: inView ? 0 : -100,
    },
    hidden: { opacity: 0, x: -50 },
  };

  return (
    <div className="w-full bg-cover bg-center bg-no-repeat px-5 bg-curved-lines md:px-[40px] lg:px-[83px]">
      <motion.div
        ref={ref}
        variants={container}
        animate="visible"
        initial="hidden"
        className="flex w-full gap-3 h-full items-center"
      >
        <motion.div variants={item} className="space-y-5 lg:mb-36 xl:whitespace-nowrap max-w-[50%]">
          <p
            className={cx(
              css`
                font-size: clamp(28px, 5vw, 60px);
              `,
              ' text-custom-medium-slate-blue leading-none font-bold tracking-[-2px]',
            )}
          >
            {text}
          </p>
          <p
            className={cx(
              css`
                font-size: clamp(16px, 4vw, 30px);
                line-height: clamp(20px, 5vw, 36px);
              `,
              ' text-custom-floppy-disk',
              '',
            )}
          >
            Send us a message at
            <a
              className="hover:text-custom-taurus-forest-fern duration-200 font-bold"
              href={`mailto: ${url}`}
            >
              {` ${url} `}
            </a>
          </p>
        </motion.div>
        <motion.div variants={item} className="grid place-items-end self-end w-full">
          <img
            draggable={false}
            className={cx(
              css`
                width: clamp(200px, 50vw, 365px);
              `,
              'mr-[-20px]',
            )}
            src="/redesign/images/collab_1.png"
            alt="collab"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Collaborate;

Collaborate.propTypes = {
  text: PropTypes.string.isRequired,
  url: PropTypes.string,
};

Collaborate.defaultProps = {
  url: 'studio@eplayment.com',
};
