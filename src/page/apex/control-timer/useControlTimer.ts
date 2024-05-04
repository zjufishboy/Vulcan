import { useEffect, useState } from 'react';

const timeFrom = 1714834800000 - 45 * 60 * 1000;

export const useControlTimer = () => {
  const [tick, setTick] = useState(() => Date.now());

  useEffect(() => {
    const timer = setInterval(() => {
      const newDate = Date.now();
      setTick(newDate);
    }, 500);
    return () => {
      clearInterval(timer);
    };
  });

  const tickToNext = 45 * 60 * 1000 - ((tick - timeFrom) % (45 * 60 * 1000));

  return { tickToNext, tick };
};
