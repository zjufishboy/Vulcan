import { isPC } from '@/utils/env';
import { useEffect } from 'react';

export const useMobile = () => {
  useEffect(() => {
    if (!isPC) {
      document.documentElement.style.setProperty('--doc-height', window.innerHeight + 'px');
    }
  }, []);
};
