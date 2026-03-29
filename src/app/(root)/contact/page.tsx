import WorldMap from '@/components/extends/global-nextwork-map';
import { ContactBlock } from '@/features/contact/components/contact';
import ContactUs1 from '@/features/contact/components/contact-us';

export default function ContactUs() {
  return (
    <main className='py-16 xs:py-20 sm:py-16 md:py-12 lg:py-8 space-y-8'>
      <section className={'max-w-(--breakpoint-xl) mx-auto px-4 sm:px-6'}>
        <div className='max-w-7xl mx-auto text-center'>
          <p className='font-bold text-xl md:text-4xl dark:text-white text-black'>
            Global Connections, Local Impact
          </p>
          <p className='text-sm md:text-lg text-neutral-500 max-w-2xl mx-auto py-4'>
            Connect with teams and clients worldwide. Our platform enables
            seamless collaboration across continents, bringing the world to your
            workspace.
          </p>
        </div>
        <WorldMap
          dots={[
            {
              start: {
                lat: 64.2008,
                lng: -149.4937,
                label: 'Fairbanks',
              },
              end: {
                lat: 34.0522,
                lng: -118.2437,
                label: 'Los Angeles',
              },
            },
            {
              start: {
                lat: 64.2008,
                lng: -149.4937,
                label: 'Fairbanks',
              },
              end: {
                lat: -15.7975,
                lng: -47.8919,
                label: 'Brasília',
              },
            },
            {
              start: {
                lat: -15.7975,
                lng: -47.8919,
                label: 'Brasília',
              },
              end: {
                lat: 38.7223,
                lng: -9.1393,
                label: 'Lisbon',
              },
            },
            {
              start: {
                lat: 51.5074,
                lng: -0.1278,
                label: 'London',
              },
              end: {
                lat: 28.6139,
                lng: 77.209,
                label: 'New Delhi',
              },
            },
            {
              start: {
                lat: 28.6139,
                lng: 77.209,
                label: 'New Delhi',
              },
              end: {
                lat: 43.1332,
                lng: 131.9113,
                label: 'Vladivostok',
              },
            },
            {
              start: {
                lat: 28.6139,
                lng: 77.209,
                label: 'New Delhi',
              },
              end: {
                lat: -1.2921,
                lng: 36.8219,
                label: 'Nairobi',
              },
            },
          ]}
        />
      </section>

      <ContactBlock />

      <ContactUs1 />
    </main>
  );
}
