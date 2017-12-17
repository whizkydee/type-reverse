# type-reverse [![Build Status](https://travis-ci.org/whizkydee/type-reverse.svg?branch=master)](https://travis-ci.org/whizkydee/type-reverse)

> Lightweight reverse utility for strings, arrays and numbers.



## Install

```sh
$ npm install --save-dev type-reverse
```


## Usage

```js
const reverse = require('type-reverse')

reverse('pizza')
//=> "azzip"
```

```js
const text = 'I love cats'
reverse(text, (original, after) => {
  return `${original} was reversed to: ${after}`
})
//=> "I love cats was reversed to: stac evol I"

```


## API

### reverse(input, callbackFn)


## License

MIT © [Olaolu Olawuyi](http://twitter.com/mrolaolu)
