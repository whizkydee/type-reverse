# type-reverse

[![Build Status](https://api.travis-ci.com/whizkydee/type-reverse.svg?token=zXdJsUqADmau83i9KNqF&branch=dev)](https://travis-ci.org/whizkydee/type-reverse) [![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest) [![Made in Nigeria](https://img.shields.io/badge/made%20in-nigeria-008751.svg)](https://github.com/acekyd/made-in-nigeria)

> Lightweight reverse utility around strings, arrays, numbers and more.



## Install

```sh
$ npm install --save type-reverse
```


## Usage

```js
const reverse = require('type-reverse')
```

### API

#### reverse(input, options)

**Params**

* `input` **{String|Number|Array|NodeList|Boolean}**
* `options` **{?Object}**
* `returns` **{undefined}**

```js
reverse('pizza')
//=> azzip
```

## Non-destructive array reverse

When `[].reverse()` is used, the output of the array when reversed gets written into the original array, this is termed, **destructive array reversal**. On the other hand, this utility, adpots the **non-destructive array reversal** method, which means the `reverse()` function returns the reversed array and still retains the elements of the original array without making any changes to it.

```js
const arr = ['a', 'b', 'c']
reverse(arr) //=> ['c', 'b', 'a']
```

The elements in `arr` are still retained.
```js
console.log(arr) //=> ['a', 'b', 'c']
```

## `options.then`

The `then` method acts as a callback accepts two optional parameters; `original` and/or `after`.
* `original` - the initial input that was passed into the function
* `after` - the reversed value of the input

```js
const text = 'dog'

reverse(text, {
  then: (a, b) => `${a} was changed to ${b}`
}) //=> dog was changed to god
```


## Author

**Olaolu Olawuyi**

* [github/whizkydee](https://github.com/whizkydee)
* [twitter/mrolaolu](https://twitter.com/mrolaolu)

## License

MIT © [Olaolu Olawuyi](http://github.com/whizkydee)
