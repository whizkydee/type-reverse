const reverse = require('../build/index')

describe('reverse dynamically via the then method', () => {

  test('reverse a string and do stuff via the then method', () => {
    const string = 'I love cats'
    expect(reverse(string, {
      then: (a, b) => `${a} was changed to: ${b}`
    })).toBe('I love cats was changed to: stac evol I')
  })

  test('reverse a positive number and do stuff via the then method', () => {
    const number = 12095
    const reversed = reverse(number, {invert: 'sign',
      then: (a, b) => `$${a + b}.00`
    })

    expect(reversed).toBe('$0.00')
  })

  test('reverse a negative number and do stuff via the then method', () => {
    const number = -1234
    expect(
      reverse(number, {invert: 'sign',
        then: (a, b) => `Initial: ${a}. Reversed: ${b}`
      })
    ).toEqual(`Initial: -1234. Reversed: 1234`)
  })


  test('reverse an array and compare w/ the original via the then method', () => {
    const arr = ['Lets', 'go', 'grab', 'a', 'drink']
    const reversed = reverse(arr, { then: (_, after) => reverse(after) })
    expect(reversed).toEqual(arr)
  })

  test('take only the required parameter in the then method', () => {
    const arr = [1, 2, 3, 4]
    const reversed = reverse(arr, {then: (_, after) => after})
    expect(reversed).toEqual(reverse(arr))
  })

})
