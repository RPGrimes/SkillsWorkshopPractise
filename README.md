# Skills Workshop Practise

This repository contains a series of exercises completed to refresh the TDD process and to reinforce my TDD development skills.

## 1. Leap Years
A simple tool that will tell you whether a year is a leap year, according to the following rules:

- All years divisible by 400 ARE leap years (e.g. 2000 was a leap year)
- All years divisible by 100 but not by 400 are NOT leap years (e.g. 1700, 1800 and 1900 were not leap years)
- All years divisible by 4 and not by 100 ARE leap years (e.g. 2004, 2008 and 2012 were leap years)
- All years not divisible by 4 are NOT leap years (e.g. 2009, 2010 and 2011 were not leap years)

### Acceptance Criteria

```
> leapYear(2000) => true
> leapYear(1970) => false
> leapYear(1900) => false
> leapYear(1988) => true
> leapYear(1500) => false
```

## 2. Get the Middle Letter(s)

Your job is to return the middle letter of a word. If the word's length is odd, return the middle letter. If the word's length is even, return the middle 2 letters.

### Acceptance Criteria

```
getMiddle("test") # => "es"
getMiddle("testing") # => "t"
getMiddle("middle") # => "dd"
getMiddle("A") # => "A"
getMiddle("of") # => "of"
```

## 3. Ten Minute Walk

Create a function that will return true if the walk will take you exactly ten minutes and will return you to your starting point.

Requirements
You are meeting a friend in New York City, where all roads are laid out in a perfect grid. You arrived ten minutes too early to the appointment, so you decided to take the opportunity to go for a short walk.
The city provides its tourists with a Walk Generating App on their phones -- every time you press the button it sends you an array of one-letter strings representing directions to walk. e.g. ['n', 's', 'w', 'e']

You always walk one block at a time in a direction and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

### Acceptance Criteria
```
tenMinuteWalk(['w', 's', 'e', 'e', 'n', 'n', 'e', 's', 'w', 'w']) => true
tenMinuteWalk(['w', 's', 'e', 'n', 'n', 'e', 's', 'w', 'w', 'w']) => false
tenMinuteWalk(['w', 's', 'e', 's', 's', 'e', 's', 'w', 'n', 'n']) => false
tenMinuteWalk(['w', 's']) => false
```

## 4. Scrabble Scorer

Given a word, compute the scrabble score for that word.

##### Letter Values

You'll need these:

| Letter                        | Value  |
| ----                          |  ----  |
| A, E, I, O, U, L, N, R, S, T  |     1  |
| D, G                          |     2  |
| B, C, M, P                    |     3  |
| F, H, V, W, Y                 |     4  |
| K                             |     5  |
| J, X                          |     8  |
| Q, Z                          |     10 |

Examples
"github" should be scored as worth 12 points:

- 2 points for G
- 1 point for I
- 1 point for T
- 4 points for H
- 1 point for U
- 3 points for B

And to total:

2 + 1 + 1 + 4 + 1 + 3

= 12
