import WorldMap from '@/components/extends/global-nextwork-map';
import { CountdownBanner } from '@/components/extends/the-future-arrives-soon-cta';
// import { MyPlayer } from '@/components/shared/player';
import PortfolioCard from '@/features/home/components/portfolios/portfolio-card';
import PortfolioMotionWrapper from '@/features/home/components/portfolios/portfolio-motion-wrapper';
// import { getResoursesByFolder } from '@/lib/cloudinary';

export type PortfolioItem = {
  id: string;
  title: string;
  imgSrc: string;
  tags: string[];
  link: string;
};

// export const graphicDesigns: PortfolioItem[] = [
//   {
//     id: '1',
//     title: '', // work name
//     imgSrc: '', // cloudinary image URL
//     tags: [''], // e.g. ['UI/UX Design', 'Web Development']
//     link: '',
//   },
// ];

export const portfolios: PortfolioItem[] = [
  {
    id: 'b41a01ea-e8d6-42f9-aad4-45e7c51b700d',
    title: 'Sunrisers Event Planners',
    imgSrc:
      'https://res.cloudinary.com/duug6ntbz/image/upload/v1774428848/Screenshot_2026-03-25_142246_ts87fi.png',
    tags: ['UI/UX Design', 'Web Development'],
    link: 'https://sunriserseventplanners.com',
  },
  {
    id: '905d7e7d-b1a6-4e77-9338-a19ed31509d5',
    title: 'Sunrisers Digital Hub',
    imgSrc:
      'https://res.cloudinary.com/duug6ntbz/image/upload/v1774431942/Screenshot_2026-03-25_151050_oav3vz.png',
    tags: ['UI/UX Design', 'Web Development'],
    link: 'https://sunrisersdigitalhub.com',
  },
  {
    id: '228f5d75-6310-46f1-b7df-b120f46d19f3',
    title: 'Ascent Wealth',
    imgSrc:
      'https://res.cloudinary.com/duug6ntbz/image/upload/v1774430939/Screenshot_2026-03-25_145820_twtqit.png',
    tags: ['UI/UX Design', 'Web Development'],
    link: 'https://www.ascentwealth.in',
  },
  {
    id: '7d521196-49f5-462e-8fd3-bfa018f43c70',
    title: 'RotateKeys',
    imgSrc:
      'https://res.cloudinary.com/duug6ntbz/image/upload/v1774428926/Screenshot_2026-03-25_142450_kbdf1p.png',
    tags: ['UI/UX Design', 'Web Development'],
    link: 'https://www.rotatekey.com',
  },
  {
    id: '91e9c5b6-ac4d-4728-84e1-e66b78eac5bd',
    title: 'IQBox',
    imgSrc:
      'https://res.cloudinary.com/duug6ntbz/image/upload/v1774435891/Screenshot_2026-03-25_162100_zz3vue.png',
    tags: ['UI/UX Design', 'Web Development'],
    link: 'https://iqbox.com.au',
  },
  {
    id: 'b8ec2598-40e5-4a7b-bf42-eb466b29db41',
    title: 'FinnoAQ',
    imgSrc:
      'https://res.cloudinary.com/duug6ntbz/image/upload/v1774435365/Screenshot_2026-03-25_161209_yd1oj6.png',
    tags: ['UI/UX Design', 'Web Development'],
    link: 'https://finnoaq.com',
  },
  {
    id: '9d6cd310-36d2-438e-8b7d-8087d657963e',
    title: 'Branding Solutions',
    imgSrc:
      'https://res.cloudinary.com/duug6ntbz/image/upload/v1774435074/Screenshot_2026-03-25_160710_emxtdk.png',
    tags: ['UI/UX Design', 'Web Development'],
    link: '#',
  },
  {
    id: 'd89b1f14-c33f-4180-a1fc-897967e8ea44',
    title: 'OnismTourHimachal',
    imgSrc:
      'https://res.cloudinary.com/duug6ntbz/image/upload/v1774434641/Screenshot_2026-03-25_160008_hgcpdz.png',
    tags: ['UI/UX Design', 'Web Development'],
    link: 'https://www.onismtourhimachal.com',
  },
  {
    id: 'ec612629-b3bf-4f7c-809c-7f7c19395d82',
    title: 'Infinity Capitol',
    imgSrc:
      'https://res.cloudinary.com/duug6ntbz/image/upload/v1774431588/Screenshot_2026-03-25_150936_xh7lzd.png',
    tags: ['UI/UX Design', 'Web Development'],
    link: '#',
  },
  {
    id: 'aa919fb6-f851-4b18-b85b-828a6d52df47',
    title: 'AMD Groups',
    imgSrc:
      'https://res.cloudinary.com/duug6ntbz/image/upload/v1774431395/Screenshot_2026-03-25_150556_r50dd8.png',
    tags: ['UI/UX Design', 'Web Development'],
    link: 'https://amdgroups.in',
  },
  {
    id: 'aafc3ba7-e1c1-4987-bd5d-3107c1c33058',
    title: 'Tutor Octopus',
    imgSrc:
      'https://res.cloudinary.com/duug6ntbz/image/upload/v1774430747/Screenshot_2026-03-25_145531_z9zgpl.png',
    tags: ['UI/UX Design', 'Web Development'],
    link: 'https://www.tutoroctopus.com',
  },
  {
    id: 'd956cc1b-ee86-4df3-a66b-d89b74bb373f',
    title: 'Yoga with Pratish',
    imgSrc:
      'https://res.cloudinary.com/duug6ntbz/image/upload/v1774430577/Screenshot_2026-03-25_145147_e4hr51.png',
    tags: ['UI/UX Design', 'Web Development'],
    link: 'https://www.yogawithpratish.com',
  },
  {
    id: '31ea77c4-f84d-4c36-bd7b-4b9d54bf3183',
    title: 'WalkNoodles',
    imgSrc:
      'https://res.cloudinary.com/duug6ntbz/image/upload/v1774430280/Screenshot_2026-03-25_144733_mic1sf.png',
    tags: ['UI/UX Design', 'Web Development'],
    link: 'https://www.walknoodles.com/',
  },
  {
    id: 'd6d960ff-a360-4fa0-84ff-5cc8fe477a51',
    title: 'Chokhaa',
    imgSrc:
      'https://res.cloudinary.com/duug6ntbz/image/upload/v1774429439/Screenshot_2026-03-25_143321_xz0iba.png',
    tags: ['UI/UX Design', 'Web Development'],
    link: 'https://chokhaa.com',
  },
  {
    id: '2cf96c80-fc95-4b17-9751-16f018d3490d',
    title: 'Flyora Visa',
    imgSrc:
      'https://res.cloudinary.com/duug6ntbz/image/upload/v1774429353/Screenshot_2026-03-25_143207_szqgzt.png',
    tags: ['UI/UX Design', 'Web Development'],
    link: 'https://flyora-visa.com',
  },
  {
    id: '986482b2-7ea6-4bd2-a537-ea0aaa053190',
    title: 'NSL Tech',
    imgSrc:
      'https://res.cloudinary.com/duug6ntbz/image/upload/v1774429284/Screenshot_2026-03-25_143040_v3tbpx.png',
    tags: ['UI/UX Design', 'Web Development'],
    link: 'https://www.nsltech.us',
  },
  {
    id: '282b032c-0b24-4833-b860-cb6368c9ca68',
    title: 'BridgeInfoSolution',
    imgSrc:
      'https://res.cloudinary.com/duug6ntbz/image/upload/v1774429063/Screenshot_2026-03-25_142548_a0gnbr.png',
    tags: ['UI/UX Design', 'Web Development'],
    link: 'https://bridgeinfosolution.com',
  },
  {
    id: '9be4698f-145b-4f13-96c7-cfc70a48de45',
    title: 'NexPeak',
    imgSrc:
      'https://res.cloudinary.com/duug6ntbz/image/upload/v1774429049/Screenshot_2026-03-25_142655_z300ee.png',
    tags: ['UI/UX Design', 'Web Development'],
    link: 'https://www.nexpeaklegal.com',
  },
  {
    id: '122dea81-b860-4771-89be-23134b3c3814',
    title: 'Kiggla',
    imgSrc:
      'https://res.cloudinary.com/duug6ntbz/image/upload/v1774428845/Screenshot_2026-03-25_142329_sz05yg.png',
    tags: ['UI/UX Design', 'Web Development'],
    link: 'https://www.kiggla.com',
  },
  {
    id: 'dd423087-7b1d-4c41-a898-f13de4d48406',
    title: 'Weroam Bags',
    imgSrc:
      'https://res.cloudinary.com/duug6ntbz/image/upload/v1774423063/Screenshot_2026-03-04_193043_tnmwji_h3cnhk.png',
    tags: ['UI/UX Design', 'Web Development'],
    link: 'https://www.weroambags.com',
  },
  {
    id: '773c25aa-bfeb-47d3-973a-1c1697f0e3c8',
    title: 'Save Our Skies',
    imgSrc:
      'https://res.cloudinary.com/duug6ntbz/image/upload/v1774423047/Screenshot_2026-03-04_193427_xue5yg_kprddp.png',
    tags: ['UI/UX Design', 'Web Development'],
    link: '#',
  },

  // new data
  {
    id: '16b0f036-c61e-42fc-9afe-f41657343b52',
    title: '365 Medicare (UK Variant)',
    imgSrc:
      'https://res.cloudinary.com/duug6ntbz/image/upload/v1774528881/Untitled_jo7a3o.png',
    tags: ['UI/UX Design', 'Web Development'],
    link: 'https://365medicare.co.uk',
  },
  {
    id: '9bb30a24-2085-4348-977a-bc8be83bb3c2',
    title: '365 Medicare (India Variant)',
    imgSrc:
      'https://res.cloudinary.com/duug6ntbz/image/upload/v1774528881/Untitled_jo7a3o.png',
    tags: ['UI/UX Design', 'Web Development'],
    link: 'https://365medicare.in',
  },
  {
    id: 'a1f4a8c5-50f7-4f52-8941-6a2f8bc7596d',
    title: 'KSBrandSage',
    imgSrc:
      'https://res.cloudinary.com/duug6ntbz/image/upload/v1774529108/Untitled_xl0neh.png',
    tags: ['UI/UX Design', 'Web Development'],
    link: 'https://ksbrandsage.com',
  },
  {
    id: 'f12b807a-8ece-4674-9e46-54c2bc463822',
    title: 'Innochi health',
    imgSrc:
      'https://res.cloudinary.com/duug6ntbz/image/upload/v1774529995/Untitled_hk0s1t.png',
    tags: ['UI/UX Design', 'Web Development'],
    link: '#',
  },
  {
    id: '0d35244a-aadc-4c1e-b6cd-0a6e7b055fc2',
    title: 'Consultero',
    imgSrc:
      'https://res.cloudinary.com/duug6ntbz/image/upload/v1774529417/Untitled_lqdz6y.png',
    tags: ['UI/UX Design', 'Web Development'],
    link: '#',
  },
  {
    id: '41bd60c8-55e3-4108-87d3-ab5578178cc7',
    title: 'Ghraat',
    imgSrc:
      'https://res.cloudinary.com/duug6ntbz/image/upload/v1774529602/Untitled_cg9bmc.png',
    tags: ['UI/UX Design', 'Web Development'],
    link: '#',
  },
  {
    id: 'ecd84216-1a65-40a6-8d90-9add8f7c9b41',
    title: 'IAS Pocket Academy',
    imgSrc:
      'https://res.cloudinary.com/duug6ntbz/image/upload/v1774529825/Untitled_ufwee7.png',
    tags: ['UI/UX Design', 'Web Development'],
    link: '#',
  },
  {
    id: '39d6f35c-3528-41a3-b74b-5881bba79da5',
    title: 'KartMatch',
    imgSrc:
      'https://res.cloudinary.com/duug6ntbz/image/upload/v1774530402/Untitled_fq1qwb.png',
    tags: ['UI/UX Design', 'Web Development'],
    link: '#',
  },
  {
    id: '34d2d3c3-c941-428c-9a0e-603f7058daae',
    title: 'Makhir',
    imgSrc:
      'https://res.cloudinary.com/duug6ntbz/image/upload/v1774530554/Untitled_d0yrt2.png',
    tags: ['UI/UX Design', 'Web Development'],
    link: '#',
  },
  {
    id: '368882ec-c92a-4acf-842b-e7a5ce8adb82',
    title: 'Sprash', // hindi translation of 'Ask'
    imgSrc:
      'https://res.cloudinary.com/duug6ntbz/image/upload/v1774530669/Untitled_jpaopv.png',
    tags: ['UI/UX Design', 'Web Development'],
    link: '#',
  },
  {
    id: '9ea734e4-08e0-4234-b6ad-342a5701f742',
    title: 'RedBerry Travels',
    imgSrc:
      'https://res.cloudinary.com/duug6ntbz/image/upload/v1774530785/Untitled_kz1zjx.png',
    tags: ['UI/UX Design', 'Web Development'],
    link: '#',
  },
  {
    id: 'ca3c519c-3a09-426a-953a-7f046e1569b6',
    title: 'Saruaan',
    imgSrc:
      'https://res.cloudinary.com/duug6ntbz/image/upload/v1774530896/Untitled_febwap.png',
    tags: ['UI/UX Design', 'Web Development'],
    link: '#',
  },
  {
    id: '1102fc24-33e7-4f7a-9037-e3ed2bf36777',
    title: 'Seekers Bay PreSchool',
    imgSrc:
      'https://res.cloudinary.com/duug6ntbz/image/upload/v1774531179/Untitled_qgplrc.png',
    tags: ['UI/UX Design', 'Web Development'],
    link: '#',
  },
  {
    id: '950cd238-bd0d-4032-9293-06262ecec14d',
    title: 'Skyviewgeosolutions',
    imgSrc:
      'https://res.cloudinary.com/duug6ntbz/image/upload/v1774531359/Untitled_xiurbb.png',
    tags: ['UI/UX Design', 'Web Development'],
    link: '#',
  },
  {
    id: '8279ca69-5e71-47c6-88a8-b9c9ac44ddec',
    title: 'The Influential Content',
    imgSrc:
      'https://res.cloudinary.com/duug6ntbz/image/upload/v1774531545/Untitled_hww4ch.png',
    tags: ['UI/UX Design', 'Web Development'],
    link: '#',
  },
  {
    id: 'e3d261f4-4bd0-483d-b64e-63745bd4faf3',
    title: 'Vyas Academy',
    imgSrc:
      'https://res.cloudinary.com/duug6ntbz/image/upload/v1774702510/Untitled_xopkyy.png',
    tags: ['UI/UX Design', 'Web Development'],
    link: '#',
  },
  {
    id: 'f231d14f-7a3a-4584-82ff-a8e2bbd9125f',
    title: 'Arvind Law Associates',
    imgSrc:
      'https://res.cloudinary.com/duug6ntbz/image/upload/c_auto,h_0.55,w_1.00/AF1QipMuFyrnjExCkDjAHdf3ThOl5hm9Pr3O5oGdzqTK_s1360-w1360-h1020-rw_ulpgiq.webp',
    tags: ['UI/UX Design', 'Web Development'],
    link: '#',
  },
  {
    id: '6983f57f-83b1-48f5-bb91-45a1a5058811',
    title: 'Satta-King24',
    imgSrc:
      'https://res.cloudinary.com/duug6ntbz/image/upload/v1774705526/Untitled_bk2al8.png',
    tags: ['UI/UX Design', 'Web Development'],
    link: 'https://satta-king24.com',
  },
  {
    id: '6fbe31b9-1f06-4fdb-8e7a-8b06f758fdff',
    title: 'Navaneetha Education Trust',
    imgSrc:
      'https://res.cloudinary.com/duug6ntbz/image/upload/v1774705645/Untitled_qibj5d.png',
    tags: ['UI/UX Design', 'Web Development'],
    link: '#',
  },
  {
    id: '9f5d0184-43fd-4c32-b593-182eb5f2fb22',
    title: 'Pittora',
    imgSrc:
      'https://res.cloudinary.com/duug6ntbz/image/upload/v1774706039/Untitled_feor8a.png',
    tags: ['UI/UX Design', 'Web Development'],
    link: 'https://pittora.com',
  },
  {
    id: '54433d90-c3a2-43b4-b265-6acc6ccf655b',
    title: 'Lith-On Battery',
    imgSrc:
      'https://res.cloudinary.com/duug6ntbz/image/upload/v1774706574/Untitled_vsh0bl.png',
    tags: ['UI/UX Design', 'Web Development'],
    link: 'https://lith-on.com',
  },
];

