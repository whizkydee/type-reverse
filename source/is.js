// A smarter `typeof` function
export const typeOf = v =>
  v === undefined ? 'undefined' : v === null ? 'null' : v.constructor.name.toLowerCase();

// object map for typeOf checks.
/* eslint-disable no-unused-vars*/
export const is = {
  string: i => typeOf(i) === 'string',
  array: i => typeOf(i) === 'array',
  nodelist: i => typeOf(i) === 'nodelist',
  object: i => typeOf(i) === 'object',
  number: i => typeOf(i) === 'number',
  function: i => typeOf(i) === 'function'
};
