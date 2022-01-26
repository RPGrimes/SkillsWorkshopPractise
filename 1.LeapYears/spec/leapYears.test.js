const leapYear = require('../src/leapYears');

test('returns the number entered', () => {
  expect(leapYear(1234)).toBe(1234)
})