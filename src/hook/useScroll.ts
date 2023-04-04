import { useState, useEffect } from 'react';

interface Options {
  offsetFromBottom?: number;
}

export function useScroll(option?: Options) {
  const [isBottom, setIsBottom] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  function handleScroll() {
    const offsetFromBottom = option?.offsetFromBottom ?? 0;

    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    const currentPosition = scrollTop + clientHeight;
    const heightLimit = scrollHeight * (offsetFromBottom / 100);

    const atBottom = currentPosition >= scrollHeight - heightLimit;

    setScrollPosition(currentPosition);
    setIsBottom(atBottom);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { isBottom, scrollPosition };
}
