import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const aspectRatios: AspectRatio[] = [
  [1, 1],
  [2, 3],
  [3, 2],
];

export function getRandomAspectRatio(prevAspectRatio?: AspectRatio) {
  const newAspectRatio =
    aspectRatios[Math.floor(Math.random() * aspectRatios.length)];

  if (newAspectRatio === prevAspectRatio) {
    return getRandomAspectRatio(prevAspectRatio);
  }

  return newAspectRatio;
}

export function getRandomColor() {
  return `hsl(${Math.floor(Math.random() * 360)}, 100%, 75%)`;
}

export function buildItems(count: number, prev?: AspectRatio) {
  let previous = prev;

  return Array.from({ length: count }, () => {
    const ratio = getRandomAspectRatio(previous);
    previous = ratio;

    return {
      width: ratio[0],
      height: ratio[1],
      backgroundColor: getRandomColor(),
    };
  });
}
