const middleLetter = require('../src/middleLetter');

test('returns string length', () => {
  expect(middleLetter('three').length).toBe(5)
})