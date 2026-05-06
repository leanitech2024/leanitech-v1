import { MDXContent } from '@content-collections/mdx/react';
import { allPosts } from 'content-collections';
import {
  CheckCircle,
  ChevronLeftCircleIcon,
  Clock10Icon,
  XIcon,
} from 'lucide-react';
import Image from 'next/image';
import { notFound } from 'next/navigation';

import { Badge } from '@/components/ui/badge';
import { buttonVariants } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { seo } from '@/constants/seo';
import AuthorAvatar from '@/features/blogs/components/autor-avatar';
import BlogFilter from '@/features/blogs/components/blog-filter';
import PostNavigation from '@/features/blogs/components/post-navigation';
import TableOfContent from '@/features/blogs/components/table-of-content';
import type { Metadata, ResolvingMetadata } from 'next';
import Link from 'next/link';
import { Article, WithContext } from 'schema-dts';

type Props = PageProps<'/blogs/[slug]'>;

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { slug } = await params;

  const post = allPosts.find((post) => post.slug === slug);

  if (!post) {
    return {
      title: 'Blog not found',
    };
  }

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: post.title,
    description: post.description,
    keywords: post.categories.join(', '),
    metadataBase: seo.baseURL,
    authors: [
      {
        name: post.author,
      },
    ],
    creator: 'Abhijit K.',
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        noarchive: false,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },

    alternates: {
      canonical: `${seo.baseURL}/blogs/${post.slug}`,
      types: {
        title: post.title,
        url: `${seo.baseURL}/blogs/${post.slug}`,
      },
    },
    openGraph: {
      images: [post.cover, ...previousImages],
    },
  };
}

// https://www.npmjs.com/package/next-view-transitions

export default async function BlogPage(props: Props) {
  const params = await props.params;

  if (!params.slug) {
    notFound();
  }

  const slug = params.slug;

  const post = allPosts.find((post) => post.slug === slug);

  if (!post) {
    return notFound();
  }

  const jsonLd: WithContext<Article> = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    name: post.title,
    headline: post.title,
    description: post.description,
    image: post.cover,
    wordCount: post.mdx.split(' ').length,
    keywords: post.categories.join(', '),
    author: {
      '@type': 'Person',
      name: post.author,
      image: post.avatar,
    },
    datePublished: post.lastModified,
    dateModified: post.lastModified,
    copyrightHolder: {
      '@type': 'Organization',
      name: 'Leanitech',
    },
    copyrightNotice: `Copyright (c) ${new Date().getFullYear()} Leanitech. All rights reserved.`,
    license: 'https://www.leanitech.com/license',
    url: `https://www.leanitech.com/blogs/${post.slug}`,
    countryOfOrigin: 'IN',
    creator: {
      '@type': 'Person',
      name: post.author,
    },
    thumbnailUrl: post.cover,
  };

  return (
    <main className={'py-16'}>
      <section className={'grid grid-cols-12 relative'}>
        <TableOfContent post={post} />

        <div className={'col-span-full lg:col-span-8 space-y-4'}>
          <div className={'max-w-(--breakpoint-lg) px-6'}>
            <Link
              href={'/blogs'}
              className={buttonVariants({ variant: 'outline' })}>
              <ChevronLeftCircleIcon className={'size-4'} />
              Go Back
            </Link>
          </div>
          <div className={'max-w-(--breakpoint-lg)'}>
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
                  <Clock10Icon className={'size-4'} />
                  {post.readTime} min read
                </p>

                <p className={'text-xs flex flex-col'}>
                  {post.featured ? (
                    <Badge
                      variant='success'
                      className={'inline-flex items-center gap-1'}>
                      <CheckCircle className={'size-4'} />
                      Featured
                    </Badge>
                  ) : (
                    <Badge
                      variant='destructive'
                      className={'inline-flex items-center gap-1'}>
                      <XIcon className={'size-4'} />
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
                    {new Date(post.lastModified).toLocaleDateString('en-IN', {
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

        <BlogFilter />
      </section>

      <section className={'max-w-(--breakpoint-lg) mx-auto px-4 mt-16'}>
        <PostNavigation currentPost={post} />
      </section>

      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
        }}
      />
    </main>
  );
}
