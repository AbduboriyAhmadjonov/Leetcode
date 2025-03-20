// https://leetcode.com/problems/counter/description/?envType=study-plan-v2&envId=30-days-of-javascript

/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function (n) {
  let count = 0;
  return function () {
    return count++ + n;
  };
};

/**
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */

const counter = createCounter(10);
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
