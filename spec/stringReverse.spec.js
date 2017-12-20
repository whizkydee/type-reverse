'use strict';

const reverse = require('../distribution/index');

describe('reverse({ String })', () => {
  it('should reverse a string and return the result', () => {
    const text = reverse('pizza');
    expect(text).toBe('azzip');
  });

  it('should reverse unicode characters and return the result', () => {
    const unicodeReverse = reverse('🚀🔥🚀🚀');
    expect(unicodeReverse).toBe('🚀🚀🔥🚀');
  });

  it('should reverse unicode characters with strings then return the result', () => {
    const strUnicode = reverse('Horses: 🦄🐴');
    expect(strUnicode).toBe('🐴🦄 :sesroH');
  });
});
