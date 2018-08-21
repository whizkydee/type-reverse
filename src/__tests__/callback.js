import reverse from '../../build/index';

describe('reverse dynamically via the callback', () => {
  test('reverse a string and do stuff via the callback', () => {
    const string = 'I love cats';
    expect(reverse(string, null, (a, b) => `${a} was changed to: ${b}`)).toBe(
      'I love cats was changed to: stac evol I'
    );
  });

  test('reverse a positive number and do stuff via the callback', () => {
    const number = 12095;
    const reversed = reverse(
      number,
      { invert: 'sign' },
      (a, b) => `$${a + b}.00`
    );

    expect(reversed).toBe('$0.00');
  });

  test('reverse a negative number and do stuff via the callback', () => {
    const number = -1234;
    expect(
      reverse(
        number,
        { invert: 'sign' },
        (a, b) => `Initial: ${a}. Reversed: ${b}`
      )
    ).toEqual(`Initial: -1234. Reversed: 1234`);
  });

  test('reverse an array and compare w/ the original via the callback', () => {
    const arr = ['Lets', 'go', 'grab', 'a', 'drink'];
    const reversed = reverse(arr, null, (_, after) => reverse(after));
    expect(reversed).toEqual(arr);
  });

  test('take only the required parameter in the callback', () => {
    const arr = [1, 2, 3, 4];
    const reversed = reverse(arr, null, (_, after) => after);
    expect(reversed).toEqual(reverse(arr));
  });
});
