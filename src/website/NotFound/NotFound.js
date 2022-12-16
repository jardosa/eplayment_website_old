import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ScreenMessageLayout from 'components/ScreenMessageLayout';

const NotFound = () => {
  return (
    <ScreenMessageLayout>
      <div className=" w-full h-48 relative my-4 lg:my-20">
        <Image src="/404/404.png" width={883} height={373} layout="fill" objectFit="contain" />
      </div>
      <div className="font-bold text-3xl sm:text-5xl text-custom-floppy-disk">Ooops!</div>
      <div className="font-semibold text-base sm:text-xl text-custom-floppy-disk py-4 text-center">
        You must have been looking for something strange to find this page.
      </div>
      <Link href="/">
        <a className="my-10">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            type="button"
            className="w-[260px] transition text-lg font-bold h-[67px] hover:bg-custom-taurus-forest-fern bg-custom-medium-slate-blue text-white rounded-lg"
          >
            GO BACK
          </motion.button>
        </a>
      </Link>
    </ScreenMessageLayout>
  );
};

export default NotFound;
