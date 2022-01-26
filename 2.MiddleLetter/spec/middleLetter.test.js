const middleLetter = require('../src/middleLetter');

test('returns middle letter', () => {
  expect(middleLetter('three')).toBe('r')
})