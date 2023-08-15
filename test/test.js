/*******************STUDENTS SHOULD NOT MODIFY THIS FILE***********************/
const assert = require('assert');

const range = require('../problems/1-range.js');
const reverseSentence = require(`../problems/2-reverse-sentence.js`);
const unique = require(`../problems/3-unique.js`);
const fizzBuzz = require(`../problems/4-fizz-buzz.js`);
const stringRange = require(`../problems/5-string-range.js`);

describe('range()', function () {
  it('should return array of numbers between "start" and "end"', function () {
    const result = range(1, 5);
    const expected = [1, 2, 3, 4, 5];

    assert.equal(result.length, expected.length);

    for (let i = 0; i < result.length; i += 1) {
      assert.equal(result[i], expected[i]);
    }
  });

  it('should return empty array if "start" > "end"', function () {
    assert.equal(range(5, 1).length, 0);
  });
});

describe('reverseSentence()', function () {
  it('should return the input string with the words reversed', function () {
    const result = reverseSentence('I want to go to the store');
    const expected = 'store the to go to want I';

    assert.equal(result, expected);
  });
});

describe('unique()', function () {
  it('should remove duplicate elements', function () {
    const result = unique([1, 2, 3, '3', 2, 1, 13]);
    const expected = [1, 2, 3, '3', 13];

    assert.equal(result.length, expected.length);

    for (let i = 0; i < result.length; i += 1) {
      assert.equal(result[i], expected[i]);
    }
  });
});

describe('fizzBuzz()', function () {
  it('should return array of all fizzbuzz numbers under max', function () {
    const result = fizzBuzz(20);
    const expected = [3, 5, 6, 9, 10, 12, 18];
    assert.equal(result.length, expected.length);

    for (let i = 0; i < result.length; i += 1) {
      assert.equal(result[i], expected[i]);
    }
  });
});

describe('stringRange()', function () {
  it('should return a string containing all numbers from `min` to `max` at `step` intervals', function () {
    assert.equal(stringRange(0, 12, 2), '024681012');
    assert.equal(stringRange(3, 20, 5), '381318');
    assert.equal(stringRange(13, 33, 6), '13192531');
  });

  it('should return an empty string if there are no numbers in the range', function () {
    assert.equal(stringRange(100, 20, 2), '');
  });
});
