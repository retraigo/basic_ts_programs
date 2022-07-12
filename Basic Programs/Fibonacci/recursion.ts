function fibonacci(current: number[], remaining: number): number[] {
  if (!remaining || remaining < 0) return current;
  if (current.length < 2) {
    console.log("Provide at least two values.");
    return current;
  }
  // Spread the current array and add the last two items.
  return fibonacci([
    ...current,
    Number(current.at(-1)) + Number(current.at(-2)),
  ], remaining - 1);
}

const firstTwo: number[] =
  await prompt(
    "Enter the first two numbers of the fibonacci series separated by a whitespace.",
  )
  // Split based on whitespace
  ?.split(" ")
  // Map values into numbers
  .map((x) => Number(x))
  // Get only first two elements
  .slice(0, 2) || [];

const count = Number(await prompt("Enter the number of series."));

console.log(fibonacci(firstTwo, count));
