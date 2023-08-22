"use strict";

// Previous implementation (not work!)
var humanYearsCatYearsDogYears1 = function (humanYears) {
  // Your code here!
  let dogYears = 15;
  let catYears = 15;
  if (humanYears == 1) {
    return [humanYears, catYears, dogYears];
  } else if (humanYears == 2) {
    dogYears = dogYears + 9;
    catYears = catYears + 9;
    return [humanYears, catYears, dogYears];
  } else {
    return undefined;
  }
};

// Newer implementation

const humanYearsCatYearsDogYears2 = function (humanYears) {
  let catYears = 15;
  let dogYears = 15;

  if (humanYears === 2) return [humanYears, (catYears += 9), (dogYears += 9)];

  for (let i = 0; i < humanYears; i++) {
    if (humanYears === 1) return [humanYears, catYears, dogYears];
    if (i < 2) {
      catYears += 9;
      dogYears += 9;
      continue;
    }
    console.log([humanYears, i, catYears, dogYears]);
    dogYears += 5;
    catYears += 4;
  }

  return [humanYears, catYears, dogYears];
};

// refactoring... (final answer)

const humanYearsCatYearsDogYears3 = function (humanYears) {
  let catYears = 15;
  let dogYears = 15;

  if (humanYears === 1) return [humanYears, catYears, dogYears];
  if (humanYears === 2) return [humanYears, catYears + 9, dogYears + 9];

  catYears = 24;
  dogYears = 24;
  for (let i = 0; i < humanYears - 2; i++) {
    dogYears += 5;
    catYears += 4;
  }

  return [humanYears, catYears, dogYears];
};
