import reverse from '../build/index';

describe('Array Reverse', () => {

  test('reverse an array of strings', () => {
    const arr = ['I', 'would', 'love', 'to', 'have', 'some fun'];
    const reversedArr = reverse(arr);
    expect(reversedArr).not.toEqual(arr);
    // expect the original array to still retain its items
    expect(reverse(reversedArr)).toEqual(arr);
  });

  test('reverse an array of numbers', () => {
    const arr = [1, 2, 3, 4, 5, 1000];
    const reversedArr = reverse(arr);
    expect(reversedArr).toEqual([1000, 5, 4, 3, 2, 1]);
    // expect the original array to still retain its items
    expect(reverse(reversedArr)).toEqual(arr);
  });

  test('reverse an array with several types of elements', () => {
    const arr = [1, 2, 'one', 'two', true, false];
    const reversedArr = reverse(arr);
    expect(reversedArr).toEqual([false, true, 'two', 'one', 2, 1]);
    // expect the original array to still retain its items
    expect(reverse(reversedArr)).toEqual(arr);
  });

});
