import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // For window scrolling (default)
    window.scrollTo(0, 0);

    // For a scrollable div 
    const appDiv = document.querySelector('.App');
    if (appDiv) appDiv.scrollTop = 0;
  }, [pathname]);

  return null;
};


export default ScrollToTop;
