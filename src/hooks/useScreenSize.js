import { useState, useEffect } from 'react';

// Custom hook for responsive design
function useScreenSize(breakpoint = 640) {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [windowSize, setWindowSize] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= breakpoint);
      setWindowSize(window.innerWidth);
    };

    handleResize(); // Set initial value

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [breakpoint, windowSize]); // Depend on breakpoint to re-initialize if it changes
  return { isSmallScreen, windowSize };
}

export default useScreenSize;
