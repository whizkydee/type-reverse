'use strict';

const reverse = require('../dist/index');

describe('reverse({ Array })', () => {
  it('should reverse an array of strings and return the result', () => {
    const arr = ['I', 'would', 'love', 'to', 'have', 'some fun'];
    const reversedArr = reverse(reverse(arr));
    expect(reversedArr).toEqual(arr);
  });

  it('should reverse an array of numbers and return the result', () => {
    const arr = [1, 2, 3, 4, 5, 1000];
    const reversedArr = reverse(arr);
    expect(reversedArr).toEqual([1000, 5, 4, 3, 2, 1]);
  });

  it('should reverse an array with several types of elements and return the result', () => {
    const arr = [1, 2, 'one', 'two', true, false];
    const reversedArr = reverse(arr);
    expect(reversedArr).toEqual([false, true, 'two', 'one', 2, 1]);
  });
});
