import { useCallback } from 'react';
import { isJSON } from '../types/guard';

const useGetLocalStorageFuncs = () => {
  const getLocalItemToObject = useCallback((key: string) => {
    const localItemData = localStorage.getItem(key) || '';
    if (isJSON(localItemData)) {
      return JSON.parse(localItemData);
    }
  }, []);

  const setLocalStorageItem = useCallback(
    (key: string, value: string) =>
      localStorage.setItem(key, JSON.stringify(value)),
    []
  );

  return { getLocalItemToObject, setLocalStorageItem };
};

export default useGetLocalStorageFuncs;
