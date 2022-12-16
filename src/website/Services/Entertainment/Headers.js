import Link from 'next/link';
import { CgChevronLeft, CgChevronRight } from 'react-icons/cg';
import PropTypes from 'prop-types';

const Headers = ({
  prev = { title: '', link: '' },
  current = { title: '' },
  next = { title: '', link: '' },
}) => {
  return (
    <>
      <span className="block lg:hidden my-10 text-custom-taurus-forest-fern text-center font-bold text-[32px] md:text-[40px] lg:text-[60px] leading-none">
        {current.title}
      </span>
      <div className="flex justify-between items-end">
        <Link href={prev.link}>
          <a className="text-custom-medium-slate-blue font-bold text-sm sm:text-base md:text-lg lg:text-xl group  flex items-end">
            <CgChevronLeft className="w-[24px] h-[24px] group-hover:text-custom-taurus-forest-fern self-center transition" />
            <div className="group-hover:text-custom-taurus-forest-fern transition">
              {prev.title}
            </div>
          </a>
        </Link>

        <div className="hidden lg:block text-custom-taurus-forest-fern font-bold text-[28px] sm:text-[36px] md:text-[40px] lg:text-[60px] leading-none">
          {current.title}
        </div>

        <Link href={next.link}>
          <a className="text-custom-medium-slate-blue text-right font-bold group flex items-end text-sm sm:text-base md:text-lg lg:text-xl">
            <div className=" group-hover:text-custom-taurus-forest-fern transition">
              {next.title}
            </div>
            <CgChevronRight className="w-[24px] h-[24px] group-hover:text-custom-taurus-forest-fern self-center transition" />
          </a>
        </Link>
      </div>
    </>
  );
};

Headers.propTypes = {
  prev: PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
  current: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
  next: PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
};

export default Headers;
