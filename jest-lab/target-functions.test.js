const myFunctions = require('./target-functions.js');

//tests for div
describe('div', () => {
  test('pos numbers with whole answer', () => {
    const target = 2;
    const result = myFunctions.div(8, 4);
    expect(target).toBe(result);
  });

  test('negative a, pos b', () => {
    const result = myFunctions.div(-10, 2);
    expect(result).toBe(-5);
  });

  test('negative b, pos a', () => {
    const result = myFunctions.div(10, -2);
    expect(result).toBe(-5);
  });

  test('pos numbers with decimal answer', () => {
    const result = myFunctions.div(1, 4);
    expect(result).toBeCloseTo(0.25);
  });


  test('both neg numbers', () => {
    const result = myFunctions.div(-16, -4);
    expect(result).toBe(4);
  });

  test('zero divided by a num', () => {
    const result = myFunctions.div(0, 10);
    expect(result).toBe(0);
  });

  test('divide by zero', () => {
    const result = myFunctions.div(5, 0);
    expect(result).toBe(Infinity);
  });

  test('zero divided by zero', () => {
    const result = myFunctions.div(0, 0);
    expect(result).toBeNaN();
  });
});

//tests for containsNumbers:

describe('containsNumbers', () => {
  test('string with just numbers', () => {
    const result = myFunctions.containsNumbers('123');
    expect(result).toBe(true);
  });

   test('empty str', () => {
    const result = myFunctions.containsNumbers('');
    expect(result).toBe(false);
  });

  test('space', () => {
    const result = myFunctions.containsNumbers(' ');
    expect(result).toBe(false);
  });

  test('string with 1st val being a number', () => {
    const result = myFunctions.containsNumbers('9xyz');
    expect(result).toBe(true);
  });

  test('string with last val being a num', () => {
    const result = myFunctions.containsNumbers('abc2');
    expect(result).toBe(true);
  });

  test('just letters', () => {
    const result = myFunctions.containsNumbers('abc');
    expect(result).toBe(false);
  });

  test('only digits', () => {
    const result = myFunctions.containsNumbers('2129369');
    expect(result).toBe(true);
  });

   test('special chars', () => {
    const result = myFunctions.containsNumbers('@&()^%$');
    expect(result).toBe(false);
  });

  test('letters with space', () => {
    const result = myFunctions.containsNumbers('abc xyz');
    expect(result).toBe(false); // fails!: current implementation returns true
  });

   test('letters with space then nums', () => {
    const result = myFunctions.containsNumbers('hello 123');
    expect(result).toBe(true); 
  });
});