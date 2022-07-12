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
const op: string|null = await prompt("Enter the operation to perform:");

if(!op) console.log("Invalid Operation. Defaulting to '+'.")

// Addition
if (op === "+") console.log(a + b);
// We are using `else if` for other cases
else if (op === "-") console.log(a - b);
else if (op === "*") console.log(a * b);
else if (op === "/") console.log(a / b);
else if (op === "%") console.log(a % b);
// Fallback using else
else console.log("Invalid Operation")