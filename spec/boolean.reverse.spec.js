'use strict';

const reverse = require('../dist/index');

describe('Reverse Booleans', () => {
  it('should reverse `false` and return `true`', () => {
    const boolean = false;
    const boolean2 = !1;
    expect(reverse(boolean)).toBeTruthy();
    expect(reverse(boolean2)).toBeTruthy();
  });

  it('should reverse `true` and return `false`', () => {
    const boolean = true;
    const boolean2 = !0;
    expect(reverse(boolean)).toBeFalsy();
    expect(reverse(boolean2)).toBeFalsy();
  });
});
