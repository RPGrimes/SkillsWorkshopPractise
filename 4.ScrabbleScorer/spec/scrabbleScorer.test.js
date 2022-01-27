const scrabbleScorer = require('../src/scrabbleScorer');

test('returns input word', () => {
  expect(scrabbleScorer('github')).toBe(12)
})

test('returns input word', () => {
  expect(scrabbleScorer('cabbage')).toBe(14)
})
test('returns input word', () => {
  expect(scrabbleScorer('ant')).toBe(3)
})