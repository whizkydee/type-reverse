import reverse from '../build/index';

describe('String Reverse', () => {
  test('reverse a string without options', () => {
    const text = 'pizza';
    expect(reverse(text)).toBe('azzip');
  });

  test('swap the words in a string', () => {
    const text = 'hello world';
    expect(reverse( text, {invert: 'word'} ))
      .toBe('world hello');
  });

  test('reverse unicode characters', () => {
    const unicode = '🚀🔥🚀🚀';
    expect(reverse(unicode)).toBe('🚀🚀🔥🚀');
  });

  test('reverse unicode characters with text', () => {
    const unicode = 'Animals: 🐆🐕';
    expect(reverse(unicode)).toBe('🐕🐆 :slaminA');
  });
});
