import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { allPosts } from 'content-collections';

export default function BlogFilter() {
  const allCategories = allPosts.reduce((acc: string[], post) => {
    post.categories.forEach((category) => {
      // check the lowercase and uppercase is same or not
      const lowerCaseCategory = category.toLowerCase();
      const isDuplicate = acc.some(
        (existingCategory) =>
          existingCategory.toLowerCase() === lowerCaseCategory,
      );

      if (!acc.includes(category) && !isDuplicate) {
        acc.push(category);
      }
    });
    return acc;
  }, []);

  return (
    <div
      className={
        'lg:col-span-2 border rounded-md p-4 hidden lg:block sticky top-20 right-2 self-start h-full'
      }>
      <h4 className={'text-base'}>Filter</h4>
      <Separator className={'mb-2'} />
      <div className={'flex flex-wrap gap-2'}>
        {allCategories.map((category) => (
          <Badge
            key={crypto.randomUUID()}
            variant='outline'
            className={'capitalize'}>
            {category}
          </Badge>
        ))}
      </div>
    </div>
  );
}
