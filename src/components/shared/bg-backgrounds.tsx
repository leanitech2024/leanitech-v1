import { cn } from '@/lib/utils';

export function DottedBackground({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'h-full',
        'w-full',
        'relative',
        'overflow-hidden',
        'rounded-lg',
        'bg-[radial-gradient(var(--pattern-fg)_1px,transparent_0)]',
        'bg-size-[10px_10px]',
        'bg-fixed',

        // 'h-full w-full relative overflow-hidden rounded-lg bg-gray-950/2.5 after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:inset-ring after:inset-ring-gray-950/5 dark:after:inset-ring-white/10 bg-[radial-gradient(var(--pattern-fg)_1px,transparent_0)] bg-size-[10px_10px] bg-fixed [--pattern-fg:var(--color-gray-950)]/5 dark:[--pattern-fg:var(--color-white)]/10',

        // 'bg-background/2.5',
        'bg-gray-950/2.5',
        'after:pointer-events-none',
        'after:absolute',
        'after:inset-0',
        'after:rounded-lg',
        'after:inset-ring',
        'after:inset-ring-gray-950/5',
        '[--pattern-fg:var(--color-gray-950)]/5',
        'dark:after:inset-ring-white/10',
        'dark:[--pattern-fg:var(--color-white)]/10',
        className,
      )}>
      {children}
    </div>
  );
}

export function LinearGradientBackground({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'relative border-(--pattern-fg) bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] bg-fixed [--pattern-fg:var(--color-black)]/5 max-lg:h-66 max-lg:border-t lg:border-l dark:[--pattern-fg:var(--color-white)]/10',
        className,
      )}>
      {children}
    </div>
  );
}
