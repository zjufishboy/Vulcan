import { useRef } from 'react';

const DEBOUNCE_DURATION = 1000;

const useDebounce = (fn: () => void) => {
  const timerRef = useRef<number>();

  return () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = window.setTimeout(() => {
      fn();
    }, DEBOUNCE_DURATION);
  };
};
