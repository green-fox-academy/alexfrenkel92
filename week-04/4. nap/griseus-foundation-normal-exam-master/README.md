# Griseus Foundation Normal Exam

## Getting Started

- Fork this repository under your own account
- Clone the forked repository to your computer
- Create a `.gitignore` file so generated files won't be committed
- Commit your progress frequently and with descriptive commit messages
- All your answers and solutions should go in this repository

## Keep in mind

- You can use any resource online, but **please work individually**
- **Don't just copy-paste** your answers and solutions, use your own words instead
- **Don't push your work** to GitHub until your mentor announces that the time is up

## Exercises


### Unique numbers

Write a method which takes a 2D array / matrix containing integer numbers.
It should return the numbers in a list without any duplication.

Write 2 different test cases for the method.

#### Example 1

Input

```
[
  [1, 1],
  [4, 2]
]
```

Output

```
[1, 4, 2]
```

#### Example 2

Input

```
[
  [4, 3, -1],
  [10, 2, 5],
  [-2, 3, 4]
]
```

Output

```
[4, 3, -1, 10, 2, 5, -2]
```

### Most productive year

Write a method which can read and parse a file containing information about
movies. The method must take one argument, which is the name of the film studio
and return the most productive year for the film studio.

If we do not have any data about the studio, the function should return an error message.

There's two example file:

 - [Marvel](./marvel.csv)
 - [Paramount](./paramount.csv)

#### Example 1

Input

```
marvel
```

Output

```
2017
```

#### Example 2

Input

```
ghibli
```

Output

```
Cannot find studio ghibli, please try again later.
```

### Online betting system

In this exercise you will create an online betting system. We need to track the result of a race and evaluate the bets. You can read the specification below.

#### Contestant

Create a `Contestant` class, this will represent a contestant attending the race. It has 2 private fields (both of them must be set through the constructor)

- `name` - the name of the contestant
- `placement` - an integer, it represents the place the contestant finished at the race. It's default value is 0

and two public methods

- `setPlacement(value)` - sets the placement field of the contestant to the given value
- `toString()` -  the method should return a string formatted like the following:
  -  `{name} has finished on place: {placement}`

#### Bet

Create a `Bet` class, this will represent the bets made by the `Player`. It has 4 private fields (all of them must be set through the constructor)

- `betId` - a random number between 1000 - 9999
- `amount` - an integer, it represents the amount of money made on the bet
- `player` - it represents the owner of the bet
- `contestant` - it represents the contestant the bet was made on

#### Player

Create a `Player` class with 3 private fields

- `name` - a string, the name of the player
- `account` - an integer, it represents the amount of money the player has
- `bets` - a `Bet` list which stores the bets made by the player

and 1 public method

- `makeBet(contestant, amount)`
  -  it makes a bet with the given amount of money and the given contestant
  -  store the `bet` in the `bets` list if the player has enough money to make the bet
  -  if the player does not have sufficient amount of money just ignore the bet

#### Race

Create a `Race` class. This class will simulate a race. It has 2 private fields which must be set through the constructor.

- `contestants` - it will store all of the contestants attending the race
- `players` - it will store all of the players

and 1 public method

- `startRace()` - this will simulate a race
  - first you need to evaluate the race by setting the placement field of the contestants to a random number (1 <= x <= contestants.length)
  - please keep in mind that every contestant's placement should be unique
  - after the evaluation, write the placements to the console in increasing order (use the `toString()` method)
  - to keep things simple a bet is won if the contestant won the race and the player will win the double price of the money he made the bet with
  - finally you need to write the winners to the console in the following format
    - `{name} has won {money}$ with the bet: {betId}` 


## Questions

### Tell us an important benefit of compiled languages
*type your answer here (please explain with your own words, and provide an example for your answer)*

### What is the difference between static (class) method and instance method?
*type your answer here (please explain with your own words, and provide an example for your answer)*


