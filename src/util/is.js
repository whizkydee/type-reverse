// A smarter `typeof` function
const typeOf = v =>
  v === undefined ? 'undefined' : v === null ? 'null' : v.constructor.name.toLowerCase()

const is = {
  string:    i => typeOf(i) === 'string',
  array:     i => typeOf(i) === 'array',
  nodelist:  i => typeOf(i) === 'nodelist',
  number:    i => typeOf(i) === 'number',
  boolean:   i => typeOf(i) === 'boolean'
}

const supportedTypes = i =>
  is.string(i) || is.number(i) || is.nodelist(i) || is.array(i) || is.boolean(i)

export { typeOf, is, supportedTypes }
