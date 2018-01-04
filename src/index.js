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

import { is, typeOf, supportedTypes as supported } from './util/is'

function reverse(input, options = {}) {
  if (input && !supported(input)) throw new TypeError(
    `Failed to apply 'reverse': ${typeOf(input)}s are not supported`
  )

  const then = options.then
  const opts = {
    invert: options.invert || 'index',
    then: then || ((_, v) => v)
  }

  // create a new array, copy the items of the initial
  // into the new then reverse the new array.
  const globArr = (is.string(input) || is.array(input)) ?
    [...input].reverse() : undefined
  const minusRE = /^-/

  let result

  switch ( typeOf(input) ) {
    case 'string':
      switch (opts.invert) {
        case 'index':
          result = globArr.join('')
        break
        case 'word':
          result = input.split(' ').reverse().join(' ')
        break
      }
    break

    case 'number':
      // convert the number to string then replace the minus(-) symbol with nothing
      const nStr = String(input).replace(minusRE, '')
      if ( /e/.test(nStr) ) throw new TypeError('Oops. That number is too large. See https://github.com/whizkydee/type-reverse/blob/master/readme.md#limits for more info.')

      switch (opts.invert) {
        case 'sign':
          result = ( minusRE.test(input) ) ? Number(+nStr) : Number(-nStr)
        break
        case 'index':
          result = ( minusRE.test(input) ) ?
            reverse(nStr, { then: (_, x) => Number(-x) }) :
            reverse(nStr, { then: (_, x) => Number(x) })
        break
      }
    break

    case 'array':
    case 'nodelist':
      result = globArr
    break

    case 'boolean':
      result = !input
    break

    default:
      result = reverse(input)
    break
  }

  if (typeof then === 'function') return then.call(this, input, result)
  if (then && typeof then !== 'function') throw new TypeError(
    `Failed to apply 'reverse': Expected function as second argument, got ${typeOf(then)}.`
  )

  return result
}

export default reverse
module.exports = reverse
