# type-reverse

[![Build Status](https://api.travis-ci.com/whizkydee/type-reverse.svg?token=zXdJsUqADmau83i9KNqF&branch=master)](https://travis-ci.org/whizkydee/type-reverse) [![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest) [![Made in Nigeria](https://img.shields.io/badge/made%20in-nigeria-008751.svg)](https://github.com/acekyd/made-in-nigeria)

> 🦄 Lightweight reverse utility around strings, arrays, numbers and more.

## Install

```sh
$ npm install --save type-reverse
```

## Usage

```js
const reverse = require('type-reverse');
```

or...

```js
import reverse from 'type-reverse';
```

### API

#### reverse( input[, options, callback] )

**Params**

- `input` **{String|Number|Array|Set|NodeList}**
- `options` **{?Object}**
- `callback` **{?Function}**
- `returns` **{\*}**

```js
reverse('pizza');
//=> azzip
```

Works with numbers too.

```js
reverse(1234);
//=> 4321
```

## Reversing arrays...

When JavaScript's _Array#reverse_ method is used, elements in the original array lose their initial indexes, this is termed, **destructive array reversal**. On the other hand, this utility adopts the **non-destructive array reversal** method, which means the `reverse()` function returns the reversed array and still maintains the indexes of the elements in the original array without making any changes to it.

#### native reverse...

```js
const arr = [1, 2, 3];
arr.reverse(); //=> [3, 2, 1]
```

Oops, we lost the indexes of elements in the initial array...

```js
console.log(arr); //=> [3, 2, 1]
```

vs...

#### 🦄 to the rescue...

```js
const arr = [1, 2, 3];
reverse(arr); //=> [3, 2, 1]
```

Yay! The indexes of elements in `arr` are still maintained...

```js
console.log(arr); //=> [1, 2, 3]
```

### Sets

If you've been wondering how to reverse Sets in JavaScript, here's it! The core `reverse` function can take in a `Set` as the input and then return the reversed `Set`...

```js
const set = new Set([5, 4, 3, 4, 5]);
reverse(set); //=> Set { 3, 4, 5 }
```

## options

`options` is the second parameter to the function call and it is an object with two available properties. It can also take in a falsy value which would implicity get converted to an empty object.

### `invert: {String}`

This property defaults to `index` and applies to strings and numbers only.

```js
reverse(/*...*/, {
  invert: '[index|word|sign]'
})
```

- `index` - interchanges the indexes of characters in the input...

  ```js
  reverse(12345, { invert: 'index' }); //=> 54321
  reverse('of... unicorns', { invert: 'index' }); //=> snrocinu ...fo
  ```

- `sign` - inverts the sign in a number...

  ```js
  reverse(1234, { invert: 'sign' }); //=> -1234
  ```

- `word` - swaps the location of words in a string...
  ```js
  reverse('of... unicorns', { invert: 'word' }); //=> unicorns of...
  ```

### `preserveZeros: {Boolean}`

This property defaults to `false`. It specifies whether to enforce preceding zeros in the result of a number that contains trailing zeros. See [#3](https://github.com/whizkydee/type-reverse/issues/4) for more info. Note that the result gets converted to a string.

```js
reverse(240, { preserveZeros: true }); //=> "042"
```

## `callback: {Function}`

The callback takes in a function with two optional parameters that represent `input` and `result` respectively.

- `input` - the initial input that was passed into the function
- `result` - the output from reversing the input

```js
const text = 'dog';

reverse(text, null, function(intitial, result) {
  return `${intitial} was changed to ${result}`;
}); //=> dog was changed to god
```

## Limits

Did you just try to reverse a reaally huge number? Unfortunately, this utility doesn't support very large numbers. Trying to do so with this utility would throw a **TypeError**.

## Author

**Olaolu Olawuyi**

- [github/whizkydee](https://github.com/whizkydee)
- [twitter/mrolaolu](https://twitter.com/mrolaolu)

## License

MIT © [Olaolu Olawuyi](https://olaolu.me)
