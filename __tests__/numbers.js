import reverse from '../dist/index'

describe('number reverse', () => {
  test('reverse a number without specifying options', () => {
    const number = 12345
    expect(reverse(number)).toEqual(54321)
    expect(reverse(number)).not.toBeUndefined()
  })

  test('reverse a negative number without specifying options', () => {
    const number = -12345
    expect(reverse(number)).toEqual(-54321)
    expect(reverse(number)).not.toBeUndefined()
  })

  test('change the indexes of a positive number', () => {
    const number = 54321
    expect(reverse(number, {invert: 'index'}))
      .toEqual(12345)
  })

  test('change the indexes of a negative number', () => {
    const number = -54321
    expect(reverse(number, {invert: 'index'}))
      .toEqual(-12345)
  })

  test('turn a positive number to negative', () => {
    const number = 1234
    expect(reverse(number, {invert: 'sign'}))
      .toEqual(-1234)
  })

  test('turn a negative number to positive', () => {
    const number = -1234
    const reversed = reverse(number, {invert: 'sign'})
    expect(reversed).toEqual(1234)
  })
})
