
/*

Write a program that takes a string and 'repeats it' until the string's length is greater than or equal to 10.

#### Examples

```
Enter a string:
> abc

abc
abcabc
abcabcabc
abcabcabcabc
```

```
Enter a string:
> a

a
aa
aaa
aaaa
aaaaa
aaaaaa
aaaaaaa
aaaaaaaa
aaaaaaaaa
aaaaaaaaaa
```


*/

function repeatString(str) {
  let newStr = str;
  console.log(newStr);
  while (newStr.length < 10) {
    newStr += str;
    console.log(newStr);
  }
}

repeatString("a");
