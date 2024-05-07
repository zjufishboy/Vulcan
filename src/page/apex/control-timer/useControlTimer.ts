import { useEffect, useState } from 'react';

const timeFrom = 1715105700000 - 60 * 60 * 1000;

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

  const tickToNext = 60 * 60 * 1000 - ((tick - timeFrom) % (60 * 60 * 1000));

  return { tickToNext, tick };
};
