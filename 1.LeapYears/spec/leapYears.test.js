const leapYear = require('../src/leapYears');

test('returns true when a year divisible be 400 is entered', () => {
  expect(leapYear(1600)).toBe(true);
});

test('returns false when a year divisible be 100 but not by 400 is entered', () => {
  expect(leapYear(1700)).toBe(false);
});

test('All years divisible by 4 and not by 100 ARE leap years', () => {
  expect(leapYear(1700)).toBe(false);
  expect(leapYear(1704)).toBe(true);
});

test('All years not divisible by 4 ARE NOT leap years', () => {
  expect(leapYear(1707)).toBe(false);
})