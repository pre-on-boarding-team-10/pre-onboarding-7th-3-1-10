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

    const isExpiredCache = () => {
      const todayOnTime = new Date().getTime();
      if (todayOnTime > localCachedMap.expiredTime) {
        return true;
      } else {
        return false;
      }
    };

    const isSavedAtCachedMaps = !!localCachedMap;

    if (isSavedAtCachedMaps) {
      if (isExpiredCache()) {
        delete localCachedMaps[debouncedValue];
        setLocalStorageItem('cachedMaps', localCachedMaps);
      } else {
        setSearchResultList(localCachedMap.data);
      }
      return;
    }

    setSearchAPIResults(debouncedValue);
  }, [debouncedValue]);

  return searchResultList;
};

export default useGetCachedSearchResultList;
