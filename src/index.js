/*!
 * type-reverse <https://github.com/whizkydee/type-reverse>
 *
 * Copyright (c) 2017, Olaolu Olawuyi.
 * Released under the MIT License.
 */

'use strict';

/**
 * Lightweight reverse utility around strings, arrays, numbers and more.
 *
 * @name reverse
 * @alias inverse
 * @param {String|Number|Array|NodeList|Boolean} `input`
 * @param {Object} `options`
 * @return {undefined}
 * @api public
 */

import {
  typeOf,
  supportedTypes
} from './util/is';

function reverse(input, options = {}) {
  if (!supportedTypes(input))
    throw new TypeError(`Failed to apply 'reverse': ${typeOf(input)}s are not supported`);

  const opts = {
    then: options.then || function(before, after) {
      return after;
    },
    invert: options.invert || 'character',
    bigInt: options.bigInt || false
  };

  // create a new array, copy the items of the initial into the new
  // then reverse the newly created array.
  let globArr = [...input].reverse();
  let result;

  switch (typeOf(input)) {
    case 'string':
      if (opts.invert === 'character') result = globArr.join('');
      else if (opts.invert === 'word') result = input.split(' ').reverse().join(' ');
    break;

    case 'number':
      // convert the number to string then replace the minus(-) symbol with nothing
      const nStr = String(input).replace(/^-/, '');

      if (/e/.test(nStr)) {
        throw new TypeError('Oops. That number is too large. See https://github.com/whizkydee/type-reverse/blob/dev/readme.md#limits for more info.');
      }
      result = (/^-/.test(input)) ? Number(`+${nStr}`) : Number(`-${nStr}`);
    break;

    case 'array':
    case 'nodelist':
      result = globArr;
    break;

    case 'boolean':
      result = !input;
    break;

    default:
      result = reverse(input);
    break;
  }

  if (typeof options.then === 'function') {
    return options.then(input, result);
  } else if (options.then &&
      typeof options.then !== 'function'
  ) {
    throw new TypeError(
      `Failed to apply 'reverse': Expected function as second argument, got ${typeOf(options.then)}.`
    );
  }
  return result;
}

export default reverse;
module.exports = reverse;
