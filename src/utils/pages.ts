const replaceMatchedTextToBold = (
  searchSentence: string,
  typedSearchWord: string
) => {
  const isMatchedTextRegExp = new RegExp(typedSearchWord, 'g');

  return searchSentence.replace(
    isMatchedTextRegExp,
    `<strong>${typedSearchWord}</strong>`
  );
};

export { replaceMatchedTextToBold };
