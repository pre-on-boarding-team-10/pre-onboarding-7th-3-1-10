import { useEffect, useState } from 'react';
import { IAPIDebounceResState, TAPICallback } from '../types/hooks';

const useAPIDebounce = (
  debouncedValue: string,
  apiCallback: TAPICallback,
  isNoCallAPI?: boolean
) => {
  const [responseList, setResponseList] = useState<IAPIDebounceResState[]>([]);

  useEffect(() => {
    if (debouncedValue === '') setResponseList([]);
    if (isNoCallAPI) return;

    const setResponseListAfterCallAPI = async () => {
      const apiResponses = await apiCallback(debouncedValue);
      setResponseList(apiResponses.data);
    };

    setResponseListAfterCallAPI();
  }, [debouncedValue, isNoCallAPI]);

  return responseList;
};

export default useAPIDebounce;
