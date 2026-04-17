import { cn } from '@/lib/utils';

const PlusIcon = ({ className }: { className: string }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={24}
      height={24}
      strokeWidth='1'
      stroke='currentColor'
      className={cn('text-foreground size-6 absolute', className)}>
      <title>Icon</title>
      <path strokeLinecap='round' strokeLinejoin='round' d='M12 6v12m6-6H6' />
    </svg>
  );
};

export function PlusIcons() {
  return (
    <>
      <PlusIcon className='-top-3 -left-3' />
      <PlusIcon className='-top-3 -right-3' />
      <PlusIcon className='-bottom-3 -left-3' />
      <PlusIcon className='-bottom-3 -right-3' />
    </>
  );
}

const Line = ({ className = '' }) => (
  <div
    className={cn(
      'h-px w-full via-zinc-400 from-1% from-zinc-200 to-zinc-600 absolute z-0 dark:via-zinc-700 dark:from-zinc-900 dark:to-zinc-500',
      className,
    )}
  />
);
export function Lines() {
  return (
    <>
      <Line className='left-0 bg-linear-to-l top-2 sm:top-4 md:top-6' />
      <Line className='left-0 bg-linear-to-r bottom-2 sm:bottom-4 md:bottom-6' />

      <Line className='inset-y-0 w-px h-full bg-linear-to-t right-2 sm:right-4 md:right-6' />
      <Line className='inset-y-0 w-px h-full bg-linear-to-t left-2 sm:left-4 md:left-6' />
    </>
  );
}

const RoundedCorner = ({
  className,
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      {...rest}
      className={cn(
        'dark:border-zinc-200 border-zinc-700 size-6 absolute',
        className,
      )}
    />
  );
};

export function RoundedCorners() {
  return (
    <>
      <RoundedCorner className='-top-0.5 -left-0.5 border-l-2 border-t-2 rounded-tl-lg ' />
      <RoundedCorner className='-top-0.5 -right-0.5 border-r-2 border-t-2 rounded-tr-lg' />
      <RoundedCorner className='-bottom-0.5 -left-0.5 border-l-2 border-b-2 rounded-bl-lg' />
      <RoundedCorner className='-bottom-0.5 -right-0.5 border-r-2 border-b-2 rounded-br-lg' />
    </>
  );
}
