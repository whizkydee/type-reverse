// A smarter `typeof` function
const kindof = v =>
  v === undefined ? 'undefined' : v === null ? 'null' : v.constructor.name.toLowerCase()

const is = {
  set: i => kindof(i) === 'set',
  array: i => kindof(i) === 'array',
  string: i => kindof(i) === 'string',
  number: i => kindof(i) === 'number',
  nodelist: i => kindof(i) === 'nodelist'
}

const supported = i => is.string(i) || is.number(i) || is.nodelist(i) || is.array(i) || is.set(i)

export { kindof, supported }
