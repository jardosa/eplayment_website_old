import ImageGalleryModal from 'components/ImageGalleryModal';
import { organizeEventImages } from 'constants/image-data';
import { useState } from 'react';
import Image from 'next/image';
import Headers from '../Headers';

const OrganizeEvent = () => {
  const [openGallery, setOpenGallery] = useState(false);
  const [imgIndex, setImgIndex] = useState(0);

  const headers = {
    prev: { title: 'PITCH YOUR PROJECT', link: '/services/entertainment/pitch-your-project' },
    current: { title: 'ORGANIZE YOUR EVENT' },
    next: { title: 'RENT OUR STUDIO', link: '/services/entertainment/rent-our-studio' },
  };

  const thumbnailImages = [
    '/redesign/images/services/entertainment/organize-event/organize-your-event-thumb-1.png',
    '/redesign/images/services/entertainment/organize-event/organize-your-event-thumb-2.png',
    '/redesign/images/services/entertainment/organize-event/organize-your-event-thumb-3.png',
    '/redesign/images/services/entertainment/organize-event/organize-your-event-thumb-4.png',
  ];

  return (
    <>
      <div className="my-10 lg:my-20 px-3">
        <Headers {...headers} />

        <p className="max-w-[760px] mx-auto my-10 md:my-20 text-center text-base sm:text-lg md:text-xl lg:text-2xl text-custom-floppy-disk">
          Use our 18-sqm studio and 37-sqm office for your streaming, filming, photography, and
          recording projects
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-[27px] gap-y-10">
          {thumbnailImages.map((src, i) => (
            <button
              type="button"
              onClick={() => {
                setImgIndex(i);
                setOpenGallery(true);
              }}
              className=""
            >
              <Image
                width={409}
                height={260}
                objectFit="fill"
                className="rounded-lg"
                src={src}
                alt=""
              />
            </button>
          ))}
        </div>
      </div>
      <ImageGalleryModal
        open={openGallery}
        setOpen={setOpenGallery}
        imgIndex={imgIndex}
        images={organizeEventImages}
        imgLayout="object-contain"
      />
    </>
  );
};

export default OrganizeEvent;
