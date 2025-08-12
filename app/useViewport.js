'use client';

import { useEffect, useState } from 'react';

export default function useViewport() {
  const [state, setState] = useState({
    widthPx: 0,
    heightPx: 0,
    widthRem: 0,
    heightRem: 0,
    rootFontSize: 16, // default guess
    dpr: 1,
    breakpoint: 'base',
  });

  useEffect(() => {
    const calcBp = (w) => {
      if (w >= 1536) return '2xl';
      if (w >= 1280) return 'xl';
      if (w >= 1024) return 'lg';
      if (w >= 768)  return 'md';
      if (w >= 640)  return 'sm';
      return 'base';
    };

    const update = () => {
      const widthPx = window.innerWidth;
      const heightPx = window.innerHeight;
      const rootFontSize = parseFloat(
        getComputedStyle(document.documentElement).fontSize
      );
      const widthRem = +(widthPx / rootFontSize).toFixed(2);
      const heightRem = +(heightPx / rootFontSize).toFixed(2);
      const dpr = window.devicePixelRatio;

      setState({
        widthPx,
        heightPx,
        widthRem,
        heightRem,
        rootFontSize,
        dpr,
        breakpoint: calcBp(widthPx),
      });
    };

    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return state;
}
