const solution = function (number) {
  const multipleOfThree = [];
  const multipleOfFive = [];

  if (number <= 0) return 0;

  for (let i = 1; i < number; i++) {
    if (i % 5 === 0) {
      multipleOfFive.push(i);
      continue;
    }
    if (i % 3 === 0) multipleOfThree.push(i);
  }
  return multipleOfThree
    .concat(multipleOfFive)
    .reduce((acc, cur) => acc + cur, 0);
};

// console.log(`5: ${multipleOfFive}`, `3: ${multipleOfThree}`);
