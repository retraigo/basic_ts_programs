function factorial(n: number): number {
  // Check if n is 0 or NaN
  if (!n) return 1;
  // Return n when n is 1
  if (n === 1) return n;
  // Recursively call the function till n becomes 1
  return n * factorial(n - 1);
}

const n = Number(await prompt("Enter the number to find factorial."));

console.log(factorial(n));
