const eqArrays = require('./eqArrays');


const assertArraysEqual = require('./assertArraysEqual')



const takeUntil = function(array, callback) {
  let results = [];
  for (let item of array) {
    if (callback(item)) {
      break;
    } else {
      results.push(item);
    }
  }
  return results;
};


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);

/* writing out the first function to help with comprehension
const results1 = takeUntil(data1, function(x){return x < 0});
*/
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

console.log(assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]));
console.log(assertArraysEqual(results2,[ 'I\'ve', 'been', 'to', 'Hollywood' ]));


module.exports = takeUntil;

