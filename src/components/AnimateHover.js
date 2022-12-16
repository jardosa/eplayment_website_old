import { animated, useSpring, config } from '@react-spring/web';
import PropTypes from 'prop-types';

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1];
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const AnimateHover = ({ children }) => {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config,
  }));

  return (
    <animated.div
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set.start({ xys: [0, 0, 1] })}
      style={{
        // eslint-disable-next-line react/prop-types
        transform: props.xys.to(trans),
      }}
    >
      {children}
    </animated.div>
  );
};

AnimateHover.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AnimateHover;
