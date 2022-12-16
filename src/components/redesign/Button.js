/* eslint-disable react/button-has-type */
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { forwardRef } from 'react';

const Button = forwardRef(({ onClick, title, className, isOutline, type, disabled }, ref) => {
  return (
    <motion.button
      ref={ref}
      disabled={disabled}
      whileHover={{ scale: !disabled ? 1.05 : 1 }}
      whileTap={{ scale: !disabled ? 0.95 : 1 }}
      type={type}
      className={[
        'h-[65px]',
        isOutline &&
          'border-custom-medium-slate-blue text-custom-medium-slate-blue border-2  hover:bg-custom-cyber-lavender',
        !isOutline && 'bg-custom-medium-slate-blue text-white hover:bg-custom-gentian-blue',
        !disabled && 'duration-200',
        'px-5 md:px-10',
        'text-lg',
        'leading-none',

        'font-bold',
        'rounded-xl',
        'uppercase',
        className,
      ].join(' ')}
      onClick={onClick}
    >
      {title}
    </motion.button>
  );
});

Button.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  title: PropTypes.string,
  isOutline: PropTypes.bool,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  type: 'button',
  className: '',
  onClick: () => undefined,
  title: 'Button',
  isOutline: false,
  disabled: false,
};

export default Button;
