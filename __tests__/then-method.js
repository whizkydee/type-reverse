import reverse from '../build/index';

describe('Reverse dynamically via the then method', () => {

  test('reverse a string and do stuff via the then method', () => {
    const strReverse = reverse('I love cats', {
      then: (original, after) => `${original} was reversed to: ${after}`
    });
    expect(strReverse).toBe('I love cats was reversed to: stac evol I');
  });

  test('reverse a positive number and do stuff via the then method', () => {
    const positiveNumberCb = reverse(123, {
      invert: 'sign',
      then: (before, after) => `$${before + after}.00`
    });
    expect(positiveNumberCb).toBe('$0.00');
    expect(typeof positiveNumberCb).toBe('string');
  });

  test('reverse a negative number and do stuff via the then method', () => {
    const negativeNumberCb = reverse(-1234, {
      invert: 'sign',
      then: (before, after) =>
        `Initial: ${before}. Reversed: ${after}`
    });
    expect(negativeNumberCb).toEqual(`Initial: -1234. Reversed: 1234`);
  });


  test('reverse an array and compare w/ the original via the then method', () => {
    const arr = ['Lets', 'go', 'grab', 'a', 'drink'];
    const reversedArr = reverse(arr, {
      then: (_, after) => reverse(after)
    });
    expect(reversedArr).toEqual(arr);
  });

  test('take only the required parameter in the then method', () => {
    const arr = [1, 2, 3, 4];
    const reversedArr = reverse(arr, {then: (_, after) => after});
    expect(reversedArr).toEqual(reverse(arr));
  });

});
