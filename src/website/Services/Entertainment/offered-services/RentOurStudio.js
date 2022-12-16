import ImageGalleryModal from 'components/ImageGalleryModal';
import { rentOurStudioImages } from 'constants/image-data';
import { useState } from 'react';
import Image from 'next/image';
import Headers from '../Headers';

const RentOurStudio = () => {
  const [openGallery, setOpenGallery] = useState(false);
  const [imgIndex, setImgIndex] = useState(0);
  const headers = {
    prev: { title: 'PITCH YOUR PROJECT', link: '/services/entertainment/pitch-your-project' },
    current: { title: 'RENT OUR STUDIO' },
    next: { title: 'ORGANIZE YOUR EVENT', link: '/services/entertainment/organize-your-event' },
  };

  const thumbnailImages = [
    '/redesign/images/services/entertainment/rent-our-studio/eplayment-studio-1.png',
    '/redesign/images/services/entertainment/rent-our-studio/eplayment-studio-2.png',
    '/redesign/images/services/entertainment/rent-our-studio/eplayment-studio-3.png',
    '/redesign/images/services/entertainment/rent-our-studio/eplayment-studio-4.png',
    '/redesign/images/services/entertainment/rent-our-studio/eplayment-studio-5.png',
    '/redesign/images/services/entertainment/rent-our-studio/eplayment-studio-6.png',
    '/redesign/images/services/entertainment/rent-our-studio/eplayment-studio-7.png',
    '/redesign/images/services/entertainment/rent-our-studio/eplayment-studio-8.png',
    '/redesign/images/services/entertainment/rent-our-studio/eplayment-studio-9.png',
    '/redesign/images/services/entertainment/rent-our-studio/eplayment-studio-10.png',
    '/redesign/images/services/entertainment/rent-our-studio/eplayment-studio-11.png',
    '/redesign/images/services/entertainment/rent-our-studio/eplayment-studio-12.png',
    '/redesign/images/services/entertainment/rent-our-studio/eplayment-studio-13.png',
    '/redesign/images/services/entertainment/rent-our-studio/eplayment-studio-14.png',
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
        images={rentOurStudioImages}
        imgLayout="object-cover"
      />
    </>
  );
};

export default RentOurStudio;
