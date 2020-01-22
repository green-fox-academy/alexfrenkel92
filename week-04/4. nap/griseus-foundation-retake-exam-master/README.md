# Griseus Foundation Retake Exam

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


### Greatest values in matrices

Write a method which takes two matrices as parameters and returns a new matrix.
The method should compare each element in the input matrices and fill the
returned matrix with the greater values.
You only have to deal with square matrices.
A square matrix is a matrix with the same number of rows and columns.

Write 2 different test cases for the method.

#### Example 1

Input 1

```
[
  [2, 1],
  [0, 1]
]
```

Input 2

```
[
  [0, 3],
  [-1, 1]
]
```

Output

```
[
  [2, 3],
  [0, 1]
]
```

#### Example 2

Input 1

```
[
  [-1, 1, 0],
  [0, 1, 0],
  [0, 1, 0]
]
```

Input 2

```
[
  [0, 0, 0],
  [0, 1, 0],
  [0, 0, 0]
]
```

Output

```
[
  [0, 1, 0],
  [0, 1, 0],
  [0, 1, 0]
]
```

### Weekly feedback evaluator

Write a method which can read and parse a file containing information about
weekly feedbacks from apprentices about a mentor.

The mentor is *rated* in 4 different metrics, those are respectively (*matReview*, *presSkills*, *helpfullness*, *explanation*) separated with 1 space:

 - m = matReview
 - p = presSkills
 - h = helpfulness
 - e = explanation

```
m p h e
1 3 5 3   // this line is an answer from an apprenitce
2 3 4 3   // this is another response
...
```

The method must return a map containing the average rating (in each metric) of the mentor.

#### Example

[Example file can be found here.](./responses.txt)

Output

```js
{
  matReview: 2.25,
  presSkills: 4.0, // or 4 is fine as well
  helpfulness: 4.5,
  explanations: 3.75
}
```

### Santa Factory

You are going to create a SantaFactory and help Santa bring the remaining toys to the poor children.

#### Toy

- It has a cost and color.
- Each toy has an owner, when a toy produced the owner should be null.

##### Doll

- Doll, it costs 25, and can be different color.

##### DottedBall

- Dotted ball, costs 10, and can be different color and *size*.

##### JumpingRope

- Jumping rope, costs 15, and can be different color and *size*.

#### Santa Factory

- It has a balance of the factory 200 by default.
- It has a `produce(name, color, size)` method where you can produce a `Toy`
  - It can produce toys until the balance is higher than 0.

#### Santa

- It has `bag` as list of toys.
- It has `children` list with names.
- It has an `addToBag(name, color, size)` method which calls the Santa factory's `produce` method
- It has a `bringToChildren` method which
  - takes a list with name of children e.g.: `Lacika, Sanyika`
  - Santa brings the toys to the children until there is something in the list
  - when a toy is being delivered, it gets it's owner (a random children name)
  - the owner, and the toy should be removed from the lists


## Questions

### What is encapsulation? Explain it with an example!
*type your answer here (please explain with your own words)*

### Explain what is the DRY principle in programming
*type your answer here (please explain with your own words)*


