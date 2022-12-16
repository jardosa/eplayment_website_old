import { css, cx } from '@emotion/css';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import Flicking from '@egjs/react-flicking';
import { AutoPlay } from '@egjs/flicking-plugins';
import { useRef, useState } from 'react';
import {
  eplaymentImages,
  esportsImages,
  ligaAdarnaImages,
} from 'constants/entertainmentAlbumImages';
import ImageGalleryModal from 'components/ImageGalleryModal';
import { useRouter } from 'next/router';

export default function Portfolio() {
  const router = useRouter();
  const [album, setAlbum] = useState('liga-adarna');
  const [openGallery, setOpenGallery] = useState(false);
  const [imgIndex, setImgIndex] = useState(0);
  const flickingRef = useRef(null);
  const [externalButton, setExternalButton] = useState({
    name: 'Liga Adarna',
    link: 'https://www.ligaadarna.com/',
  });

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

  const cards = {
    'liga-adarna': ['Liga Adarna', 'All Female Sports League', 'https://www.ligaadarna.com'],
    esports: ['Esports News PH', 'News Site for Everything Esports', 'https://www.esportsph.com/'],
    eplayment: [
      'Eplayment Gaming',
      'Streamed Content on our Facebook Page',
      'https://www.facebook.com/Eplayment/videos/?ref=page_internal',
    ],
  };

  const albums = {
    'liga-adarna': ligaAdarnaImages,
    esports: esportsImages,
    eplayment: eplaymentImages,
  };

  const item = {
    visible: {
      opacity: inView ? 1 : 0,
      x: inView ? 0 : -100,
    },
    hidden: {
      opacity: 0,
      x: -100,
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={container}
      animate="visible"
      initial="hidden"
      className="bg-custom-wash-me w-full py-[50px] flex flex-col space-y-[40px]  justify-center items-center"
    >
      <div className="w-full">
        <div
          style={{
            textShadow:
              '-1px -1px 0 #7562E0, 1px -1px 0 #7562E0, -1px 1px 0 #7562E0, 1px 1px 0 #7562E0',
          }}
          className={cx(
            css`
              font-size: clamp(40px, 5vw, 80px);
            `,
            'text-white  mb-[28px] leading-none font-bold text-center',
          )}
        >
          PORTFOLIO
        </div>
        <div className="flex flex-wrap w-full px-5 justify-center gap-10">
          {Object.keys(cards).map((key) => {
            const [title, desc, link] = cards[key];
            return (
              <motion.button
                key={title}
                type="button"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  setAlbum(key);
                  setExternalButton({
                    link,
                    name: title,
                  });
                  flickingRef?.current.focus();
                }}
                variants={item}
                className={[
                  'max-w-[260px]  w-full transform',
                  album === key && '!scale-110',
                  'hover:scale-110',
                  'border-2',
                  'duration-100',
                  album === key ? 'border-custom-taurus-forest-fern' : 'border-transparent',
                  'w-full',
                  'flex flex-col justify-center items-center',
                  'text-center',
                  'rounded-[31px]',
                  'p-2',
                ].join(' ')}
                style={{ boxShadow: '0px 4px 16px 0px #7562E01A' }}
              >
                <img draggable={false} src={`/redesign/icons/portfolio/${key}.png`} alt="" />
                <p className="text-custom-floppy-disk text-lg font-bold text-">{title}</p>
                <p className="text-base mx-5">{desc}</p>
              </motion.button>
            );
          })}
        </div>
      </div>
      <motion.div
        ref={flickingRef}
        tabIndex={0}
        variants={container}
        animate="visible"
        initial="hidden"
      >
        <Flicking
          plugins={[new AutoPlay({ duration: 1500, direction: 'NEXT', stopOnHover: true })]}
          autoInit
          autoResize
          align="center"
        >
          {albums[album].map((src, i) => (
            <button
              key={src}
              type="button"
              className="mx-4 flicking-panel max-w-[300px] sm:max-w-[425px] "
              onClick={() => {
                setOpenGallery(true);
                setImgIndex(i);
              }}
            >
              <Image
                width={425}
                height={233}
                draggable={false}
                className=" rounded-md border-4 border-transparent hover:border-custom-taurus-forest-fern  transition-all object-cover"
                src={src}
                alt=""
              />
            </button>
          ))}
        </Flicking>
      </motion.div>
      <div>
        <motion.button
          onClick={() => router.push(externalButton.link)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="px-[30px] uppercase font-bold text-lg w-full h-[67px] rounded-lg bg-custom-medium-slate-blue text-white hover:bg-custom-taurus-forest-fern transition"
        >
          {`VISIT ${externalButton.name}`}
        </motion.button>
      </div>

      <div className="w-full space-y-8 pt-[80px]  px-5">
        <div
          className={cx(
            css`
              font-size: clamp(20px, 5vw, 28px);
              line-height: clamp(26px, 5vw, 34px);
            `,
            'font-bold max-w-[826px] px-5 mx-auto text-[28px] leading-10 text-center text-custom-floppy-disk',
          )}
        >
          We’ve had the privilege of working with brands who love gaming just as much!
        </div>
        <div className="w-full justify-center flex flex-wrap mx-auto">
          {[...Array(8).keys()].map((key) => (
            <motion.div variants={item}>
              <Image
                draggable={false}
                width={103}
                height={103}
                src={`/redesign/icons/sponsors/sponsor${key + 1}.png`}
              />
            </motion.div>
          ))}
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center text-center pt-[80px] px-5 space-y-8">
        <div
          className={cx(
            css`
              font-size: clamp(20px, 5vw, 28px);
              line-height: clamp(26px, 5vw, 34px);
            `,
            'text-custom-medium-slate-blue font-bold  leading-10',
          )}
        >
          We produce events and content on games we love.
        </div>
        <div className="justify-center grid grid-cols-4 place-items-center">
          {[...Array(8).keys()].map((key) => (
            <motion.div variants={item}>
              <Image
                width={157}
                height={157}
                src={`/redesign/icons/games-we-love/game${key + 1}.png`}
                alt=""
              />
            </motion.div>
          ))}
        </div>
      </div>
      <ImageGalleryModal
        imgIndex={imgIndex}
        open={openGallery}
        imgLayout="object-cover"
        setOpen={setOpenGallery}
        images={albums[album]}
      />
    </motion.div>
  );
}
