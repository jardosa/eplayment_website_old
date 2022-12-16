import { useContext, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Context from 'context/Context';

const useNavbarHide = () => {
  const [ref, inView] = useInView({ threshold: 1 });
  const context = useContext(Context);
  const { removeNavShadow } = context;

  useEffect(() => {
    removeNavShadow(inView);
  }, [inView]);

  return [ref, inView];
};

export default useNavbarHide;
