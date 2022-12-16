import Image from 'next/image';
import PropTypes from 'prop-types';

const ScreenMessageLayout = ({ children }) => {
  return (
    <div className="relative px-4 bg-grid ">
      <div className="py-2 sm:py-8 flex  flex-col items-center justify-center relative">
        <div className=" w-36 sm:w-52 h-10  lg:h-11 lg:w-80 absolute top-3 pt-8 lg:pt-12">
          <Image src="/404/Logos.png" priority layout="fill" objectFit="contain" />
        </div>
        <div className=" w-full h-12 my-8 relative">
          <Image src="/404/toplines.png" width={1424} height={37} objectFit="contain" />
        </div>
        {children}
        <div className=" my-8">
          <Image src="/404/bottomlines.png" width={1424} height={37} />
        </div>
      </div>
    </div>
  );
};

ScreenMessageLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ScreenMessageLayout;
