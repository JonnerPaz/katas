'use strict';

// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

function countSheeps(arrayOfSheeps) {
  let sheepCount = 0;
  for (let sheep of arrayOfSheeps) {
    if (!sheep) continue;
    sheepCount += 1;
  }
  return sheepCount;
}

const arr = [true, true, true, true, true, true, false];
// console.log(countSheeps(arr));

////// Refactor

const sheepReduce = function (arrayOfSheeps) {
  return arrayOfSheeps.reduce(
    (acc, cur) => (cur === true ? (acc = acc + 1) : (acc = acc + 0)),
    0
  );
};

// console.log(sheepReduce(arr));
