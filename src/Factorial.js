let number = 1;

function factorial(n) {
  if (n == 1 || n == 0) return 1;

  return (number = n * factorial(n - 1));
}

console.log(factorial(42));
