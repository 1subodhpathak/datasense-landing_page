// src/hooks/useIntersectionObserver.ts
import { useEffect, useRef } from 'react';

export const useIntersectionObserver = (callback: (isVisible: boolean) => void) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        callback(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [callback]);

  return elementRef;
};