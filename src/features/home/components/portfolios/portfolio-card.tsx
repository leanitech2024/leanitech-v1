import { PortfolioItem } from '@/app/(root)/portfolios/page';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';

export default function PortfolioCard(props: PortfolioItem) {
  const { id, title, imgSrc, tags, link } = props;
  return (
    <Card className='p-0 ring-0 overflow-hidden shadow-none border-0 bg-transparent'>
      <CardContent className='p-0 flex flex-col gap-6'>
        <div className='relative aspect-auto overflow-hidden rounded-2xl'>
          <Link href={link}>
            <Image
              src={imgSrc}
              alt={`${id} Portfolio Cover`}
              width={600}
              height={370}
              className='rounded-2xl object-cover w-full h-full transition-transform duration-500 group-hover:scale-105'
            />
          </Link>
        </div>
        <div className='flex flex-col gap-3'>
          <Link
            href={link}
            className='text-foreground text-2xl font-medium tracking-tighter w-fit'>
            {title}
          </Link>
          <div className='flex flex-wrap gap-3'>
            {tags.map((tag, tagIndex) => (
              <Badge
                key={tagIndex}
                variant='outline'
                className='text-sm font-normal px-3 py-1 h-7'>
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
