/*!
 * type-reverse <https://github.com/whizkydee/type-reverse>
 *
 * Copyright (c) 2017, Olaolu Olawuyi.
 * Released under the MIT License.
 */

'use strict';

/**
 * Lightweight reverse utility for strings, arrays and numbers.
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
 * @param {String|Number|Array} `input`
 * @param {Function} `cb`
 * @return {undefined}
 * @api public
 */

// A smarter `typeof` function

const typeOf = v =>
  v === undefined ? 'undefined' : v === null ? 'null' : v.constructor.name.toLowerCase( )

// object map for typeOf checks.
const is = {
  string: i => typeOf( i ) === 'string',
  array: i => typeOf( i ) === 'array',
  object: i => typeOf( i ) === 'object',
  number: i => typeOf( i ) === 'number',
  function: i => typeOf( i ) === 'function'
}

// non-destructive array reverse function
const arrVerse = arr => {
  let temp = [ ], len = arr.length;
  for ( let i = ( len - 1 ); i >= 0; i-- )
    temp.push( arr[ i ] )
  return temp
}

function reverse( input, cb ) {
  // throw an error if the input isn't a string, object or array
  if (
    !is.string( input ) &&
    !is.number( input ) &&
    !is.array( input )
  ) throw new TypeError( `the reverse function cannot be executed on ${ typeOf( input ) }s` )

  let reversed
  switch ( typeOf( input ) ) {
    case 'string':
      reversed = [ ...input ].reverse( ).join( '' )
    break

    case 'number':
      const nStr = reverse( String( input ) )
      reversed = parseInt( nStr )
    break

    case 'array':
      reversed = arrVerse( input )
    break

    default:
      reversed = reverse(input)
    break
  }

  if ( is.function( cb ) ) {
    return cb.apply( this, [ input, reversed ] )
  } else if ( cb && !is.function( cb ) ) {
    throw new TypeError( `Expected function as argument, got ${ typeOf( cb ) } instead.` )
  }
  return reversed
}

// module.exports = reverse