export default function PortfoliosPage() {
  // Home > leaniech-v1 > portfolios = clodinary folder name
  // const result = await getResoursesByFolder('leanitech-v1/video work');
  // console.log('Cloudinary Resources:', JSON.stringify(result, null, 2));

  return (
    <main className='py-16 xs:py-20 sm:py-16 md:py-12 lg:py-8 space-y-8'>
      <section className={'max-w-(--breakpoint-xl) mx-auto px-4 sm:px-6'}>
        <div className='max-w-7xl mx-auto text-center'>
          <p className='font-bold text-xl md:text-4xl dark:text-white text-black'>
            Global Network
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

      <section className={'max-w-(--breakpoint-xl) mx-auto px-4 sm:px-6'}>
        <CountdownBanner />
      </section>

      <section className={'max-w-(--breakpoint-xl) mx-auto px-4 sm:px-6'}>
        <h1 className='text-3xl font-bold mb-4'>Portfolios</h1>
        <p className='text-lg text-muted-foreground mb-8'>
          Explore our diverse range of portfolios showcasing our expertise and
          creativity in various industries. Each portfolio highlights our
          commitment to delivering exceptional results and innovative solutions
          for our clients.
        </p>
      </section>

      <section className={'max-w-(--breakpoint-xl) mx-auto px-4 sm:px-6'}>
        <div className='container mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-x-7 md:gap-y-24 w-full'>
            {portfolios.map((item, index) => (
              <PortfolioMotionWrapper key={item.id} index={index}>
                <PortfolioCard {...item} />
              </PortfolioMotionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* <section className={'max-w-(--breakpoint-xl) mx-auto px-4 sm:px-6'}>
        <MyPlayer src='https://stream.mux.com/BV3YZtogl89mg9VcNBhhnHm02Y34zI1nlMuMQfAbl3dM/highest.mp4' />
      </section> */}
    </main>
  );
}
