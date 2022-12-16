/* eslint-disable react/jsx-one-expression-per-line */
import { css, cx } from '@emotion/css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
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

  const contactCard = (email, label) => (
    <div
      style={{ boxShadow: '0px 4px 16px 0px #7562E01A' }}
      className={cx(
        css`
          width: clamp(250px, 50vw, 316px);
        `,
        ' bg-white rounded-[19px] z-10 w-full p-4 lg:p-8 text-center space-y-1',
      )}
    >
      <a
        href={`mailto:${email}`}
        className="text-custom-floppy-disk hover:text-custom-taurus-forest-fern duration-200 text-base md:text-xl font-bold"
      >
        {email}
      </a>
      <p className="text-custom-floppy-disk opacity-60 font-semibold text-base">{label}</p>
    </div>
  );

  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate="visible"
      className="w-full flex flex-col max-w-[1000px]  mx-auto relative justify-center items-center px-5"
    >
      <div
        className={cx(
          css`
            font-size: clamp(40px, 5vw, 60px);
            line-height: clamp(46px, 5vw, 66px);
          `,
          'text-center my-6 md:my-10 text-custom-medium-slate-blue font-bold',
        )}
      >
        CONTACT US
      </div>
      <div className="flex max-w-[700px] my-10 justify-center gap-6 md:gap-10 flex-wrap mb-[100px]">
        {contactCard('support@eplayment.com', 'Help & Support')}
        {contactCard('dpo@eplayment.com', 'Data Protection')}
        {contactCard('partner@eplayment.com', 'Partnerships-Fintech')}
        {contactCard('studio@eplayment.com', 'Partnerships-Entertainment')}
      </div>
      <div className={cx(' absolute bottom-[8%] sm:bottom-[8%] left-[5%]')}>
        <img
          alt=""
          className={cx(css`
            width: clamp(140px, 40vw, 264px);
          `)}
          src="/redesign/vectors/vector-2-contact.png"
        />
      </div>
      <div className=" absolute top-[15%] right-[5%]">
        <img
          alt=""
          className={cx(css`
            width: clamp(140px, 40vw, 264px);
          `)}
          src="/redesign/vectors/vector-1-contact.png"
        />
      </div>
    </motion.div>
  );
};

export default Contact;
