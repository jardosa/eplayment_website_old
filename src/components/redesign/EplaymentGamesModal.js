import { Dialog } from '@headlessui/react';
import PropTypes from 'prop-types';
import modalGames from 'constants/modalGames';
import Image from 'next/image';
import { CgClose } from 'react-icons/cg';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import Button from './Button';

const EplaymentGamesModal = ({ open, setOpen }) => {
  const router = useRouter();
  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      className="fixed z-50 inset-0 overflow-y-auto"
    >
      <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />

      <div className="min-h-screen px-4 text-center">
        <span className="inline-block h-screen align-middle" aria-hidden="true">
          &#8203;
        </span>
        <motion.div
          animate={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0 }}
          className="inline-block w-full max-w-[980px] min-h-[663px]  py-8  overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-sm relative"
        >
          <Dialog.Title className="flex flex-wrap justify-center gap-3 items-center">
            <svg
              width="162"
              height="16"
              viewBox="0 0 162 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M29.0657 0.00278856H16.3555V15.2876H19.4189V10.3398H29.0622C29.6031 10.3511 30.138 10.2065 30.6194 9.91879C31.1008 9.63105 31.5137 9.20909 31.8214 8.69046C32.4778 7.68198 32.8197 6.44286 32.7907 5.17746C32.815 3.90523 32.4739 2.66001 31.8214 1.63972C31.5135 1.12317 31.1008 0.703407 30.62 0.417805C30.1392 0.132204 29.6052 -0.0103752 29.0657 0.00278856ZM29.0657 6.75254H19.4225V3.5694H29.0657C29.5114 3.5694 29.7308 4.10129 29.7308 5.17334C29.7308 6.24538 29.5114 6.75254 29.0657 6.75254Z"
                fill="#8232C9"
              />
              <path
                d="M62.6554 0.0026524H53.978C53.472 -0.0144592 52.9692 0.102012 52.5074 0.343353C52.0455 0.584694 51.6364 0.944658 51.3107 1.39631C50.6237 2.31604 50.2543 3.50041 50.2742 4.71964V15.2875H53.3377V4.72377C53.3377 3.95684 53.5499 3.56927 53.978 3.56927H62.6554C63.0976 3.56927 63.3205 3.95685 63.3205 4.72789V6.87197H55.2691V10.4386H63.3346V15.2875H66.3946V4.71964C66.4158 3.50089 66.0476 2.31645 65.3616 1.39631C65.0306 0.940171 64.615 0.577693 64.1462 0.336256C63.6774 0.0948202 63.1676 -0.0192591 62.6554 0.0026524Z"
                fill="#8232C9"
              />
              <path
                d="M81.7464 4.72768C81.7464 5.48224 81.5341 5.86157 81.1096 5.86157H72.4321C72.0076 5.86157 71.7918 5.48224 71.7918 4.72768V0.00244141H68.7319V4.72768C68.7047 5.92975 69.0687 7.09931 69.7507 8.00154C70.0758 8.4605 70.486 8.82739 70.9505 9.07452C71.415 9.32166 71.9217 9.44259 72.4321 9.42817H75.2621V15.2873H78.3291V9.42817H81.0954C81.6093 9.44067 82.119 9.31903 82.5872 9.07218C83.0555 8.82533 83.4704 8.45952 83.8016 8.00154C84.469 7.09112 84.8231 5.92471 84.7957 4.72768V0.00244141H81.7322L81.7464 4.72768Z"
                fill="#8232C9"
              />
              <path
                d="M146.465 0.00244141V3.56905H152.387V15.2873H155.45V3.56905H161.372V0.00244141H146.465Z"
                fill="#8232C9"
              />
              <path
                d="M38.6166 12.6154V0.00244141H34.7891V13.5225C34.7884 13.9644 34.9296 14.3905 35.1849 14.7171C35.4402 15.0437 35.7912 15.2471 36.1687 15.2873H47.9344V12.6154H38.6166Z"
                fill="#8232C9"
              />
              <path
                d="M0 13.5021C0 13.9756 0.161376 14.4297 0.448632 14.7645C0.735889 15.0994 1.12549 15.2875 1.53173 15.2875H13.9908V11.7208H3.06347V9.42832H14.012V5.84521H0V13.5021Z"
                fill="#8232C9"
              />
              <path d="M0 0.00244141V3.56905H3.06347H14.012V0.00244141H0Z" fill="#23D527" />
              <path
                d="M111.371 13.5021C111.371 13.7364 111.41 13.9684 111.486 14.185C111.563 14.4016 111.675 14.5984 111.817 14.7643C111.959 14.9301 112.128 15.0617 112.314 15.1515C112.499 15.2412 112.698 15.2875 112.899 15.2875H125.358V11.7208H114.435V9.42832H125.358V5.84521H111.371V13.5021Z"
                fill="#8232C9"
              />
              <path
                d="M111.371 0.00244141V3.56905H114.435H125.383V0.00244141H111.371Z"
                fill="#8232C9"
              />
              <path
                d="M143.235 1.39643C142.906 0.941908 142.494 0.580275 142.028 0.338844C141.562 0.0974124 141.055 -0.017507 140.546 0.00277358H131.865C131.36 -0.014315 130.857 0.102189 130.396 0.34355C129.935 0.584911 129.526 0.944868 129.201 1.39643C128.514 2.31616 128.145 3.50053 128.165 4.71976V15.2876H131.228V4.72389C131.228 3.95697 131.444 3.56939 131.865 3.56939H140.546C140.988 3.56939 141.211 3.95697 141.211 4.72802V15.2876H144.275V4.71976C144.295 3.49972 143.924 2.31474 143.235 1.39643Z"
                fill="#8232C9"
              />
              <path
                d="M107.706 1.39637C107.377 0.941994 106.964 0.580526 106.498 0.339136C106.031 0.0977455 105.524 -0.0172842 105.014 0.00271297H100.171C99.3895 -0.0241631 98.6239 0.267442 98.0065 0.827361C97.3816 0.265974 96.6089 -0.0254628 95.8203 0.00271297H90.9704C90.4645 -0.014097 89.9618 0.102522 89.5 0.343842C89.0381 0.585162 88.629 0.944951 88.3031 1.39637C87.6195 2.31812 87.2517 3.50147 87.2702 4.7197V15.2876H90.3337V4.72383C90.3337 3.95691 90.5459 3.56933 90.9704 3.56933H95.8203C96.2448 3.56933 96.4571 3.93629 96.4747 4.64549C96.4747 4.67023 96.4747 4.69084 96.4747 4.7197V15.2876H99.5488V4.7197C99.5488 4.7197 99.5488 4.68259 99.5488 4.65786C99.5488 3.94041 99.7682 3.56933 100.179 3.56933H105.021C105.467 3.56933 105.686 3.95691 105.686 4.72796V15.2876H108.75V4.7197C108.769 3.49905 108.397 2.31386 107.706 1.39637Z"
                fill="#8232C9"
              />
            </svg>

            <span className="text-custom-floppy-disk font-bold text-xl">GAME CREDITS</span>
          </Dialog.Title>
          <CgClose
            tabIndex={0}
            onClick={() => setOpen(false)}
            className="absolute focus:outline-none cursor-pointer top-[2%] right-[1.5%] w-5 h-5 fill-current hover:text-custom-taurus-forest-fern transition"
          />
          <Dialog.Description as="div" className="w-full  sm:px-[60px] my-8  space-y-8">
            <div className="flex flex-wrap justify-center max-h-[440px] overflow-y-scroll gap-5">
              {modalGames.map(({ name, src }) => (
                <div
                  key={name + src}
                  className="min-w-[90px] min-h-[90px] transform group relative transition-all"
                >
                  <Image
                    width={90}
                    height={90}
                    className="max-w-[90px]   rounded-xl"
                    src={`${src}`}
                    alt=""
                  />
                  <div
                    className={[
                      'bg-custom-wash-me',
                      'transform',
                      'filter group-hover:backdrop-blur-sm font-semibold',
                      'transition-all duration-200',
                      'text-custom-medium-slate-blue text-xs',
                      'rounded-md',
                      'z-[100] absolute top-0 left-0',
                      'w-full h-full',
                      'p-1',
                      'bg-opacity-0 group-hover:bg-opacity-50 grid',
                      'place-items-center',
                      'text-center',
                    ].join(' ')}
                  >
                    <span className="opacity-0 transition group-hover:opacity-100">{name}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mx-auto w-max">
              <Button
                onClick={() => router.push('https://app.eplayment.com/game-credits')}
                title="BUY GAME CREDITS"
              />
            </div>
          </Dialog.Description>
        </motion.div>
      </div>
    </Dialog>
  );
};

export default EplaymentGamesModal;

EplaymentGamesModal.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};
