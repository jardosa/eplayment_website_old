import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';

const OutsideClickListener = ({ children, containerStyle, onClick, listenInside }) => {
  const ref = useRef();

  const globalClickHandler = (nativeEvent) => {
    if (ref.current?.contains(nativeEvent.target) && !listenInside) return;
    onClick(nativeEvent);
  };

  useEffect(() => {
    document.addEventListener('click', globalClickHandler);
    return () => {
      document.removeEventListener('click', globalClickHandler);
    };
  }, []);
  return (
    <div ref={ref} className={containerStyle}>
      {children}
    </div>
  );
};

export default OutsideClickListener;

OutsideClickListener.propTypes = {
  children: PropTypes.node.isRequired,
  listenInside: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  containerStyle: PropTypes.string,
};

OutsideClickListener.defaultProps = {
  listenInside: false,
  containerStyle: '',
};
