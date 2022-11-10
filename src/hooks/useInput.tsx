import { useState } from 'react';
export default function useInput() {
  const [inputValue, setInputValue] = useState<string>('');

  const onChange = (e: any) => {
    setInputValue(e.target.value);
  };

  return { inputValue, onChange };
}
