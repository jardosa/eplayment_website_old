import Button from 'components/redesign/Button';
import { cx } from '@emotion/css';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function EplaymentBank() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

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

  const text = {
    visible: {
      opacity: 1,
      y: inView ? 0 : 100,

      transition: {
        duration: 1,
        stiffness: 260,
        damping: 20,
      },
    },
    hidden: { opacity: 0, y: 100 },
  };

  const router = useRouter();
  return (
    <motion.div
      variants={container}
      animate="visible"
      initial="hidden"
      ref={ref}
      className="min-h-[400px] w-full flex lg:flex-nowrap flex-wrap items-center text-center relative justify-center"
    >
      <motion.div variants={text} className={cx('mx-auto', 'self-end', 'order-2 lg:order-2')}>
        <img
          className="lg:max-w-[413px] md:max-w-[350px] sm:max-w-[300px] max-w-[280px]"
          draggable={false}
          alt="gbanked"
          src="/redesign/images/home-eplayment-bank/girl-dress-card 1.png"
        />
      </motion.div>

      <motion.div
        variants={text}
        className="max-w-[721px] order-1 lg:order-2  text-center flex flex-col justify-center lg:text-left w-full mx-5 my-8 "
      >
        <div className=" order-1   font-bold text-custom-medium-slate-blue leading-none">
          <p className="text-[50px] sm:text-[70px] md:text-[90px] lg:text-[110px]">EXPERIENCE</p>
          <p className="text-[24px] sm:text-[30px] md:text-[35px] lg:text-[49px]">
            {' '}
            A HASSLE-FREE E-BANKING!
          </p>
        </div>

        <div className="order-2 lg:order-3 space-y-10 text-lg flex flex-col text-center lg:text-left justify-between my-8 leading-6  mx-auto lg:mx-0 min-h-[175px]">
          <div>
            {/* <p>Experience a hassle-free e-banking!</p> */}
            <p>Once fully verified, you will have access to a debit account</p>
            <p>with a virtual & physical Visa card.</p>
          </div>

          <div>
            <p>Increase your transaction power by using it for ATM withdrawals</p>
            <p>and payments via online & over-the-counter channels.</p>
          </div>
          <Button
            onClick={() => router.push('services/wallet')}
            className="lg:self-start self-center duration-200"
            title="LEARN MORE"
            isOutline
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
