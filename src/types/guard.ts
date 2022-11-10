const isJSON = (str: string) => {
  try {
    const parsedJSON = JSON.parse(str);
    if (typeof parsedJSON === 'object') return true;
  } catch (e) {
    return false;
  }
};

export { isJSON };
