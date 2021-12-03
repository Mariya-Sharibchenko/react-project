import { useState, useLayoutEffect } from 'react';

export interface ISize {
  width: number;
  height: number;
}

export const useWindowSize = (): ISize => {
  const [windowSize, setWindowSize] = useState<ISize>({
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