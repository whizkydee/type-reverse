import reverse from '../../build/index';

describe('number reverse', () => {
  test('reverse a number without specifying options', () => {
    const number = 12345;
    expect(reverse(number)).toEqual(54321);
    expect(reverse(number)).not.toBeUndefined();
  });

  test('reverse a number with trailing zeros', () => {
    const number = 9000;
    expect(reverse(number)).toEqual(9);
    expect(reverse(number)).not.toBeUndefined();
  });

  test('reverse a number with trailing zeros and the option enabled', () => {
    const number = 2000;
    expect(reverse(number, { preserveZeros: true })).toBe('0002');
    expect(reverse(number, { preserveZeros: true })).not.toBe(2);
  });

  test('reverse a negative number with trailing zeros and the option enabled', () => {
    const number = -2000;
    expect(reverse(number, { preserveZeros: true, invert: 'sign' })).toEqual(
      '2000'
    );
    expect(reverse(number, { preserveZeros: true, invert: 'sign' })).not.toBe(
      2
    );
  });

  test('reverse a number without trailing zeros, but the option enabled', () => {
    const number = 9999;
    expect(reverse(number, { preserveZeros: true })).toEqual(9999);
  });

  test('reverse a negative number without specifying options', () => {
    const number = -12345;
    expect(reverse(number)).toEqual(-54321);
    expect(reverse(number)).not.toBeUndefined();
  });

  test('change the indexes of a positive number', () => {
    const number = 54321;
    expect(reverse(number, { invert: 'index' })).toEqual(12345);
  });

  test('change the indexes of a negative number', () => {
    const number = -54321;
    expect(reverse(number, { invert: 'index' })).toEqual(-12345);
  });

  test('turn a positive number to negative', () => {
    const number = 1234;
    expect(reverse(number, { invert: 'sign' })).toEqual(-1234);
  });

  test('turn a negative number to positive', () => {
    const number = -1234;
    const reversed = reverse(number, { invert: 'sign' });
    expect(reversed).toEqual(1234);
  });
});
