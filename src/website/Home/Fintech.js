import Image from 'next/image';
import Button from 'components/redesign/Button';
import { useRouter } from 'next/router';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

export default function Fintech() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const router = useRouter();

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
      x: inView ? 0 : -100,

      transition: {
        duration: 1,
        stiffness: 260,
        damping: 20,
      },
    },
    hidden: { opacity: 0, x: -100 },
  };

  const phone = {
    visible: {
      opacity: 1,
      x: inView ? 0 : 100,

      transition: {
        duration: 1,
        stiffness: 260,
        damping: 20,
      },
    },
    hidden: { opacity: 0, x: 100 },
  };

  return (
    <motion.div
      variants={container}
      animate="visible"
      initial="hidden"
      ref={ref}
      className="w-full relative bg-custom-medium-slate-blue justify-between items-center min-h-[500px] lg:min-h-[711px] bg-fintech grid grid-cols-1 lg:grid-cols-2   gap-5 lg:flex-nowrap"
    >
      <motion.div
        variants={phone}
        className="lg:absolute w-full flex order-2 justify-end relative bottom-0 right-0"
      >
        <Image
          draggable={false}
          width={763}
          height={679}
          objectFit="contain"
          objectPosition="right"
          src="/redesign/images/home-fintech/home-fintech-epay.png"
        />
      </motion.div>
      <motion.div
        variants={text}
        className="mx-5 md:mx-10 xl:mx-20 relative order-1 xl:max-w-[600px] flex space-y-[20px] lg:space-y-[40px] lg:block flex-col items-center  md:text-left"
      >
        <div className="text-[32px] my-5 md:my-10 sm:text-[47px] md:text-[70px] text-center lg:text-left leading-none text-white font-bold">
          <p>OUR FUTURE</p>
          <p>
            IN
            <span className="text-custom-taurus-forest-fern">{` FINTECH`}</span>
          </p>
        </div>

        <div className="text-base sm:text-lg md:text-xl lg:text-2xl text-start lg:text-left text-white">
          <p>Eplayment has processed over</p>
          <p>
            <span className="font-bold">{' PHP 5B '}</span>
            worth of payments
          </p>
          <p>for gamers and gaming businesses</p>
          <p>using our financial services.</p>
        </div>
        <Button
          onClick={() => router.push('/services/payment-gateway')}
          className="bg-transparent border !border-white hover:border-2 lg:place-self-start text-white h-[65px]  "
          title="MORE ON PAYMENTS"
        />
      </motion.div>
    </motion.div>
  );
}
