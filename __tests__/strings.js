import reverse from '../dist/index'

describe('string reverse', () => {
  test('reverse a string without options', () => {
    const text = 'pizza'
    expect(reverse(text)).toBe('azzip')
    expect(reverse(text)).not.toBeUndefined()
  })

  test('swap the words in a string', () => {
    const text = 'hello world'
    expect(reverse( text, {invert: 'word'} ))
      .toBe('world hello')
  })

  test('swap the indexes in a string', () => {
    const text = 'hello'
    expect(reverse( text, {invert: 'index'} ))
      .toBe('olleh')
  })

  test('reverse unicode characters', () => {
    const unicode = '🚀🔥🚀🚀'
    expect(reverse(unicode)).toBe('🚀🚀🔥🚀')
  })

  test('reverse unicode characters with text', () => {
    const unicode = 'Animals: 🐆🐕'
    expect(reverse(unicode)).toBe('🐕🐆 :slaminA')
  })
})
