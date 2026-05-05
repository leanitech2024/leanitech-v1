import { allPosts, Post } from 'content-collections';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import Link from 'next/link';

import { Button, buttonVariants } from '@/components/ui/button';

export default function PostNavigation(props: { currentPost: Post }) {
  const { currentPost } = props;
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
        <Link
          href={`/blogs/${previousPost.slug}`}
          className={buttonVariants({
            variant: 'secondary',
            className: 'rounded-full!',
          })}>
          <ChevronLeftIcon className='size-4' />
          Previous Post
        </Link>
      ) : (
        <Button className='rounded-full!' variant='secondary' disabled>
          <ChevronLeftIcon className='size-4' />
          Previous Post
        </Button>
      )}

      {nextPost ? (
        <Link
          className={buttonVariants({
            variant: 'secondary',
            className: 'rounded-full!',
          })}
          href={`/blogs/${nextPost.slug}`}>
          Next Post
          <ChevronRightIcon className='size-4' />
        </Link>
      ) : (
        <Button className='rounded-xl!' variant='outline' disabled>
          Next Post
          <ChevronRightIcon className='size-4' />
        </Button>
      )}
    </div>
  );
}
