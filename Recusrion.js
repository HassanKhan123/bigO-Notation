function findFactorialRecursive(number) {
  if (number < 2) return 1;
  if (number == 2) return 2;

  return number * findFactorialRecursive(number - 1);
}

const fact = findFactorialRecursive(5);

function fibonacciIterative(n) {
  let arr = [0, 1];

  for (let i = 2; i <= n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  return arr[n];
}

function fibonacciRecursive(n) {
  if (n < 2) return n;

  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

const fib1 = fibonacciRecursive(8);
const fib2 = fibonacciIterative(8);
console.log(fib1);
console.log(fib2);
