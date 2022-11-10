import { useEffect, useState } from 'react';
import {
  IAPIDebounceResState,
  ICachedItem,
  TAPICallback,
} from '../types/hooks';

const useCache = (debouncedValue: string, apiCallback: TAPICallback) => {
  const [responseList, setResponseList] = useState<IAPIDebounceResState[]>([]);
  const localCachedMaps = localStorage.getItem('cachedMaps')
    ? JSON.parse(localStorage.getItem('cachedMaps') as string)
    : {};

  // 첫 번째

  useEffect(() => {
    // Functions
    const isCheckExpiredCache = (cachedMapItem: ICachedItem) => {
      const todayOnTime = new Date().getTime();
      if (todayOnTime > cachedMapItem.expiredTime) {
        delete localCachedMaps[debouncedValue];
        localStorage.setItem('cachedMaps', JSON.stringify(localCachedMaps));
        return true;
      } else {
        setResponseList(cachedMapItem.data);
        return false;
      }
    };

    const setResponseListAfterCallAPI = async () => {
      try {
        const apiResponses = await apiCallback(debouncedValue);
        setResponseList(apiResponses.data);
        localStorage.setItem(
          'cachedMaps',
          JSON.stringify({
            ...localCachedMaps,
            [debouncedValue]: {
              data: apiResponses.data,
              expiredTime: new Date().getTime() + 1000 * 60 * 4,
            },
          })
        );
      } catch (err) {
        throw new Error(`Error: in Cache`);
      }
    };

    if (!debouncedValue) {
      setResponseList([]);
      return;
    }

    const cachedMapItem = localCachedMaps && localCachedMaps[debouncedValue];
    const isSavedAtCachedMaps = !!cachedMapItem;
    const isExpiredCache =
      isSavedAtCachedMaps && isCheckExpiredCache(cachedMapItem);
    if (!isSavedAtCachedMaps || isExpiredCache) {
      setResponseListAfterCallAPI();
    }
  }, [debouncedValue]);

  return responseList;
};

export default useCache;
