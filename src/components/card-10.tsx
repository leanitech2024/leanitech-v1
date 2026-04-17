import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Placeholder = {
  title: <div className='w-full h-8 rounded-md bg-secondary max-w-40' />,
  content: <div className='w-full h-20 rounded-md bg-secondary' />,
};
export const Card_10 = () => {
  return (
    <div className='relative overflow-hidden rounded-xl'>
      <div
        className='absolute z-0 rounded-lg inset-1'
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, transparent, transparent 2px, var(--border) 2px, var(--border) 4px)',
          opacity: 0.5, // Adjust this value (0.0 to 1.0) to change opacity
        }}
      />
      <Card className='z-10 bg-transparent border-2 isolate border-border '>
        <CardHeader>
          <CardTitle>{Placeholder.title}</CardTitle>
        </CardHeader>
        <CardContent>{Placeholder.content}</CardContent>
      </Card>
    </div>
  );
};
