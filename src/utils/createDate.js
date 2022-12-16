import { format } from 'date-fns';

const createDate = () => {
  return format(new Date(), 'd MMMM yyyy | h:mm:ss a');
};

export default createDate;
