'use client';

import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';
import { Post } from 'content-collections';
import { useEffect, useState } from 'react';

interface TocItem {
  id: string;
  title: string;
  level: number;
  icon?: string;
}

const extractHeadings = (content: string): TocItem[] => {
  const headingRegex = /^(#{2,3})\s+(.+?)(?:\s*\{#(.+?)\})?$/gm;
  const items: TocItem[] = [];
  let match;

  while ((match = headingRegex.exec(content)) !== null) {
    const hashes = match[1]; // "##" or "###"
    const title = match[2].trim(); // The heading text
    const customId = match[3]; // Optional custom ID

    // Generate ID from title if no custom ID provided
    const id =
      customId ||
      title
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-');

    items.push({
      id,
      title,
      level: hashes.length, // 2 for ##, 3 for ###
    });
  }

  return items;
};

export default function TableOfContent({ post }: { post: Post }) {
  const [tocItems, setTocItems] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const items = extractHeadings(post.content);
    // eslint-disable-next-line
    setTocItems(items);

    if (items.length > 0) {
      setActiveId(items[0].id);
    }
  }, [post.content]); // Dependency on post.content

  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    // Query the DOM and observe headings
    const headings = document.querySelectorAll('h2[id], h3[id]');
    headings.forEach((heading) => observer.observe(heading));

    return () => observer.disconnect();
  }, [tocItems]); // Re-observe when tocItems changes

  const handleClick = (id: string) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveId(id);
    }
  };

  // Group items: create structure where h2 items have their following h3 items
  const groupedItems: Array<{ main: TocItem; subs: TocItem[] }> = [];
  let currentGroup: { main: TocItem; subs: TocItem[] } | null = null;

  tocItems.forEach((item) => {
    if (item.level === 2) {
      // This is a main title, start a new group
      if (currentGroup) {
        groupedItems.push(currentGroup);
      }

      currentGroup = { main: item, subs: [] };
    } else if (item.level === 3 && currentGroup) {
      // This is a subtitle, add to current group
      currentGroup.subs.push(item);
    }
  });

  // Don't forget the last group
  if (currentGroup) {
    groupedItems.push(currentGroup);
  }

  if (tocItems.length === 0) {
    return (
      <div
        className={
          'lg:col-span-2 border rounded-md p-4 hidden lg:block sticky top-20 left-2 self-start h-dvh'
        }>
        <h3>On This Page</h3>
        <p className='text-sm text-muted-foreground mt-2'>Loading...</p>

        <ScrollArea className={'h-100 mt-4'}>
          <div className={'space-y-4'}>
            <Skeleton className={'w-full h-2'} />
            <Skeleton className={'w-full h-2'} />
            <Skeleton className={'w-full h-2'} />
          </div>
        </ScrollArea>
      </div>
    );
  }

  return (
    <div
      className={
        'lg:col-span-2 border rounded-md p-4 hidden lg:block sticky top-20 left-2 self-start h-fit'
      }>
      <h3>On This Page</h3>

      <Separator />

      <ScrollArea className={'h-100 mt-4'}>
        <nav>
          <ul className='space-y-3'>
            {groupedItems.map((group, groupIndex) => (
              <li key={`toc-group-${group.main.id}-${groupIndex}`}>
                <button
                  onClick={() => handleClick(group.main.id)}
                  className={`flex items-start gap-2 text-left transition-colors ${
                    activeId === group.main.id
                      ? 'text-foreground font-medium'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}>
                  <span
                    className={`mt-2.5 inline-block h-0.5 w-3 shrink-0 transition-colors ${
                      activeId === group.main.id
                        ? 'bg-primary'
                        : 'bg-primary/40'
                    }`}></span>
                  <span>{group.main.title}</span>
                </button>

                {/* Nested subtitles */}
                {group.subs.length > 0 && (
                  <ul className='mt-3 ml-5 space-y-3'>
                    {group.subs.map((subtitle, subIndex) => (
                      <li
                        key={`toc-sub-${subtitle.id}-${groupIndex}-${subIndex}`}>
                        <button
                          onClick={() => handleClick(subtitle.id)}
                          className={`flex items-start gap-2 text-left transition-colors ${
                            activeId === subtitle.id
                              ? 'text-foreground font-medium'
                              : 'text-muted-foreground hover:text-foreground'
                          }`}>
                          <span
                            className={`mt-2.5 inline-block h-0.5 w-3 shrink-0 transition-colors ${
                              activeId === subtitle.id
                                ? 'bg-primary'
                                : 'bg-primary/40'
                            }`}></span>
                          <span>{subtitle.title}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </ScrollArea>
    </div>
  );
}
