import reverse from '../build/index'
import { _typeof_ } from '../build/util/is'

describe('set reverse', () => {
  test('reverse a set of strings', () => {
    const set = new Set(['I', 'would', 'love', 'to', 'have', 'some fun'])
    const reversedSet = reverse(set)
    expect(reverse(reversedSet)).toEqual(set)
  })

  test('reverse a set of numbers', () => {
    const set = new Set([1, 2, 3, 4, 5, 1000])
    const reversedSet = reverse(set)
    expect(reversedSet).toEqual(new Set([1000, 5, 4, 3, 2, 1]))
    expect(reverse(reversedSet)).toEqual(set)
  })

  test('reverse a set with duplicate items', () => {
    const set = new Set([1, 2, 3, 1, 3, 2])
    const reversedSet = reverse(set)
    expect(reversedSet).toEqual(new Set([3, 2, 1]))
    expect(_typeof_(reversedSet)).toBe('set')
  })

  test('reverse a set with several types of elements', () => {
    const set = new Set([1, 2, 'one', 'two', true, false])
    const reversedSet = reverse(set)
    expect(reversedSet).toEqual(new Set([false, true, 'two', 'one', 2, 1]))
    expect(reverse(reversedSet)).toEqual(set)
  })
})
