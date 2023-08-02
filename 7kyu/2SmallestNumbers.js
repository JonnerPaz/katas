'use strict';

const data = [19, 5, 42, 2, 77];

const sumTwoSmallestNumbers = numbers =>
  numbers
    .sort((a, b) => a - b)
    .slice(0, 2)
    .reduce((a, b) => a + b, 0);

console.log(sumTwoSmallestNumbers(data));
