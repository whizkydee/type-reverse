// A smarter `typeof` function
const _typeof_ = v =>
  v === undefined ? 'undefined' : v === null ? 'null' : v.constructor.name.toLowerCase()

const is = {
  string:    i => _typeof_(i) === 'string',
  array:     i => _typeof_(i) === 'array',
  nodelist:  i => _typeof_(i) === 'nodelist',
  number:    i => _typeof_(i) === 'number',
  set:       i => _typeof_(i) === 'set'
}

const supportedTypes = i => is.string(i) || is.number(i) ||
  is.nodelist(i) || is.array(i) || is.set(i)

export { _typeof_, supportedTypes as supported }
