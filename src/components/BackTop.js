import Context from 'context/Context';
import { useContext, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const BackTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const context = useContext(Context);

  const { changeBackTopColor } = context.state;

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      tabIndex={0}
      role="button"
      onClick={() => scrollToTop()}
      className={[
        'opacity-0',
        'cursor-pointer',
        isVisible && 'opacity-100',
        'fixed',
        'z-50',
        'duration-300',
        'bottom-5',
        'right-5',
      ].join(' ')}
    >
      <div
        style={{ boxShadow: '0px 4px 14px rgba(117, 98, 224, 0.2)' }}
        className={[
          'w-[60px] h-[60px] rounded-full grid place-items-center border-2 border-opacity-10',
          changeBackTopColor ? 'bg-custom-gentian-blue' : 'bg-custom-medium-slate-blue',
          'hover:bg-custom-taurus-forest-fern',
          'transition ease-in',
        ].join(' ')}
      >
        <svg
          className="stroke-current text-white max-w-[56px] max-h-[28px] w-1/3 h-full"
          width="100%"
          height="100%"
          viewBox="0 0 64 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 32L32 4L60 32"
            stroke="currentColor"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </motion.button>
  );
};

export default BackTop;
