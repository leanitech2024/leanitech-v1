import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutUsCTA() {
  return (
    <div className='pt-16'>
      <div className='relative overflow-hidden sm:rounded-xl sm:shadow-lg dark:border dark:border-border/80'>
        <Image
          alt='ascii-art'
          className='absolute inset-0 object-cover size-full'
          src='/ascii-art.png'
          width={1280}
          height={960}
        />

        <div className='relative px-10 isolate bg-linear-to-r from-black to-black/50 py-14'>
          <h2 className='text-4xl font-semibold tracking-tight text-white font-satoshi sm:text-5xl'>
            Ready to get started?
          </h2>
          <p className='max-w-md mt-4 text-lg text-white/85 md:text-xl'>
            Connect with us today and let’s build something amazing together.
          </p>
          <Button
            className='mt-10 text-black bg-white ring-4 ring-white/30 hover:bg-white/90'
            size='lg'
            asChild>
            <Link href={'/contact'}>
              Connect Now <ArrowUpRight />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
