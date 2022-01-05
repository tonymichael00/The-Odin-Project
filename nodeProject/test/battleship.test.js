const { sum } = require('lodash');

describe('addition', () => {
  it('adds two numbers', () => {
    const num1 = 1;
    const num2 = 4;

    function add(num1, num2) {
      let sum = 0;

      sum = num1 + num2;

      return sum;
    }

    expect(add(num1, num2)).toBe(5);
  });
});
