'use client';

import { cn } from '@/lib/utils';
import createGlobe, { type COBEOptions } from 'cobe';
import React, { useEffect, useRef } from 'react';

interface EarthProps extends Partial<COBEOptions> {
  className?: string;
}

// interface EarthProps {
//   className?: string;
//   theta?: number;
//   dark?: number;
//   scale?: number;
//   diffuse?: number;
//   mapSamples?: number;
//   mapBrightness?: number;
//   baseColor?: [number, number, number];
//   markerColor?: [number, number, number];
//   glowColor?: [number, number, number];
// }
const Earth: React.FC<EarthProps> = ({
  className,
  theta = 0.25,
  dark = 1,
  scale = 1.1,
  diffuse = 1.2,
  mapSamples = 40000,
  mapBrightness = 6,
  baseColor = [0.4, 0.6509, 1],
  markerColor = [1, 0, 0],
  glowColor = [0.2745, 0.5765, 0.898],
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;

    let width = 0;
    const onResize = () => (width = canvas.offsetWidth);
    // canvasRef.current && (width = canvasRef.current.offsetWidth);
    window.addEventListener('resize', onResize);
    onResize();
    let phi = 0;

    onResize();
    const globe = createGlobe(canvas, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: theta,
      dark: dark,
      scale: scale,
      diffuse: diffuse,
      mapSamples: mapSamples,
      mapBrightness: mapBrightness,
      baseColor: baseColor,
      markerColor: markerColor,
      glowColor: glowColor,
      opacity: 1,
      offset: [0, 0],
      // markerColor:"#fb6415"
      // markerSize :{0.05},
      markers: [
        // longitude latitude
        // { location: [2.3522, 48.8566], size: 0.5 }, // Paris
        // { location: [-74.006, 40.7128], size: 0.5 }, // New York
        // { location: [139.6917, 35.6895], size: 0.5 }, // Tokyo
        // { location: [151.2093, -33.8688], size: 0.5 }, // Sydney
        // { location: [37.6173, 55.7558], size: 0.5 }, // Moscow
      ],
      onRender: (state: Record<string, unknown>) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.\
        state.phi = phi;
        phi += 0.003;
      },
    });

    return () => {
      globe.destroy();
    };
  }, [
    dark,
    baseColor,
    diffuse,
    glowColor,
    mapBrightness,
    mapSamples,
    markerColor,
    scale,
    theta,
  ]);

  return (
    <div
      className={cn(
        'z-10 mx-auto flex w-full max-w-87.5 items-center justify-center',
        className,
      )}>
      <canvas
        ref={canvasRef}
        style={{
          width: '100%',
          height: '100%',
          maxWidth: '100%',
          aspectRatio: '1',
        }}
      />
    </div>
  );
};

export default Earth;
