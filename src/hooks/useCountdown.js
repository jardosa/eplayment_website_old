import { useEffect, useState } from 'react';

const useCountdown = (date) => {
  const [countDown, setCountDown] = useState('');
  const [released, setReleased] = useState(false);

  useEffect(() => {
    const countDownDate = new Date(date).getTime();
    const counter = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setCountDown(`${days}/${hours}/${minutes}/${seconds} `);

      if (distance < 0) {
        clearInterval(counter);
        setReleased(true);
      }
    });

    return () => {
      setCountDown('');
    };
  }, []);

  return [countDown, released];
};

export default useCountdown;
