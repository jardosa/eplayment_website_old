const convertToPeso = (num = 0) => {
  if (typeof num !== 'number') throw Error('Argument should be of type number');

  return new Intl.NumberFormat('ph-PH', {
    style: 'currency',
    currency: 'PHP',
  }).format(num);
};

export default convertToPeso;

export const addCommas = (num = 0) => {
  if (typeof num !== 'number') throw Error('Argument should be of type number');

  return new Intl.NumberFormat().format(num.toFixed(2));
};
