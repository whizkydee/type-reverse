// non-destructive array reverse function
const arrVerse = arr => {
  let result = [], len = arr.length;
  for (let i = (len - 1); i >= 0; i-- )
    result.push(arr[i]);
  return result;
};

export { arrVerse };
