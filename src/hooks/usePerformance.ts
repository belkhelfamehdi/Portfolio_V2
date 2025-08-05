// Performance utility for optimizing animations
import { useCallback, useRef } from 'react';

export const useThrottledCallback = <T extends unknown[]>(
  callback: (...args: T) => void, 
  delay: number
) => {
  const lastCall = useRef(0);
  
  return useCallback((...args: T) => {
    const now = Date.now();
    if (now - lastCall.current >= delay) {
      lastCall.current = now;
      callback(...args);
    }
  }, [callback, delay]);
};

export const useDebounce = <T extends unknown[]>(
  callback: (...args: T) => void, 
  delay: number
) => {
  const timeoutRef = useRef<number | undefined>(undefined);
  
  return useCallback((...args: T) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => callback(...args), delay);
  }, [callback, delay]);
};
