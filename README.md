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