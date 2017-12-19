# type-reverse
<!-- [![Build Status](https://travis-ci.org/whizkydee/type-reverse.svg?branch=master)](https://travis-ci.org/whizkydee/type-reverse) -->

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

* `input` **{String|Number|Array|NodeList}**
* `callback` **{Function}**
* `returns` **{undefined}**

```js
reverse('pizza')
//=> "azzip"

reverse(1234)
//=> 4321

reverse(-1234)
//=> -4321
```

## Non-destructive array reverse

When JavaScript's `Array.prototype.reverse()` method is used on arrays, the output of the array when reversed gets written into the original array, this is termed, **destructive array reversal**. Meanwhile with this utility, **non-destructive array reversal** is adopted, which means the `reverse()` function returns the reversed array and still retains the elements of the original array.

```js
const arr = ['a', 'b', 'c']

reverse(arr)
//=> ['c', 'b', 'a']

console.log(arr)
//=> ['a', 'b', 'c']
```

## `callback`

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


## Author

**Olaolu Olawuyi**

* [github/whizkydee](https://github.com/whizkydee)
* [twitter/mrolaolu](https://twitter.com/mrolaolu)

## License

MIT © [Olaolu Olawuyi](http://github.com/whizkydee)
