import { useState, useEffect } from 'react';
export default function useDebounce(intialValue: string, delay: number) {
  const [debounceValue, setDebounceValue] = useState<string>(intialValue);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceValue(intialValue);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [intialValue, delay]);

  return debounceValue;
}
