// A smarter `typeof` function
const _typeof = v =>
  v === undefined ? 'undefined' : v === null ? 'null' : v.constructor.name.toLowerCase()

const is = {
  string:    i => _typeof(i) === 'string',
  array:     i => _typeof(i) === 'array',
  nodelist:  i => _typeof(i) === 'nodelist',
  number:    i => _typeof(i) === 'number',
  set:       i => _typeof(i) === 'set'
}

const supported = i => is.string(i) || is.number(i) ||
  is.nodelist(i) || is.array(i) || is.set(i)

const errprefix = "Failed to apply 'reverse':"

export { _typeof, errprefix, supported }
