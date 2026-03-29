import { portfolios } from '@/app/(root)/portfolios/page';
import CollaborateButton from '@/components/shared/collaborate-button';
import { Badge } from '@/components/ui/badge';
import PortfolioCard from './portfolio-card';
import PortfolioMotionWrapper from './portfolio-motion-wrapper';

const Portfolios = () => {
  return (
    <section
      id='portfolios'
      className='bg-transparent max-w-(--breakpoint-xl) mx-auto px-4 sm:px-6 py-10'>
      <div className='flex flex-col gap-8 sm:gap-12 justify-center items-center w-full'>
        {/* Heading */}
        <div className='flex flex-col gap-4 justify-center items-center animate-in fade-in slide-in-from-top-8 duration-700 ease-in-out'>
          {/* Badge */}
          <Badge
            variant={'outline'}
            className='py-1 px-3 text-sm font-normal h-7'>
            Portfolio
          </Badge>
          {/* Heading */}
          <div className='max-w-xs sm:max-w-2xl mx-auto text-center'>
            <h2 className='text-foreground text-3xl sm:text-5xl font-semibold'>
              How we transformed a small business’s online presence
            </h2>
          </div>
        </div>
        {/* portfolio */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-x-7 md:gap-y-8 w-full'>
          {portfolios.slice(0, 4).map((item, index) => (
            <PortfolioMotionWrapper key={item.id} index={index}>
              <PortfolioCard {...item} />
            </PortfolioMotionWrapper>
          ))}
        </div>

        <CollaborateButton asLink href='/portfolios'>
          View More
        </CollaborateButton>
      </div>
    </section>
  );
};

export default Portfolios;
