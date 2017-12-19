'use strict';

const reverse = require('../dist/index');


describe('reverse({String})', () => {
  it('should reverse a string and return the result', () => {
    const text = reverse('pizza');
    expect(text).toEqual('azzip');
  });

  it('should reverse unicode characters and return the result', () => {
    const unicodeReverse = reverse('🚀🔥🚀🚀');
    expect(unicodeReverse).toEqual('🚀🚀🔥🚀');
  });

  it('should reverse unicode characters with strings then return the result', () => {
    const strUnicode = reverse('Horses: 🦄🐴');
    expect(strUnicode).toEqual('🐴🦄 :sesroH');
  });
});


describe('reverse({Number})', () => {
  it('should reverse a positive number and return the result', () => {
    const positiveNumber = reverse(1234);
    expect(positiveNumber).toEqual(4321);
  });

  it('should reverse a negative number and return the result', () => {
    const negativeNumber = reverse(-1234);

    expect(negativeNumber).toEqual(-4321);
    expect(negativeNumber).not.toEqual(4321);
  });
});


describe('reverse{Array}', () => {
  it('should reverse an array and return the result', () => {
    const arr = reverse(['I', 'would', 'love', 'to', 'have', 'some fun']);
    expect(arr).toEqual(arr);
  });
});


describe('string reverse via callback function', () => {
  it('should reverse a string and return stuff from the callback', () => {
    const strReverse =
      reverse('I love cats', (original, after) =>
        `${original} was reversed to: ${after}`);

    expect(strReverse).toEqual('I love cats was reversed to: stac evol I');
  });
});


describe('number reverse via callback function', () => {
  it('should reverse a positive number and return stuff from the callback', () => {
    const positiveNumberCb = reverse(1234, (before, after) => {
      return `The initial positive number was ${before} and was reversed to ${after}`;
    });

    expect(positiveNumberCb).toEqual(`The initial positive number was 1234 and was reversed to 4321`);
  });


  it('should reverse a negative number and return stuff from the callback', () => {
    const negativeNumberCb = reverse(-1234, (before, after) => {
      return `initial negative number: ${before}. reversed: ${after}`;
    });

    expect(negativeNumberCb).toEqual(`initial negative number: -1234. reversed: -4321`);
  });

});

describe('array reverse via callback function', () => {
  it('should reverse an array and return it to its previous state from the callback', () => {
    const arr = ['lets', 'grab a', 'drink'];
    const reversedArr = reverse(arr, (before, after) => {
      // return the array to the initial state
      return reverse(after);
    });

    expect(reversedArr).toEqual(arr);
  });
});

// describe('callback function optional paramters', () => {
//   it('')
// });
