import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useScrollEffect = () => {
  const location = useLocation();

  useEffect(() => {
    // Check if there's a stored scroll target
    const scrollTarget = sessionStorage.getItem('scrollTarget');
    if (scrollTarget && location.pathname === '/') {
      // Small timeout to ensure the DOM is ready
      setTimeout(() => {
        const element = document.getElementById(scrollTarget);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          window.history.pushState({}, '', `/#${scrollTarget}`);
        }
        // Clear the stored target
        sessionStorage.removeItem('scrollTarget');
      }, 100);
    }
  }, [location]);
};