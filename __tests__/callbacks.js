const reverse = require('../dist/index');

describe('Callback Reverse', () => {
  test('should reverse a string and return stuff from the callback', () => {
    const strReverse = reverse('I love cats', (original, after) =>
      `${original} was reversed to: ${after}`);
    expect(strReverse).toBe('I love cats was reversed to: stac evol I');
  });
  
  test('should reverse a positive number and return stuff via the callback', () => {
    const positiveNumberCb = reverse(123, (before, after) => `$${before + after}.00`);
    expect(positiveNumberCb).toBe('$0.00');
    expect(typeof positiveNumberCb).toBe('string');
  });
  
  test('should reverse a negative number and return stuff via the callback', () => {
    const negativeNumberCb = reverse(-1234,
      (before, after) => `Initial: ${before}. Reversed: ${after}`);
    expect(negativeNumberCb).toEqual(`Initial: -1234. Reversed: 1234`);
  });
  
  
  test('should reverse an array and compare with the original via the callback', () => {
    const arr = ['Lets', 'go', 'grab', 'a', 'drink'];
    const reversedArr = reverse(arr, (before, after) => reverse(after));
    expect(reversedArr).toEqual(arr);
  });
  
  test('should take only the required parameters from the callback', () => {
    const arr = [1, 2, 3, 4];
    const reversedArr = reverse(arr, (undefined, after) => after);
    expect(reversedArr).toEqual(reverse(arr));
  });
});
