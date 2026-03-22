import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { MDXContent } from '@content-collections/mdx/react';
import { Icon } from '@iconify/react';
import { allPosts } from 'content-collections';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

// https://www.npmjs.com/package/next-view-transitions

type Post = (typeof allPosts)[0];

export default async function BlogPage(props: PageProps<'/blogs/[slug]'>) {
  const params = await props.params;

  if (!params.slug) {
    notFound();
  }

  const slug = params.slug;

  const post = allPosts.find((post) => post.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className={'pb-16'}>
      <section className={'grid grid-cols-12 relative'}>
        <div
          className={
            'lg:col-span-2 border rounded-md p-4 hidden lg:block sticky top-20 left-2 self-start h-dvh'
          }>
          Table of contents
          <Skeleton className={'w-full h-4 mt-4 rounded-md'} />
          <Skeleton className={'w-full h-4 mt-4 rounded-md'} />
          <Skeleton className={'w-full h-4 mt-4 rounded-md'} />
          <Skeleton className={'w-full h-4 mt-4 rounded-md'} />
          <Skeleton className={'w-full h-4 mt-4 rounded-md'} />
          <Skeleton className={'w-full h-4 mt-4 rounded-md'} />
          <Skeleton className={'w-full h-4 mt-4 rounded-md'} />
          <Skeleton className={'w-full h-4 mt-4 rounded-md'} />
        </div>

        <div className={'col-span-full lg:col-span-8'}>
          <div className={'max-w-(--breakpoint-lg) px-4'}>
            <Card
              className={
                'bg-transparent rounded-none border-none shadow-none py-0 gap-4'
              }>
              <CardContent>
                <div className={'aspect-video'}>
                  <Image
                    src={post.cover}
                    alt={post.coverAlt}
                    width={1200}
                    height={800}
                    className={'w-full h-full rounded-md object-cover'}
                  />
                </div>
              </CardContent>

              <CardContent className={'flex items-center justify-between'}>
                <div className={'space-x-2'}>
                  {post.categories.map((category) => (
                    <Badge key={crypto.randomUUID()}>{category}</Badge>
                  ))}
                </div>

                <p className={'text-sm inline-flex items-center gap-1'}>
                  <Icon
                    icon='mdi:clock-time-four-outline'
                    className={'size-4'}
                  />
                  {post.readTime} min read
                </p>

                <p className={'text-xs flex flex-col'}>
                  {post.featured ? (
                    <Badge
                      variant='success'
                      className={'inline-flex items-center gap-1'}>
                      <Icon icon='mdi:check' className={'size-4'} />
                      Featured
                    </Badge>
                  ) : (
                    <Badge
                      variant='destructive'
                      className={'inline-flex items-center gap-1'}>
                      <Icon icon='mdi:close' className={'size-4'} />
                      Not featured
                    </Badge>
                  )}
                </p>
              </CardContent>

              <CardFooter className={'justify-between'}>
                <div className={'flex flex-col gap-2'}>
                  <div className={'h-full w-20'}>
                    <AuthorAvatar />
                  </div>
                  <div>
                    <p className={'font-semibold'}>By {post.author}</p>
                  </div>
                </div>
                <p className={'text-xs flex flex-col'}>
                  <span>Last modified on</span>
                  <span>
                    {new Date(post.lastModified).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </span>
                </p>
              </CardFooter>
            </Card>
          </div>

          <div className={'max-w-(--breakpoint-lg) px-4'}>
            <Card
              className={
                'bg-transparent rounded-none border-none shadow-none gap-4'
              }>
              <CardContent>
                <article className='prose prose-sm md:prose-base lg:prose-lg dark:prose-invert max-w-none'>
                  <MDXContent code={post.mdx} />
                </article>
              </CardContent>
            </Card>
          </div>
        </div>

        <div
          className={
            'lg:col-span-2 border rounded-md p-4 hidden lg:block sticky top-20 right-2 self-start h-dvh'
          }>
          Filter
          <Skeleton className={'w-full h-6 mt-4 rounded-md'} />
          <Skeleton className={'w-full h-6 mt-4 rounded-md'} />
          <Skeleton className={'w-full h-6 mt-4 rounded-md'} />
          <Skeleton className={'w-full h-6 mt-4 rounded-md'} />
        </div>
      </section>

      <section className={'max-w-(--breakpoint-lg) mx-auto px-4 mt-16'}>
        <PostNavigation currentPost={post} />
      </section>
    </main>
  );
}

function PostNavigation({ currentPost }: { currentPost: Post }) {
  // const sortedPosts = allPosts.sort((a, b) => a.id - b.id); // Changed from b.id - a.id
  // const currentIndex = sortedPosts.findIndex(
  //   (post) => post.id === currentPost.id,
  // );
  const sortedPosts = allPosts.sort((a, b) => {
    const dateA = new Date(a.lastModified).getTime();
    const dateB = new Date(b.lastModified).getTime();
    return dateA - dateB; // Sort by last modified date (oldest to newest)
  });

  const currentIndex = sortedPosts.findIndex(
    (post) => post.slug === currentPost.slug,
  );

  const previousPost = currentIndex > 0 ? sortedPosts[currentIndex - 1] : null;
  const nextPost =
    currentIndex < sortedPosts.length - 1
      ? sortedPosts[currentIndex + 1]
      : null;

  return (
    <div className='flex w-full justify-between'>
      {previousPost ? (
        <Link href={`/blogs/${previousPost.slug}`}>
          <Button className='rounded-xl' variant='outline'>
            <ChevronLeftIcon className='size-4' />
            Previous Post
          </Button>
        </Link>
      ) : (
        <Button className='rounded-xl' variant='outline' disabled>
          <ChevronLeftIcon className='size-4' />
          Previous Post
        </Button>
      )}

      {nextPost ? (
        <Link className='ml-auto' href={`/blogs/${nextPost.slug}`}>
          <Button
            className='rounded-xl bg-sky-600/10 text-sky-600 hover:bg-sky-600/20 focus-visible:ring-sky-600/20 dark:bg-sky-400/10 dark:text-sky-400 dark:hover:bg-sky-400/20 dark:focus-visible:ring-sky-400/40'
            variant='outline'>
            Next Post
            <ChevronRightIcon className='size-4' />
          </Button>
        </Link>
      ) : (
        <Button
          className='ml-auto rounded-xl bg-sky-600/10 text-sky-600 hover:bg-sky-600/20 focus-visible:ring-sky-600/20 dark:bg-sky-400/10 dark:text-sky-400 dark:hover:bg-sky-400/20 dark:focus-visible:ring-sky-400/40'
          variant='outline'
          disabled>
          Next Post
          <ChevronRightIcon className='size-4' />
        </Button>
      )}
    </div>
  );
}

function AuthorAvatar() {
  return (
    <svg
      width='157'
      height='14'
      viewBox='80 0 157 30'
      fill='currentColor'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M0 26.9587C0.810895 26.7225 1.09863 26.0662 1.09863 23.835V11.5762C1.09863 9.31875 0.810895 8.68875 0 8.4525V8.085H4.44684V8.4525C3.60979 8.68875 3.34821 9.31875 3.34821 11.5762V25.6462C3.34821 26.4337 3.79289 26.88 4.60379 26.88H7.87353C10.5155 26.88 11.7449 26.2237 12.7127 24.15L13.0005 24.2025L12.8174 27.3263H0V26.9587ZM14.7531 20.8425C14.7531 16.38 18.2321 13.3875 22.2081 13.3875C25.7917 13.3875 27.8582 15.645 27.9628 18.2437H16.8457C16.7934 18.6637 16.7672 19.0575 16.7672 19.5037C16.7672 23.2575 19.1737 25.8562 22.862 25.8562C25.0593 25.8562 26.6287 24.885 27.9105 23.4675L28.1721 23.7038C26.7334 25.62 24.5099 27.5888 21.4756 27.5888C18.3628 27.5888 14.7531 25.3837 14.7531 20.8425ZM25.6871 17.8762C25.3993 16.0387 23.856 13.8862 21.2664 13.8862C18.8598 13.86 17.395 15.5925 16.9242 17.8762H25.6871ZM39.5507 26.4862V21.5512C38.6875 24.9112 36.3333 27.5888 33.5606 27.5888C31.4941 27.5888 29.6631 26.355 29.6631 23.9925C29.6631 21.1313 32.5927 20.055 35.9148 19.1625L39.5507 18.1912C39.4199 15.5138 38.0074 14.28 35.6271 14.28C33.9529 14.28 32.3312 15.0675 30.9448 16.7212L30.6832 16.5112C32.2788 14.5687 34.3192 13.3875 36.7518 13.3875C40.1262 13.3875 41.6957 15.225 41.6957 18.3225V23.8087C41.6957 26.0662 41.9573 26.6962 42.8205 26.9587V27.3H40.3878C39.8385 27.3 39.5507 27.0112 39.5507 26.4862ZM34.6069 25.9612C37.5889 25.9612 39.5246 22.26 39.5507 19.3725V18.5587L36.0194 19.4775C33.9529 20.055 31.7295 20.9737 31.7557 23.205C31.7557 24.99 33.0113 25.9612 34.6069 25.9612ZM44.4161 26.9587C45.3316 26.6962 45.5671 26.0662 45.5671 23.8087V17.5087C45.5671 15.5925 45.227 15.3037 44.4161 14.9887V14.6737L47.5812 13.3612L47.8166 13.545V15.9075C49.4907 14.6212 51.688 13.3875 53.9114 13.3875C56.7365 13.3875 58.4629 14.9362 58.4629 18.165V23.8087C58.4629 26.0662 58.6983 26.6962 59.5877 26.9587V27.3H55.0624V26.9587C55.9517 26.6962 56.2133 26.0662 56.2133 23.8087V18.7162C56.2133 15.855 54.9577 14.28 52.4204 14.28C50.8248 14.28 49.2815 15.1988 47.8166 16.3538V23.8087C47.8166 26.0662 48.1044 26.6962 48.9676 26.9587V27.3H44.4161V26.9587ZM103.271 23.8087V13.8862H101.44V13.4925L105.076 10.0538H105.495V13.4925H109.837L109.68 13.8862H105.495V23.8087C105.495 25.6987 106.28 26.4337 107.509 26.4337C108.32 26.4337 109.314 26.0662 110.256 24.9637L110.517 25.2262C109.288 26.6175 107.823 27.7987 106.149 27.7987C104.344 27.7987 103.271 26.7225 103.271 23.8087ZM111.485 20.9475C111.485 16.3538 114.912 13.3087 118.783 13.3087C122.288 13.3087 124.328 15.5925 124.407 18.27H113.525C113.473 18.69 113.447 19.11 113.447 19.5562C113.447 23.415 115.827 26.04 119.437 26.04C121.582 26.04 123.099 25.0687 124.381 23.5987L124.642 23.8612C123.204 25.83 121.033 27.7987 118.077 27.7987C115.016 27.7987 111.485 25.5675 111.485 20.9475ZM122.184 17.9025C121.896 16.0125 120.405 13.8075 117.867 13.8075C115.513 13.7812 114.075 15.54 113.63 17.9025H122.184ZM126.447 20.9475C126.447 16.5112 130.057 13.3087 134.216 13.3087C136.963 13.3087 139.082 14.07 139.082 14.8312C139.082 15.4612 138.192 16.3275 137.277 16.3275C136.57 16.3275 135.21 15.5138 132.934 13.755C130.266 14.2013 128.488 16.5375 128.488 19.5562C128.488 23.415 130.894 26.04 134.609 26.04C136.832 26.04 138.401 25.0687 139.709 23.5987L139.971 23.8612C138.506 25.83 136.283 27.7987 133.222 27.7987C129.9 27.7987 126.447 25.4625 126.447 20.9475ZM141.122 27.1687C142.011 26.9062 142.273 26.2762 142.273 23.9662V9.0825C142.273 7.14 141.907 6.85125 141.122 6.51V6.195L144.208 4.85625L144.47 5.04V15.8812C146.092 14.5687 148.263 13.3087 150.434 13.3087C153.207 13.3087 154.907 14.91 154.907 18.1912V23.9662C154.907 26.2762 155.142 26.9062 156.032 27.1687V27.5362H151.559V27.1687C152.448 26.9062 152.684 26.2762 152.684 23.9662V18.7425C152.684 15.8287 151.454 14.2275 148.969 14.2275C147.426 14.2275 145.909 15.1462 144.47 16.3275V23.9662C144.47 26.2762 144.705 26.9062 145.595 27.1687V27.5362H141.122V27.1687ZM80.514 28.35C80.4966 28.35 80.4791 28.35 80.4617 28.35C80.4268 28.35 80.3919 28.35 80.3571 28.35C80.3222 28.35 80.2786 28.3412 80.2263 28.3237C80.0868 28.3062 79.956 28.2625 79.8339 28.1925C79.2846 27.93 78.9184 27.3787 78.9184 26.7487V16.8525C78.9184 15.96 79.6246 15.2512 80.514 15.2512C81.4034 15.2512 82.1358 15.96 82.1358 16.8525V25.2787C87.4982 24.3862 91.6049 19.7137 91.6049 14.07C91.6049 7.79625 86.5303 2.70375 80.2786 2.70375C77.1396 2.70375 74.0792 4.01625 71.9081 6.3C69.8677 8.42625 68.8476 11.1562 68.9784 14.0175C69.1092 17.2463 69.8939 20.7375 74.5762 24.1237C75.1778 24.5437 75.3609 25.3837 74.9424 26.0137C74.5238 26.6437 73.6606 26.8012 73.0328 26.355C67.3566 22.2337 66.441 17.6663 66.2841 14.1225C66.101 10.5525 67.4089 7.11375 69.9462 4.43625C72.6405 1.6275 76.4072 0 80.2786 0C87.9952 0 94.2992 6.32625 94.2992 14.07C94.2992 21.7087 88.2044 28.1662 80.6186 28.35C80.5838 28.35 80.5489 28.35 80.514 28.35ZM83.0513 10.0275C83.0513 11.4187 81.9265 12.5475 80.514 12.5475C79.1276 12.5475 78.0028 11.4187 78.0028 10.0275C78.0028 8.61 79.1276 7.48125 80.514 7.48125C81.9265 7.48125 83.0513 8.61 83.0513 10.0275Z'
        fill='currentColor'
      />
    </svg>
  );
}
