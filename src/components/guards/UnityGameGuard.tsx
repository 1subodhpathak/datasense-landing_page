import React from 'react';
import { useLocation } from 'react-router-dom';

const UnityGameGuard: React.FC = () => {
  const location = useLocation();

  // If we're on the unity games route, hide nav & footer via CSS
  if (location.pathname === '/unity-games') {
    // Add a class to hide nav and footer
    document.body.classList.add('unity-game-active');
  } else {
    document.body.classList.remove('unity-game-active');
  }

  return null;
};

export default UnityGameGuard;