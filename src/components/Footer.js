import { useContext, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import Context from 'context/Context';
import AppButton from './AppButton';

const Footer = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });
  const context = useContext(Context);

  useEffect(() => {
    context.changeBackTopColor(inView);
  }, [inView]);
  return (
    <div
      ref={ref}
      className="flex justify-center  max-w-[1920px] mx-auto bg-custom-medium-slate-blue "
    >
      <div className="w-[1440px] h-[528px]  my-10 grid grid-cols-1  gap-10 place-items-center">
        <div className="text-center text-white space-y-4 md:space-y-0 text-[14px] md:text-base flex flex-col md:flex-row justify-center font-black font-gotham-book md:gap-10 lg:gap-24">
          <Link href="/about">
            <a className="hover:text-custom-taurus-forest-fern duration-200 text-sm  sm:text-base  lg:text-xl text-white">
              ABOUT EPLAYMENT
            </a>
          </Link>
          <Link href="/faq">
            <a className="hover:text-custom-taurus-forest-fern duration-200 text-sm  sm:text-base  lg:text-xl text-white">
              HELP &amp; SUPPORT
            </a>
          </Link>
          <Link href="/legal/terms-and-conditions">
            <a className="hover:text-custom-taurus-forest-fern duration-200 text-sm  sm:text-base  lg:text-xl text-white">
              TERMS &amp; CONDITIONS
            </a>
          </Link>
          <Link href="/legal/privacy-notice">
            <a className="hover:text-custom-taurus-forest-fern duration-200 text-sm  sm:text-base  lg:text-xl text-white">
              PRIVACY NOTICE
            </a>
          </Link>
        </div>
        <img
          className="w-[184px] md:w-auto"
          src="/redesign/logos/ep_logo_footer.png"
          alt="Eplayment"
        />
        <div className="flex fill-current text-white  gap-3 md:gap-7 justify-center">
          <a className="hover:opacity-60 duration-200" href="https://www.facebook.com/eplayment">
            <Image width={40} height={41} src="/redesign/vectors/socialmedia/active_sm_1.svg" />
          </a>
          <a className="hover:opacity-60 duration-200" href="http://www.instagram.com/eplayment.ph">
            <Image width={40} height={41} src="/redesign/vectors/socialmedia/active_sm_3.svg" />
          </a>
          <a
            className="hover:opacity-60 duration-200"
            href="https://www.linkedin.com/company/eplayment-corp/"
          >
            <Image width={40} height={41} src="/redesign/vectors/socialmedia/active_sm_2.svg" />
          </a>
          <a className="hover:opacity-60 duration-200" href="http://www.twitter.com/eplayment">
            <Image width={40} height={41} src="/redesign/vectors/socialmedia/active_sm_4.svg" />
          </a>
          <a className="hover:opacity-60 duration-200" href="http://www.tiktok.com/@eplayment">
            <Image width={40} height={41} src="/redesign/vectors/socialmedia/active_sm_5.svg" />
          </a>
        </div>
        <div className="text-center mx-4  md:m-0 text-[12px] md:text-base">
          <p className="font-gotham-book m-0 font-medium  md:leading-6 text-white">
            Copyright © Eplayment 2021. All Rights Reserved.
          </p>
          <p className="font-gotham-book m-0 font-medium  md:leading-6 text-white">
            Eplayment is registered under the Bangko Sentral ng Pilipinas.
          </p>
        </div>
        <div className="flex space-x-[21px] mx-5">
          <AppButton os="android" location="footer" />
          <AppButton os="ios" location="footer" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
