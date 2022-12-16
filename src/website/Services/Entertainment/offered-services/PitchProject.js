import ImageGalleryModal from 'components/ImageGalleryModal';
import { pitchYourProjectImages } from 'constants/image-data';
import { useState } from 'react';
import Image from 'next/image';
import Headers from '../Headers';

const PitchProject = () => {
  const [openGallery, setOpenGallery] = useState(false);
  const [imgIndex, setImgIndex] = useState(0);

  const headers = {
    prev: { title: 'RENT OUR STUDIO', link: '/services/entertainment/rent-our-studio' },
    current: { title: 'PITCH YOUR PROJECT' },
    next: { title: 'ORGANIZE YOUR EVENT', link: '/services/entertainment/organize-your-event' },
  };

  const thumbnailImages = [
    '/redesign/images/services/entertainment/pitch-your-project/pitch-your-project-thumb-1.png',
    '/redesign/images/services/entertainment/pitch-your-project/pitch-your-project-thumb-2.png',
    '/redesign/images/services/entertainment/pitch-your-project/pitch-your-project-thumb-4.png',
    '/redesign/images/services/entertainment/pitch-your-project/pitch-your-project-thumb-5.png',
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
              key={src}
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
        images={pitchYourProjectImages}
        imgLayout="object-contain"
      />
    </>
  );
};

export default PitchProject;
