import { cn } from '@/lib/utils';

export function LeftSidePattern() {
  return (
    <div
      className={cn(
        'col-start-1',
        'row-span-full',
        'row-start-1',
        // 'hidden',
        // 'md:block',
        'bg-fixed',
        'bg-size-[10px_10px]',
        'border-x',

        '[--pattern-fg:var(--color-black)]/5',
        'border-x-(--pattern-fg)',
        'bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)]',
        'dark:[--pattern-fg:var(--color-white)]/10',
      )}></div>
  );
}

export function RightSidePattern() {
  return (
    <div
      className={cn(
        'row-span-full',
        'row-start-1',
        // 'hidden',
        // 'md:block',
        'md:col-start-3',
        'bg-fixed',
        'border-x',
        'bg-size-[10px_10px]',

        '[--pattern-fg:var(--color-black)]/5',
        'border-x-(--pattern-fg)',
        'bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)]',
        'dark:[--pattern-fg:var(--color-white)]/10',
      )}></div>
  );
}
