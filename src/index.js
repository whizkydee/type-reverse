/*!
 * type-reverse <https://github.com/whizkydee/type-reverse>
 *
 * Copyright (c) 2017-present, Olaolu Olawuyi.
 * Released under the MIT License.
 */

'use strict';

/**
 * 🦄 Lightweight reverse utility around strings, arrays, numbers and more.
 *
 * @name reverse
 * @alias inverse
 * @param {String|Number|Array|Set|NodeList} `input`
 * @param {?Object} `options`
 * @param {?Function} `callback`
 * @return {*}
 * @api public
 */

import { kindof, supported } from './util';

function reverse(input, options = {}, callback) {
  // eslint-disable-next-line no-extra-boolean-cast
  options = !!!options ? new Object : options;

  const newReversedArray = [...input].reverse(),
    enforceZeros = options.enforceZeros,
    minusRE = /^-/;

  if (input && !supported(input))
    throw new TypeError(
      "Failed to apply 'reverse': " + kindof(input) + 's are not supported'
    );

  options.invert = options.invert || 'index';
  options.enforceZeros = enforceZeros || false;
  callback = callback || ((_, v) => v);

  let result;
  switch (kindof(input)) {
    case 'string':
      switch (options.invert) {
        case 'index': result = newReversedArray.join(''); break;
        case 'word': result = input .split(' ').reverse().join(' '); break;
      }
      break;

    case 'number':
      // convert the number to string then replace the minus(-) symbol with nothing
      const positiveNumberAsString = String(input).replace(minusRE, '');
      const bigInt = /e/i.test(positiveNumberAsString);

      const containsTrailingZeros = /0+$/.test(positiveNumberAsString);

      // there's no need to stringify if...
      // 1. the input contains trailing zeros, but the enforceZeros option is disabled
      // 2. the input doesn't contain trailing zeros, but the enforceZeros option is enabled
      // 3. the input doesn't contain trailing zeros, and the enforceZeros option is disabled
      const noNeedToStringify =
        (containsTrailingZeros && !enforceZeros) ||
        (!containsTrailingZeros && enforceZeros) ||
        (!containsTrailingZeros && !enforceZeros);

      if (bigInt)
        throw new TypeError(
          'Oops. That number is too large. See https://github.com/whizkydee/type-reverse/blob/master/readme.md#limits for more info.'
        );

      switch (options.invert) {
        case 'sign':
          if (noNeedToStringify) {
            result = minusRE.test(input)
              ? Number(+positiveNumberAsString)
              : Number(-positiveNumberAsString);
          } else {
            result = minusRE.test(input)
              ? positiveNumberAsString
              : '-' + positiveNumberAsString;
          }
          break;
        case 'index':
          if (noNeedToStringify) {
            result = minusRE.test(input)
              ? reverse(positiveNumberAsString, null, (_, x) => Number(-x))
              : reverse(positiveNumberAsString, null, (_, x) => Number(x));
          } else {
            result = minusRE.test(input)
              ? reverse(positiveNumberAsString, null, (_, x) => '-' + x)
              : reverse(positiveNumberAsString, null, (_, x) => x);
          }
          break;
      }
      break;

    case 'set': result = new Set(newReversedArray); break;
    case 'array': case 'nodelist': result = newReversedArray; break;

    default: result = reverse(input); break;
  }

  if (typeof callback === 'function') return callback.call(this, input, result);
  if (callback && typeof callback !== 'function')
    throw new TypeError(
      "Failed to apply 'reverse': Expected function as third argument, got " +
        kindof(callback) +
        '.'
    );

  return result;
}

export default reverse;
module.exports = reverse;
