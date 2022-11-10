import { useEffect } from 'react';
import useSetSearchAPIResponse from './useSetSearchAPIResponse';
import useGetLocalStorageFuncs from './useGetLocalStorageFuncs';

const useGetCachedSearchResultList = (debouncedValue: string) => {
  const { getLocalItemToObject, setLocalStorageItem } =
    useGetLocalStorageFuncs();
  const localCachedMaps = getLocalItemToObject('cachedMaps');

  const { searchResultList, setSearchResultList, setSearchAPIResults } =
    useSetSearchAPIResponse();

  useEffect(() => {
    if (!debouncedValue) {
      setSearchResultList([]);
      return;
    }

    const localCachedMap = localCachedMaps[debouncedValue];

    const isCheckExpiredCache = () => {
      const { expiredTime, data } = localCachedMap;
      const todayOnTime = new Date().getTime();

      if (todayOnTime > expiredTime) {
        delete localCachedMaps[debouncedValue];
        setLocalStorageItem('cachedMaps', localCachedMaps);
        return true;
      } else {
        setSearchResultList(data);
        return false;
      }
    };

    const isSavedAtCachedMaps = !!localCachedMap;
    const isExpiredCache = isSavedAtCachedMaps && isCheckExpiredCache();
    if (!isSavedAtCachedMaps || isExpiredCache)
      setSearchAPIResults(debouncedValue);
  }, [debouncedValue]);

  return searchResultList;
};

export default useGetCachedSearchResultList;
