import { useEffect, useState } from 'react';

export default function useWindowSize() {
  const [size, setSize] = useState([0, 0]);

  useEffect(() => {

    function updateSize() {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);

      setSize([window.innerWidth, window.innerHeight]);
    }

    window.addEventListener('resize', updateSize);

    updateSize();

    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return size;
}
