import { useState } from 'react';
import { SearchService } from '../service/SearchService';
import { ISearchResultListState } from '../types/hooks';
import useGetLocalStorageFuncs from './useGetLocalStorageFuncs';

const useSetSearchAPIResponse = () => {
  const [searchResultList, setSearchResultList] = useState<
    ISearchResultListState[]
  >([]);

  // Related API call
  const callSearchAPI = (debouncedValue: string) => {
    const searchService = new SearchService();
    return searchService.getSearchResult({
      sickNm_like: debouncedValue,
    });
  };

  const { getLocalItemToObject, setLocalStorageItem } =
    useGetLocalStorageFuncs();

  const setSearchAPIResults = async (debouncedValue: string) => {
    try {
      const searchAPIResults = await callSearchAPI(debouncedValue);
      setSearchResultList(searchAPIResults.data);

      setLocalStorageItem('cachedMaps', {
        ...getLocalItemToObject('cachedMaps'),
        [debouncedValue]: {
          data: searchAPIResults.data,
          expiredTime: new Date().getTime() + 1000 * 60 * 4,
        },
      });
    } catch (err) {
      throw new Error(`Error: in Cache`);
    }
  };

  return {
    setSearchAPIResults,
    searchResultList,
    setSearchResultList,
  };
};

export default useSetSearchAPIResponse;
