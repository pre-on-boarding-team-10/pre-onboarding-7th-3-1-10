export default function useIncludeKeyword(debounceValue: any) {
  const exactWord = '';
  const sliceDebounceValue = debounceValue.trim().split('');
  for (let i = 0; i < window.localStorage.length; i++) {
    if (sliceDebounceValue.includes(localStorage.key(i))) {
      return exactWord + localStorage.key(i);
    }
  }
  return exactWord;
}
