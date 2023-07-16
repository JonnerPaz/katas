'use strict';

// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

let helper = [];
let count;
function duplicateCount(text) {
  const sample = text.toLowerCase().split('');
  for (let el of sample) {
    count = sample.filter(e => e === el);
    if (count.length < 2) continue;
    helper.push(count);
  }
  const dude = new Set(helper.flat(2));
  helper.length = 0; // to reset helper values when calling more than one value
  return dude.size;
}

// Implementación de Ninjer:

const ninjer = function (text) {
  const lower = text.toLowerCase();
  const count = 0;
  const used = [];

  lower.split('').forEach(function (letter) {
    if (!used.includes(letter) && lower.split(letter).length - 1 > 1) {
      count++;
      used.push(letter);
    }
  });

  return count;
};
