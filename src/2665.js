// https://leetcode.com/problems/counter-ii/description/?envType=study-plan-v2&envId=30-days-of-javascript

var createCounter = function (init) {
  const initalValue = init;

  return {
    increment: function () {
      return ++init;
    },
    decrement: function () {
      return --init;
    },
    reset: function () {
      init = initalValue;
      return initalValue;
    },
  };
};

const counter = createCounter(6);

console.log(counter.increment());
console.log(counter.reset());
console.log(counter.decrement());
