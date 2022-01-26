const leapYear = require('../src/leapYears');

test('returns true when a year divisible be 400 is entered', () => {
  expect(leapYear(1600)).toBe(true)
})