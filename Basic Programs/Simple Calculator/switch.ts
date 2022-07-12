/**
 * We do not declare `a: number` here since the `Number()` function
 * always returns a number.
 */
const a = Number(await prompt("Enter the first number:"));
const b = Number(await prompt("Enter the first number:"));

/**
 * We are giving a loose type for this one. We will be using selection
 * method for finding the proper operation.
 */
const op: string | null = await prompt("Enter the operation to perform:");

if (!op) console.log("No operation provided. Defaulting to '+'.");

switch (op) {
  case "+": {
    console.log(a + b);
    break;
  }
  case "-": {
    console.log(a - b);
    break;
  }
  case "*": {
    console.log(a * b);
    break;
  }
  case "/": {
    console.log(a / b);
    break;
  }
  case "%": {
    console.log(a % b);
    break;
  }
  // Fallback using default
  default: {
    console.log("Invalid Operation");
  }
}
