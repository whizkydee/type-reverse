// forked from https://www.hacksparrow.com/reversing-an-array-in-javascript.html
const arrVerse = arr => {
  let result = [], len = arr.length;
  for (
    let i = (len - 1);
    i >= 0; i--
  ) result.push(arr[i]);

  return result;
};

export { arrVerse };
