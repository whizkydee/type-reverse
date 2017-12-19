// non-destructive array reverse function
const arrVerse = arr => {
  let temp = [], len = arr.length;
  for (let i = (len - 1); i >= 0; i-- )
    temp.push(arr[i]);
  return temp;
};

export default arrVerse;
