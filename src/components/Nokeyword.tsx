import { useEffect, useState } from 'react';

type items = {
  inputValue: string;
};
const Nokeyword = (inputValue: items) => {
  const [noresult, setNoresult] = useState(false);
  console.log(noresult);
  useEffect(() => {
    console.log(noresult);
    const delay = setTimeout(() => {
      setNoresult(prev => !prev);
    }, 1000);
    return () => clearTimeout(delay);
  }, [inputValue]);

  return <div>{noresult && <div>결과가 없습니다.</div>}</div>;
};

export default Nokeyword;

Nokeyword.defaultProps = {
  inputValue: null,
};
