/*

Write a program that prompts the user for a number, then repeatedly doubles that number until it is greater than or equal to 100.

#### Example

```
Enter a number:
> 23

23
46
92
184
```


*/

let num = parseInt(prompt("Enter any positive number"));
if (num < 0) num = -num;
console.log(num);

while (num < 100) {
  num *= 2;
  console.log(num);
}
