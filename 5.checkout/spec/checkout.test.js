const checkout = require('../src/checkout');

test('checkout tallies the total cost of what is in the basket', () => {
  expect(checkout("ABC")).toBe(100)
  expect(checkout("AABC")).toBe(150)
  expect(checkout("CBC")).toBe(70)
})

test('checkout tallies the total cost including discount if applicable', () => {
  expect(checkout("AAA")).toBe(130)
  expect(checkout("BB")).toBe(45)
  expect(checkout("ABABAD")).toBe(190)
})

test('for any illegal inputs return -1', () => {
  expect(checkout("AaA")).toBe(-1)
})