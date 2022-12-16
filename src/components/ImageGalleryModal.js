import { useRef } from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { Dialog } from '@headlessui/react';
import Flicking, { ViewportSlot } from '@egjs/react-flicking';
import { Arrow } from '@egjs/flicking-plugins';
import '@egjs/flicking-plugins/dist/arrow.css';

const ImageGalleryModal = ({ open, setOpen, imgIndex, images, imgLayout }) => {
  const initialRef = useRef(null);

  const plugins = [new Arrow()];

  return (
    <Dialog
      initialFocus={initialRef}
      open={open}
      onClose={() => {
        setOpen(false);
      }}
      style={{ backdropFilter: 'blur(2px)' }}
      className="fixed z-50 inset-0 overflow-y-auto"
    >
      <Dialog.Overlay className="fixed inset-0 bg-black opacity-60" />

      <div className="min-h-screen px-4 text-center">
        {/* Button only created to avoid focustrap issues */}
        <button type="button" className="inline-block h-screen align-middle" aria-hidden="true">
          &#8203;
        </button>
        <motion.div
          tabIndex={0}
          ref={initialRef}
          animate={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0 }}
          className="inline-block w-full lg:max-w-[871px] focus:outline-none h-full max-h-[554px]  overflow-hidden text-left align-middle transition-all transform"
        >
          <Flicking plugins={plugins} panelsPerView={1} defaultIndex={imgIndex} moveType="snap">
            {images.map((src) => (
              <img
                key={src}
                draggable={false}
                className={[imgLayout, 'flicking-panel', 'max-w-[871px], max-h-[454px]'].join(' ')}
                src={src}
                alt=""
              />
            ))}
            <ViewportSlot>
              <span className="flicking-arrow-prev before:!bg-white before:transition after:transition hover:before:!bg-custom-taurus-forest-fern hover:after:!bg-custom-taurus-forest-fern after:!bg-white" />
              <span className="flicking-arrow-next before:!bg-white before:transition after:transition hover:before:!bg-custom-taurus-forest-fern hover:after:!bg-custom-taurus-forest-fern after:!bg-white" />
            </ViewportSlot>
          </Flicking>
        </motion.div>
      </div>
    </Dialog>
  );
};

export default ImageGalleryModal;

ImageGalleryModal.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  imgIndex: PropTypes.number.isRequired,
  images: PropTypes.array.isRequired,
  imgLayout: PropTypes.oneOf(['object-cover', 'object-fill', 'object-contain']).isRequired,
};
