/*!
 * type-reverse <https://github.com/whizkydee/type-reverse>
 *
 * Copyright (c) 2017-present, Olaolu Olawuyi.
 * Released under the MIT License.
 */

'use strict'

/**
 * 🦄 Lightweight reverse utility around strings, arrays, numbers and more.
 *
 * @name reverse
 * @alias inverse
 * @param {String|Number|Array|Set|NodeList} `input`
 * @param {?Object} `options`
 * @return {*}
 * @api public
 */

import { _typeof, supported, errprefix } from './util'

function reverse(input, options = {}) {
  const globArr = [...input].reverse(),
    then = options.then,
    minusRE = /^-/

  if (input && !supported(input)) throw new TypeError(
    `${errprefix} ${_typeof(input)}s are not supported`
  )

  options.invert = options.invert || 'index'
  options.then = then || ( (_, v) => v )

  let result
  switch ( _typeof(input) ) {
    case 'string':
      switch (options.invert) {
        case 'index': result = globArr.join(''); break
        case 'word': result = input.split(' ').reverse().join(' '); break
      }
    break

    case 'number':
      // convert the number to string then replace the minus(-) symbol with nothing
      const nStr = String(input).replace(minusRE, '')

      if (/e/.test(nStr)) throw new TypeError('Oops. That number is too large. See https://github.com/whizkydee/type-reverse/blob/master/readme.md#limits for more info.')

      switch (options.invert) {
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

    case 'array': case 'nodelist': result = globArr; break

    case 'set': result = new Set(globArr); break

    default: result = reverse(input); break
  }

  if (typeof then === 'function') return then.call(this, input, result)
  if (then && typeof then !== 'function') throw new TypeError(
    `${errprefix} Expected function as second argument, got ${_typeof(then)}.`
  )
  return result
}

export default reverse
module.exports = reverse
