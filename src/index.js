/*!
 * type-reverse <https://github.com/whizkydee/type-reverse>
 *
 * Copyright (c) 2017-present, Olaolu Olawuyi.
 * Released under the MIT License.
 */

'use strict';

/**
 * Lightweight reverse utility around strings, arrays, numbers and more.
 *
 * @name reverse
 * @alias inverse
 * @param {String|Number|Array|NodeList|Boolean} `input`
 * @param {?Object} `options`
 * @return {undefined}
 * @api public
 */

import {
  typeOf,
  supportedTypes
} from './util/is';

function reverse(input, options = {}) {
  if (!supportedTypes(input)) throw new TypeError(
    `Failed to apply 'reverse': ${typeOf(input)}s are not supported`
  );

  // map the options!
  const opts = {
    bigInt: options.bigInt || false,
    invert: options.invert || 'character',
    then: options.then || ((_, v) => v)
  };

  // create a new array, copy the items of the initial into the new
  // then reverse the new array.
  const globArr = [...input].reverse();
  let result;

  switch ( typeOf(input) ) {
    case 'string':
      switch (opts.invert) {
        case 'char':
        case 'character':
          result = globArr.join('');
        break;
        case 'word':
          result = input.split(' ').reverse().join(' ');
        break;
      }
    break;

    case 'number':
      options.invert = (options.invert === undefined) ? 'index' : options.invert;

      // convert the number to string then replace the minus(-) symbol with nothing
      const nStr = String(input).replace(/^-/, '');
      if ( /e/.test(nStr) ) throw new TypeError('Oops. That number is too large. See https://github.com/whizkydee/type-reverse/blob/dev/readme.md#limits for more info.');

      switch (opts.invert) {
        case 'sign':
          result = ( /^-/.test(input) ) ? Number(+nStr) : Number(-nStr);
        break;
        case 'index':
          result = ( /^-/.test(input) ) ?
            reverse(nStr, {then: (_, x) => Number(-x)}) :
            reverse(nStr, {then: (_, x) => Number(x)});
        break;
      }
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

  const then = options.then;

  if (typeof then === 'function') return then(input, result);
  else if (then && typeof then !== 'function') throw new TypeError(
    `Failed to apply 'reverse': Expected function as second argument, got ${typeOf(then)}.`
  );

  return result;
}

export default reverse;
module.exports = reverse;
