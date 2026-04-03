import ServicesTab from '@/features/services/components/services-tab';
// import { getResoursesByFolder } from '@/lib/cloudinary';

export default function ServicePage() {
  // const result = await getResoursesByFolder('leanitech-v1/poster work');
  // console.log('Cloudinary Resources:', JSON.stringify(result, null, 2));
  return (
    <main className='py-16 xs:py-20 sm:py-16 md:py-12 lg:py-8 space-y-8'>
      <ServicesTab />
    </main>
  );
}
