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
 * ```js
 * reverse('pizza')
 * //=> "azzip"
 *
 * const text = 'I love cats'
 * reverse(text, (original, after) => {
 *   return `${original} was reversed to: ${after}`
 * })
 * //=> "I love cats was reversed to: stac evol I"
 * ```
 *
 * @name reverse
 * @alias inverse
 * @param {String|Number|Array|NodeList} `input`
 * @param {Function} `callback`
 * @return {undefined}
 * @api public
 */

import { is, typeOf } from './is';
import arrVerse from './array-reverse';

function reverse(input, callback) {
  // throw an error if the input isn't among the supported types
  if (
    !is.string(input) &&
    !is.number(input) &&
    !is.nodelist(input) &&
    !is.array(input)
  ) throw new TypeError(`the reverse function cannot be executed on ${typeOf(input)}s`);

  let reversed;

  switch (typeOf(input)) {
    case 'string':
      reversed = [...input].reverse().join('');
    break;

    case 'number':
      // convert the number to string then replace the minus(-) symbol with nothing
      const nStr = reverse(String(input),
        (undefined, after) => after.replace(/-$/, ''));

      // since `-` has been replaced earlier, check if the number input actually contains...
      // a minus(-). if yes, insert a minus symbol at the beginning of the string...
      // otherwise, just convert the steing to a number.
      if (/^-/.test(input))
        reversed = Number(`-${nStr}`);
      else
        reversed = Number(nStr);
    break;

    case 'array':
    case 'nodelist':
      reversed = arrVerse(input);
    break;

    default:
      reversed = reverse(input);
    break;
  }
  if ( is.function(callback) )
    return callback.apply(this, [input, reversed]);
  else if ( callback && !is.function(callback) )
    throw new TypeError(`Expected function as argument, got ${typeOf(callback)} instead.`);

  return reversed;
}

export default reverse;

module.exports = reverse;
module.exports.default = reverse;
