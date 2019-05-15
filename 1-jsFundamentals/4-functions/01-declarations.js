/*
FUNCTIONS
*/

//General Ideas: at their broades level, functions do the following:
//1. take some input to handle
//2. process the input
//3. usually return a value
//4. they can be invoked as many times as we want

//ex 1
function newFunc(num) {
  return num + 1;
}

console.log(newFunc(7));
console.log(newFunc(10));
console.log(newFunc(11));
console.log(newFunc(-2));

//ex 2

function sentence(firstName, lastName) {
  return `My first name is ${firstName} and my last name is ${lastName}`
}

console.log(sentence('jonathan', 'muer'));
console.log(sentence('tyler', 'shelton'));
let importantSentence = sentence('nick', 'dis');
console.log(importantSentence);

//let's build a function that takes a complex type

let arr = [1, true, {key: 'string'}, [0, false, null], 'hey'];
let arr2 = [5, 6, 7, 8, 9, 10];

function iteratorFunc(inputArr) {
  for (let element of inputArr) {
    console.log(element);
  }
}
iteratorFunc(arr);
iteratorFunc(arr2);