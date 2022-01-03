import { useState, useLayoutEffect } from 'react';

export interface IWindowSize {
  width: number;
  height: number;
}

export const useWindowSize = (): IWindowSize => {
  const [windowSize, setWindowSize] = useState<IWindowSize>({
    width: 0,
    height: 0,
  });

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }

  window.addEventListener("resize", handleResize);

  useLayoutEffect(() => {
    handleResize()
  }, []);

  return windowSize;
}
