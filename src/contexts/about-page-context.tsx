'use client';

import { useInView } from 'motion/react';
import {
  createContext,
  RefObject,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';

type AboutPageContextType = {
  scrollProgress: number;
  y1: number;
  y2: number;
  rotate1: number;
  rotate2: number;
  isInView: boolean;
  isStatsInView: boolean;
  sectionRef: RefObject<HTMLDivElement | null>;
  statsRef: RefObject<HTMLDivElement | null>;
};

const AboutPageContext = createContext<AboutPageContextType | undefined>(
  undefined,
);

type AboutPageContextProviderProps = {
  children: React.ReactNode;
};

export function AboutPageContextProvider(props: AboutPageContextProviderProps) {
  const { children } = props;
  // const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });
  const isStatsInView = useInView(statsRef, { once: false, amount: 0.3 });

  useEffect(() => {
    let rafId: number | null = null;
    let ticking = false;

    const updateProgress = () => {
      ticking = false;

      const sectionEl = sectionRef.current;
      if (!sectionEl) return;

      const rect = sectionEl.getBoundingClientRect();
      const viewportHeight = window.innerHeight || 1;

      // Same idea as "start end" -> "end start":
      // progress is 0 when section top hits viewport bottom,
      // progress is 1 when section bottom hits viewport top.
      const totalTravel = rect.height + viewportHeight;
      const traveled = viewportHeight - rect.top;
      const nextProgress = Math.min(1, Math.max(0, traveled / totalTravel));

      setScrollProgress((prev) =>
        Math.abs(prev - nextProgress) > 0.001 ? nextProgress : prev,
      );
    };

    const onScrollOrResize = () => {
      if (ticking) return;
      ticking = true;
      rafId = window.requestAnimationFrame(updateProgress);
    };

    // Initial sync
    onScrollOrResize();

    window.addEventListener('scroll', onScrollOrResize, { passive: true });
    window.addEventListener('resize', onScrollOrResize);

    return () => {
      window.removeEventListener('scroll', onScrollOrResize);
      window.removeEventListener('resize', onScrollOrResize);
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, []);

  const y1 = -50 * scrollProgress;
  const y2 = 50 * scrollProgress;
  const rotate1 = 20 * scrollProgress;
  const rotate2 = -20 * scrollProgress;

  // Parallax effect for decorative elements
  // const { scrollYProgress } = useScroll({
  //   target: sectionRef,
  //   offset: ['start end', 'end start'],
  // });

  // const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  // const y2 = useTransform(scrollYProgress, [0, 1], [0, 50]);
  // const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 20]);
  // const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -20]);

  // useEffect(() => {
  //   setIsVisible(true);
  // }, []);

  const values: AboutPageContextType = {
    scrollProgress,
    y1,
    y2,
    rotate1,
    rotate2,
    isInView,
    isStatsInView,
    sectionRef,
    statsRef,
  };

  return (
    <AboutPageContext.Provider value={values}>
      {children}
    </AboutPageContext.Provider>
  );
}

export function useAboutPageContext() {
  const context = useContext(AboutPageContext);
  if (!context) {
    throw new Error(
      'useAboutPageContext must be used within an AboutContextProvider',
    );
  }
  return context;
}
