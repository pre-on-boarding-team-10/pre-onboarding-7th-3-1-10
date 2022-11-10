import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { cachedMapsAtom } from '../recoil/cache';
import {
  IAPIDebounceResState,
  ICachedItem,
  TAPICallback,
} from '../types/hooks';

const useCache = (debouncedValue: string, apiCallback: TAPICallback) => {
  const [responseList, setResponseList] = useState<IAPIDebounceResState[]>([]);
  const [cachedMaps, setCachedMaps] = useRecoilState(cachedMapsAtom);

  useEffect(() => {
    // Functions
    const isCheckExpiredCache = (cachedMapItem: ICachedItem) => {
      const todayOnTime = new Date().getTime();
      if (todayOnTime > cachedMapItem.expiredTime) {
        delete cachedMaps[debouncedValue];
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
        setCachedMaps(prev => ({
          ...prev,
          [debouncedValue]: {
            data: apiResponses.data,
            expiredTime: new Date().getTime() + 1000 * 10,
          },
        }));
      } catch (err) {
        throw new Error(`Error: in Cache`);
      }
    };

    const cachedMapItem = cachedMaps[debouncedValue];
    const isSavedAtCachedMaps = !!cachedMapItem;
    const isExpiredCache =
      isSavedAtCachedMaps && isCheckExpiredCache(cachedMapItem);

    if (!isSavedAtCachedMaps || isExpiredCache) {
      setResponseListAfterCallAPI();
    }
  }, [debouncedValue]);
  console.dir(cachedMaps);
  return responseList;
};

export default useCache;
