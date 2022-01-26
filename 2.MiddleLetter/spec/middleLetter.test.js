const middleLetter = require('../src/middleLetter');

test('returns middle letter of odd length word', () => {
  expect(middleLetter('three')).toBe('r')
})

test('returns middle letters of even length word', () => {
  expect(middleLetter('evenly')).toBe('en')
})