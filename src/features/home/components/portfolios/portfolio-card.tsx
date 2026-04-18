import Image from 'next/image';
import Link from 'next/link';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

export default function PortfolioCard(props: PortfolioItem) {
  const { id, title, imgSrc, tags, link } = props;
  return (
    <Card className='p-0 overflow-hidden bg-transparent border-0 shadow-none ring-0'>
      <CardContent className='flex flex-col gap-6 p-0'>
        <div className='relative overflow-hidden aspect-auto rounded-2xl'>
          <Link href={link} target='_blank'>
            <Image
              src={imgSrc}
              alt={`${id} Portfolio Cover`}
              width={600}
              height={370}
              className='object-cover w-full h-full transition-transform duration-500 rounded-2xl group-hover:scale-105'
            />
          </Link>
        </div>
        <div className='flex flex-col gap-3'>
          <Link
            href={link}
            target='_blank'
            className='text-2xl font-medium tracking-tighter text-foreground w-fit'>
            {title}
          </Link>
          <div className='flex flex-wrap gap-3'>
            {tags.map((tag, tagIndex) => (
              <Badge
                key={tagIndex}
                variant='outline'
                className='px-3 py-1 text-sm font-normal h-7'>
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
