/*

Objective:
In this activity, you will reinforce the skill of creating and using variables
while practicing best practices in variable naming conventions through a hands-on,
interactive coding challenge.

The code snippet below may include:
  - Ambiguous or incorrect variable names.
  - Missing variables that need to be created.
  - Scenarios that require the use of clear and descriptive variable names.

You will:
  - Identify Issues: Review the provided code and identify any variable names that:
  - Are unclear or too vague (e.g., a, b, c).
  - Do not follow best practices (e.g., camelCase, descriptive naming).
  - Refactor the Code: Rename the variables and rewrite the program using descriptive names that clearly convey the variable's purpose.
  - Enhance the Program: Add at least two additional variables to improve the program’s functionality or clarity.

Things to reflect on:
  - Why is it important to use meaningful variable names?
  - What are the common pitfalls to avoid when naming variables?
  - How do clear variable names benefit team collaboration?
  
*/

/* Unclear code:
let a = "Alice"; a is a confusing name choice, as is b, c, and d. will change to be more descriptive.
let b = 5;
let c = 20; will add a variable here to calculate the total cost so this can be scaled for other products
let d = a + " bought " + b + " items for $" + c + "."; //should use template literals instead of concatenation for cleaner code
I will also make the string items into a variable to reusable
console.log(d); */

//Corrected code
let nameOfCustomer = "Alice";
let quantity = 5;
let item = "cupcakes";
let price = 4;
let totalCost = quantity * price;
let outputMessage = `${nameOfCustomer} bought ${quantity} ${item} for $${totalCost}.`;

console.log(outputMessage);
