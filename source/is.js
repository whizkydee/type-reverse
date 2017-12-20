// A smarter `typeof` function
export const typeOf = v =>
  v === undefined ? 'undefined' : v === null ? 'null' : v.constructor.name.toLowerCase();

// object map for typeOf checks.
const is = {
  string:    i => typeOf(i) === 'string',
  array:     i => typeOf(i) === 'array',
  nodelist:  i => typeOf(i) === 'nodelist',
  object:    i => typeOf(i) === 'object',
  number:    i => typeOf(i) === 'number',
  function:  i => typeOf(i) === 'function',
  func:      i => typeOf(i) === 'function',
  boolean:   i => typeOf(i) === 'boolean'
};

// supported types
export const supportedTypes = i =>
  is.string(i) || is.number(i) || is.nodelist(i) || is.array(i) || is.boolean(i);
