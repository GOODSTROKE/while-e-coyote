/*

Write a program, `fibonacci.js` that accepts a number, `n`, from the user and consequently logs the first `n` values in the fibonacci sequence.

The fibonacci sequence starts with 0 then 1. Each subsequent value can be obtained by summing the previous two values:
```
0 1 1 2 3 5 8 13 21 34 ...
```

#### Example

```
Enter a value for "n":
> 9

0
1
1
2
3
5
8
13
21
```


*/

function fibonacci() {
  let limit = parseInt(prompt("How many fibonassi number you want"));
  let num1 = 0;
  let num2 = 1;
  console.log(num1);
  console.log(num2);

  limit -= 2;

  while (limit-- > 0) {
    let temp = num1 + num2;
    console.log(temp);
    num1 = num2;
    num2 = temp;
  }
}

fibonacci();
