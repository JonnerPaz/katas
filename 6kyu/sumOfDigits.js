// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

function digitalRoot(number) {
  const stringData = String(number)
    .split('')
    .map(string => Number(string))
    .reduce((acc, cur) => acc + cur, 0);
  if (stringData >= 10) return digitalRoot(stringData);
  return stringData;
}

console.log(digitalRoot(493193));
