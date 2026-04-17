import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const Placeholder = {
  title: <div className='w-full h-8 rounded-md bg-secondary max-w-40' />,
  content: <div className='w-full h-20 rounded-md bg-secondary' />,
};

const Line = ({ className = '' }) => (
  <div
    className={cn(
      'h-px w-full via-zinc-400 from-1% from-zinc-200 to-zinc-600 absolute z-0 dark:via-zinc-700 dark:from-zinc-900 dark:to-zinc-500',
      className,
    )}
  />
);
const Lines = () => (
  <>
    <Line className='left-0 bg-linear-to-l top-2 sm:top-4 md:top-6' />
    <Line className='left-0 bg-linear-to-r bottom-2 sm:bottom-4 md:bottom-6' />

    <Line className='inset-y-0 w-px h-full bg-linear-to-t right-2 sm:right-4 md:right-6' />
    <Line className='inset-y-0 w-px h-full bg-linear-to-t left-2 sm:left-4 md:left-6' />
  </>
);

export const Card_2 = () => {
  return (
    <div className='relative'>
      <Lines />
      <Card className='w-full p-10 border-none shadow-none'>
        <CardHeader>
          <CardTitle>{Placeholder.title}</CardTitle>
        </CardHeader>
        <CardContent>{Placeholder.content}</CardContent>
      </Card>
    </div>
  );
};
