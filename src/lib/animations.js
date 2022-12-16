/* eslint-disable import/prefer-default-export */
export const item = (inView) => ({
  visible: {
    opacity: inView ? 1 : 0,
    y: inView ? 0 : 100,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.3,
      duration: 0.8,
    },
  },
  hidden: { opacity: 0, y: 100 },
});
