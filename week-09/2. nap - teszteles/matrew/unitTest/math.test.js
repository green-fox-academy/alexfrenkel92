const Math = require('../../src/Math');
const { expect } = require('chai');

describe('Math', () => {
  it('add should add two numbers correctly', () => {
    // Arrange
    let math = new Math();

    // Act
    let result = math.add(1, 2);

    // Assert
    expect(result).to.equal(3);
  })
})