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

#### reverse(input, callback)

**Params**

* `input` **{String|Number|Array|NodeList|Boolean}**
* `callback` **{Function}**
* `returns` **{undefined}**

```js
reverse('pizza')
//=> "azzip"

reverse('🐆🐕')
//=> "🐕🐆"
```

_Note that reversing numbers with this utility just changes the signs._

## Booleans

For the record, this utility supports reversing booleans. I consider it a bad practice though.

```js
reverse(true)
//=> false

reverse(!1)
//=> true
```

## Non-destructive array reverse

When JavaScript's `Array.prototype.reverse()` method is used on arrays, the output of the array when reversed gets written into the original array, this is termed, **destructive array reversal**. On the other hand, this utility, adpots the **non-destructive array reversal** method, which means the `reverse()` function returns the reversed array and still retains the elements of the original array without making any changes to it.

```js
const arr = ['a', 'b', 'c']

reverse(arr)
//=> ['c', 'b', 'a']

console.log(arr)
//=> ['a', 'b', 'c']
```

### `callback`

The callback function accepts two optional parameters; `original` and/or `after`.
* `original` - the initial input that was passed into the function
* `after` - the reversed value of the input

```js
const text = 'I love cats'

reverse(text, (original, after) => {
  return `${original} was reversed to: ${after}`
})
//=> "I love cats was reversed to: stac evol I"
```

#### Manipulating stuff

```js
const text = 'I used to hate cats'

reverse(text, str => {
  return `${str}, but now ${str.replace('used to hate cats', `love 'em`)}`
})
//=> "I used to hate cats, but now I love 'em"
```


## Author

**Olaolu Olawuyi**

* [github/whizkydee](https://github.com/whizkydee)
* [twitter/mrolaolu](https://twitter.com/mrolaolu)

## License

MIT © [Olaolu Olawuyi](http://github.com/whizkydee)
