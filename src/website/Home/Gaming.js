import { css, cx } from '@emotion/css';
import { motion, useMotionValue, useTransform, useViewportScroll } from 'framer-motion';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import { Element } from 'react-scroll';
import EplaymentGamesModal from 'components/redesign/EplaymentGamesModal';
import { filteredGames } from 'constants/games';
import { filteredVouchers } from 'constants/vouchers';
import { useRouter } from 'next/router';
import modalGames from 'constants/modalGames';

export default function Gaming() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const y = useMotionValue(0);
  const { scrollYProgress } = useViewportScroll();
  const [modalOpen, setModalOpen] = useState(false);
  const router = useRouter();

  const container = {
    visible: { opacity: inView ? 1 : 0 },
    hidden: { opacity: 0 },
  };

  const scrollYReyna = useTransform(y, (value) => {
    return -value * 10;
  });
  const scrollYXiao = useTransform(y, (value) => {
    return -value * 10;
  });
  const scrollYGranger = useTransform(y, (value) => {
    return -value * 10;
  });

  const scrollYHeroGroup = useTransform(y, (value) => {
    return -value * 10;
  });

  useEffect(() => {
    scrollYProgress.onChange((v) => y.set(v * 10));
  }, [scrollYProgress, y]);

  const gamesGroup = {
    visible: {
      opacity: inView ? 1 : 0,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.1,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: 'afterChildren',
      },
    },
  };

  const textGroup = {
    ...gamesGroup,
  };

  const game = {
    visible: {
      opacity: inView ? 1 : 0,
      x: inView ? 0 : -100,
    },
    hidden: {
      opacity: 0,
      x: -100,
    },
  };

  const text = {
    ...game,
  };

  const heroesVariant = {
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    hidden: { opacity: 0, y: 100 },
  };

  return (
    <motion.div
      variants={container}
      animate="visible"
      initial="hidden"
      ref={ref}
      id="gaming"
      className="w-full min-h-[720px] flex bg-custom-wash-me relative"
    >
      <div
        style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}
        className="w-[738px] h-[400px] sm:h-[450px] md:h-[500px] lg:h-[611px] absolute z-[-5px] top-0 right-0 bg-custom-medium-slate-blue"
      />
      <motion.div
        variants={textGroup}
        className="mx-5 md:mx-10 z-10 h-full flex py-5 flex-col lg:max-w-[672px] justify-center items-center font-bold text-center md:text-left"
      >
        <Element
          name="gaming"
          className="flex sm:flex-nowrap  flex-wrap items-center text-center justify-center md:justify-start "
        >
          <div>
            <motion.div
              variants={text}
              className={cx(
                css`
                  font-size: clamp(31px, 7vw, 70px);
                  line-height: clamp(42px, 8vw, 80px);
                `,
                'text-center',
              )}
            >
              <span
                style={{
                  textShadow:
                    '-1px -1px 0 #7562E0, 1px -1px 0 #7562E0, -1px 1px 0 #7562E0, 1px 1px 0 #7562E0',
                }}
                className="text-white"
              >
                ELEVATE YOUR
              </span>
            </motion.div>
            <motion.div
              variants={text}
              className={cx(
                css`
                  font-size: clamp(54px, 8vw, 90px);
                  line-height: clamp(73px, 8vw, 126px);
                `,
                'sm:text-custom-medium-slate-blue text-custom-taurus-forest-fern',
              )}
            >
              GAME
            </motion.div>
          </div>
          <motion.div
            style={{ y: scrollYHeroGroup }}
            className={cx('sm:mt-[-100px]', 'lg:hidden block', 'h-full')}
          >
            <Image
              draggable={false}
              width={500}
              height={500}
              src="/redesign/images/heroes3.png"
              alt=""
            />
          </motion.div>
        </Element>
        <motion.div
          variants={text}
          className="text-sm md:text-xl my-4 md:my-8 !font-normal text-center  leading-[19px] md:leading-[27px] space-y-5"
        >
          <div>
            <p>We want only the best gaming experience for you!</p>
            <p>Enjoy our wide collection of game credits, vouchers, and gift cards.</p>
          </div>

          <div className="font-bold text-custom-taurus-forest-fern">
            <p>Purchase them with your Eplayment Wallet now!</p>
          </div>
        </motion.div>
        <motion.div
          variants={gamesGroup}
          initial="hidden"
          animate="visible"
          className="flex w-full flex-wrap justify-center"
        >
          {[...modalGames]
            .splice(0, 12)
            // .concat([...filteredVouchers].splice(0, 6))
            .map(({ name, slug, src }, i) => (
              <div key={name + slug} className="relative group">
                <motion.div
                  variants={game}
                  whileHover={{ scale: 1.1, zIndex: 50 }}
                  whileTap={{ scale: 0.9 }}
                  key={name}
                  className={cx(
                    i > 0 && 'relative  sm:ml-[-1.6em]',
                    'flex flex-col justify-center items-center',
                  )}
                >
                  <span className="py-2 bg-custom-wash-me rounded-md px-2  sm:ml-[-2em] invisible group-hover:visible opacity-0 group-hover:opacity-100 transform -translate-y-10 group-hover:-translate-y-11 whitespace-nowrap transition duration-300 border border-custom-medium-slate-blue border-opacity-5 shadow-sm text-custom-medium-slate-blue cursor-pointer absolute top-0">
                    {name}
                  </span>
                  <motion.img
                    loading="lazy"
                    draggable={false}
                    className="border-2 border-transparent group-hover:border-custom-taurus-forest-fern rounded-full w-[55px] h-[55px]"
                    animate={{ scale: 0.9 }}
                    whileHover={{ scale: 1.0 }}
                    width={100}
                    height={100}
                    src={src}
                    alt=""
                  />
                </motion.div>
              </div>
            ))}
          <motion.button
            onClick={() => setModalOpen(true)}
            variants={game}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={cx(
              ' sm:ml-[-1.6em] focus:outline-none relative rounded-full w-[55px] h-[55px] bg-custom-medium-slate-blue text-[13px] leading-tight font-bold text-white',
            )}
          >
            <p>+ 100 more</p>
          </motion.button>
        </motion.div>
      </motion.div>
      <motion.div
        variants={heroesVariant}
        style={{ y: scrollYReyna }}
        className={cx(
          css`
            width: clamp(152px, 50vw, 488px);
          `,
          'top-[-50px] lg:block hidden h-full right-[200px] absolute ',
        )}
      >
        <Image
          draggable={false}
          layout="fill"
          title="https://static.wikia.nocookie.net/valorant/images/4/41/Reyna_artwork.png/revision/latest/scale-to-width-down/587?cb=20200602020340"
          src="/redesign/images/hero2.png"
          alt="hero1"
        />
      </motion.div>
      <motion.div
        variants={heroesVariant}
        style={{ y: scrollYXiao }}
        className="w-max top-[99px] lg:block hidden right-0 absolute"
      >
        <Image
          title="https://www.citypng.com/photo/5392/hd-xiao-character-genshin-impact-png"
          draggable={false}
          width={539}
          height={355}
          src="/redesign/images/hero1.png"
          alt=""
        />
      </motion.div>
      <motion.div
        variants={heroesVariant}
        style={{ y: scrollYGranger }}
        className="w-max  bottom-[-43px] lg:block hidden right-0 absolute "
      >
        <Image
          title="https://www.uhdpaper.com/2020/08/granger-agent-z-mobile-legends-4k-52900.html"
          draggable={false}
          width={691}
          height={430}
          src="/redesign/images/hero3.png"
          alt=""
        />
      </motion.div>
      <EplaymentGamesModal open={modalOpen} setOpen={setModalOpen} />
    </motion.div>
  );
}
