import { RefObject, useEffect, useRef, useState } from 'react';

export function useInView(ref: RefObject<HTMLDivElement | null>, once = true) {
  const [inView, setInView] = useState(false);
  const triggered = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || (once && triggered.current)) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered.current) {
          setInView(true);
          if (once) {
            triggered.current = true;
            observer.disconnect();
          }
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -10% 0px',
        // scrollMargin: '0px 0px -10% 0px',
      },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, once]);

  return inView;
}
