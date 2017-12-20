'use strict';

const reverse = require('../distribution/index');

describe('reverse({ Number })', () => {
  it('should reverse a positive number and return the result', () => {
    const positiveNumber = reverse(1234);
    expect(positiveNumber).toEqual(-1234);
  });

  it('should reverse a negative number to make it positive', () => {
    const negativeNumber = reverse(-1234);
    expect(negativeNumber).toEqual(1234);
    expect(negativeNumber).not.toEqual(4321);
    expect(typeof negativeNumber).not.toBe('string');
  });

});
