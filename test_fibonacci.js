const { assert } = require('chai');
const fibonacci = require('./fibonacci');

describe('fibonacci', () => {
  it('should return 0 for fibonacci(0)', () => {
    assert.equal(fibonacci(0), 0);
  });

  it('should return 1 for fibonacci(1)', () => {
    assert.equal(fibonacci(1), 1);
  });

  it('should return 1 for fibonacci(2)', () => {
    assert.equal(fibonacci(2), 1);
  });

  it('should return 2 for fibonacci(3)', () => {
    assert.equal(fibonacci(3), 2);
  });

  it('should return 5 for fibonacci(5)', () => {
    assert.equal(fibonacci(5), 5);
  });

  it('should return 13 for fibonacci(7)', () => {
    assert.equal(fibonacci(7), 13);
  });

  it('should throw an error for negative input', () => {
    assert.throws(() => fibonacci(-1), Error, "Input must be a non-negative integer");
  });

  it('should throw an error for non-integer input', () => {
    assert.throws(() => fibonacci(3.5), Error, "Input must be a non-negative integer");
  });
});
