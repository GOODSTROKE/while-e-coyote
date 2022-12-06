/*

In a file called `number-summer.js` file, write a program that continually prompts the user for numbers greater than 0 until the user enters a 0 at which point the sum of all the inputted numbers is logged out.

#### Example

```
Enter some numbers (type 0 when complete):
> 20
> 10
> 3.2
> 0

Those numbers sum to 33.2
```


*/

let total = 0;
let num = parseInt(prompt("Enter any number"));
total += num;
let isNot0 = true;
while (isNot0) {
  num = parseInt(prompt("Enter any number, Enter 0 to stop"));
  if (num === 0) isNot0 = false;
  total += num;
}

console.log(`The sum is ${total}`);
