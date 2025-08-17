import { useEffect, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollHandler = () => {
  const { pathname, hash } = useLocation();

  // Use useLayoutEffect for scrolling to ensure it happens before paint
  useLayoutEffect(() => {
    if (hash) {
      let element = document.getElementById(hash.slice(1));

      if (element) {
        element = (element.children[0] as HTMLElement);
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
    }
    // Scroll to top if no hash
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [pathname, hash]);

  return null;
};
export default ScrollHandler;