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
 * @param {Function} `callback`
 * @return {undefined}
 * @api public
 */

import {
  typeOf,
  supportedTypes
} from './is';

import { arrVerse } from './array-reverse';

function reverse(input, callback) {
  if (!supportedTypes(input))
    throw new TypeError(`Failed to apply 'reverse': ${typeOf(input)}s are not supported`);

  let result;
  switch (typeOf(input)) {
    case 'string':
      result = [...input].reverse().join('');
    break;

    case 'number':
      // convert the number to string then replace the minus(-) symbol with nothing
      const nStr = String(input).replace(/^-/, '');

      if (/e\w/.test(nStr)) {
        throw new TypeError('Oops. That number is too large. See https://github.com/whizkydee/type-reverse/blob/dev/readme.md#limits for more info.');
      }
      result = (/^-/.test(input)) ? Number(`+${nStr}`) : Number(`-${nStr}`);
    break;

    case 'array':
    case 'nodelist':
      result = arrVerse(input);
    break;

    case 'boolean':
      result = !input;
    break;

    default:
      result = reverse(input);
    break;
  }

  if (typeof callback === 'function') {
    return callback(input, result);
  } else if (callback && typeof callback !== 'function') {
    throw new TypeError(
      `Failed to apply 'reverse': Expected function as second argument, got ${typeOf(callback)}.`
    );
  }
  return result;
}

module.exports = reverse;
