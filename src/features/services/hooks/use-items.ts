import { buildItems } from '@/lib/utils';
import { useEffect, useState } from 'react';

export function useItems(itemsCount: number) {
  const [items, setItems] = useState(() => buildItems(itemsCount));

  useEffect(() => {
    // eslint-disable-next-line
    setItems((prev) => {
      if (prev.length === itemsCount) return prev;
      if (prev.length > itemsCount) return prev.slice(0, itemsCount);

      const last = prev[prev.length - 1];
      const prevRatio = last
        ? ([last.width, last.height] as AspectRatio)
        : undefined;
      const extra = buildItems(itemsCount - prev.length, prevRatio);

      return [...prev, ...extra];
    });
  }, [itemsCount]);

  return items;
}
