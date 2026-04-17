import { RoundedCorners } from '@/components/shared/card-decorators';
import Image from 'next/image';

const teamMembers = [
  {
    name: 'Liam Martinez',
    image: 'https://mockmind-api.uifaces.co/content/human/80.jpg',
    role: 'Chief Technology Officer',
  },
  {
    name: 'Ava Thompson',
    image: 'https://mockmind-api.uifaces.co/content/human/97.jpg',
    role: 'Chief Executive Officer',
  },
  {
    name: 'Sophia Patel',
    image: 'https://mockmind-api.uifaces.co/content/human/113.jpg',
    role: 'Head of Design',
  },
  {
    name: 'Noah Chen',
    image: 'https://mockmind-api.uifaces.co/content/human/104.jpg',
    role: 'Product Manager',
  },
  {
    name: 'Emma Garcia',
    image: 'https://mockmind-api.uifaces.co/content/human/116.jpg',
    role: 'Software Engineer',
  },
  {
    name: 'Ethan Kim',
    image: 'https://mockmind-api.uifaces.co/content/human/112.jpg',
    role: 'DevOps Engineer',
  },
  {
    name: 'Mia Johnson',
    image: 'https://mockmind-api.uifaces.co/content/human/111.jpg',
    role: 'Marketing Lead',
  },
  {
    name: 'Oliver Singh',
    image: 'https://mockmind-api.uifaces.co/content/human/90.jpg',
    role: 'Customer Success Manager',
  },
];

export default function OurTeam() {
  return (
    <div className='py-12'>
      <h3 className='text-4xl font-semibold tracking-tight text-center capitalize text-balance font-satoshi md:text-5xl'>
        Meet our amazing team
      </h3>
      <p className='mx-auto mt-3.5 text-balance text-center text-muted-foreground text-xl tracking-[-0.015em] md:text-2xl'>
        Our team is made up of a diverse group of individuals who are dedicated
      </p>

      <div className='grid grid-cols-1 gap-8 mt-12 max-sm:justify-center sm:mt-18 sm:grid-cols-2 sm:gap-10 md:grid-cols-3 lg:grid-cols-4'>
        {teamMembers.map((member, index) => (
          <div
            className='relative flex items-center gap-x-6 gap-y-10'
            key={index}>
            <RoundedCorners />
            <div className='overflow-hidden rounded-lg aspect-square sm:aspect-4/5'>
              <Image
                alt={member.name}
                className='object-cover object-top size-full'
                src={member.image}
                width={400}
                height={400}
              />
            </div>
            <div className='absolute bottom-0 left-0 right-0 p-4 pt-16 overflow-hidden rounded-b-lg isolate bg-linear-to-t from-foreground/90 via-foreground/80'>
              <p className='text-lg font-medium text-background'>
                {member.name}
              </p>
              <p className='mt-0.5 font-medium text-background/75 text-sm'>
                {member.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
