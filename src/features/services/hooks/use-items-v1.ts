import { useMemo } from 'react';

type GridItem = {
  id: string;
  width: number;
  height: number;
  imgSrc?: string;
  videoSrc?: string;
};

export function useMasonaryItems(itemsCount: number, itemsData: GridItem[]) {
  return useMemo(() => {
    const result = itemsData.slice(0, itemsCount).map((item) => ({
      ...item,
      aspectRatio: item.width / item.height,
    }));

    return result;
  }, [itemsCount, itemsData]);
}
