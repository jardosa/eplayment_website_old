import PropTypes from 'prop-types';

const Container = ({ children }) => {
  return (
    <div
      style={{ clipPath: 'polygon(0 0, 90% 0, 100% 10%, 100% 100%, 10% 100%, 0 90%)' }}
      className="relative bg-custom-medium-slate-blue h-full w-[280px] sm:min-w-[371px] p-[1px] min-h-[233px] grid place-items-center"
    >
      <div
        style={{ clipPath: 'polygon(0 0, 90% 0, 100% 10%, 100% 100%, 10% 100%, 0 90%)' }}
        className="w-full h-full relative flex justify-center bg-white"
      >
        <img
          className="w-1/2 h-[3px] top-0 absolute "
          src="/redesign/vectors/irregular-vector.png"
          alt=""
        />
        <img
          className="w-1/2 h-[3px] bottom-0 transform rotate-180 absolute "
          src="/redesign/vectors/irregular-vector.png"
          alt=""
        />
        {children}
      </div>
      {/* <svg
        className="absolute top-0 left-0 "
        width="100%"
        height="100%"
        viewBox="0 0 371 233"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M349.59 1H1V213.356L22.4414 232H369.5V18.3119L349.59 1Z"
          fill="fillCurrent"
          stroke="#7562E0"
          strokeWidth="1.5"
        />
        <path d="M63.7614 4L303.239 4L307 1L60 1L63.7614 4Z" fill="#7562E0" />
        <path d="M303.239 229L63.7614 229L60 232L307 232L303.239 229Z" fill="#7562E0" />
      </svg> */}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
