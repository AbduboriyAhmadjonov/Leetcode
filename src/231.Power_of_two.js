var isPowerOfTwo = function (n) {
  return n > 0 && (n & (n - 1)) == 0 ? true : false;
};

var isPowerOfTwoWithRecursion = function (n) {
  if (n == 1) return true;

  if (n % 2 != 0 || n <= 0) {
    return false;
  }

  return isPowerOfTwoWithRecursion(n / 2);
};

console.log(isPowerOfTwoWithRecursion(162));
