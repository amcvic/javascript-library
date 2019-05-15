for (let i = 0; i < 10; i++) {
  console.log(i);
}

//for-in example 1
let parentThing = [1, 'Tracy', false, {key: 'playing'}];
for (let thing in parentThing) { //enumberable collections
  console.log(thing); //'thing' marks the index numbers of the elements in the array
}
//for-in example 2
let parentThing2 = [1, 'Tracy', false, {key: 'playing'}];
for (let thing in parentThing2) { //enumberable collections
  console.log(parentThing2[thing]); //'thing' marks the index numbers of the elements in the array
}
//for-in example 3
let obj = {keyA: true, keyB: 'Alan', keyC: [1,2,3]};
for (let o in obj) { //
  console.log(obj[o]);
}

let obj2 = {first: '1150 academy', second: 1150, third: false};
for (let o in obj2) {
  console.log(obj2[o]);
}

// Challenge 1:
// Write a for loop that loops 10 times.  Every time the loop is run, it calls a function.  The function should
// console.log a random number between 0 and 1.  Once you've completed the challenge with a for-loop, see if
// you can make this work with a for-of loop.  If you can solve that problem, see if you can solve this with
// a for-each loop.  Note that for-of and for-each loops require slightly different conditions to work than
// a for loop requires.
function coolFunc() {
  console.log(Math.random());
}

for (let i = 0; i < 10; i++) {
  coolFunc();
}

let arr = [0,1,2,3,4,5,6,7,8,9];

for (let i of arr) {
  coolFunc();
}

arr.forEach(coolFunc);

//mini-challenge
//make a function that takes 2 parameters: favFood & favDessert, your function should return a sentence with those 2 params inside.

function newFunc(favFood, favDessert) {
  return `After a hearty meal of ${favFood} I like to top it off with a little bit of ${favDessert}.`;
}
console.log(newFunc('pizza','ice cream'));

function first(inputFunction) {
  inputFunction();
}

function second() {
  console.log('functions are amazing & easy');
}

first(second);

// Challenge 2:
// Let's compose functions!  Your first function should take a function as input and return that function
// with a function call.  Your second function should take a string as input and return that string with 
// extra stuff added to that string.  Console.log the results of your function calls.  Additional information
// is below to help clarify what you're doing (the below is just an example):
// first function: input-secondFunc output-secondFunc('coding is great!')
// second function: input-'coding is great!' output-'coding is great!  pie is, too!'

function funcOne(func) {
  return func("Peanut Butter");
}

function funcTwo(str) {
  return (str+" & Jelly Sandwich");
}

console.log(funcOne(funcTwo));

// challenge 3:
// make 2 functions. the first function takes a function as input, and calls that input function
// with a number value. the second function takes a number as input, and concatenates that number with a string.
// the second function should return the concatenation. the first function should return the call.

function anotherFunc(moreFunc) {
  return moreFunc(5);
}

function otherFunc(newNum) {
  return newNum + " is the best number.";
}

console.log(anotherFunc(otherFunc));

//bonus
// make a function that accepts a function as input. it should provide input to the function passed to it based upon
// the name of the function (if funcA only takes strings, pass FuncA a string.  if funcB only takes arrays, pass funcB arrays).
// call your function that accepts other functions with a random function passed to it as input

function inpFunc(paramFunc) {
  paramFunc.name === "stringFunc" ? paramFunc("hello") :
  paramFunc.name === "arrayFunc" ? paramFunc([1,2,3,4]) :
  paramFunc.name === "numFunc" ? paramFunc(7) :
  paramFunc(null);
}

function stringFunc(stringy) {
  return stringy + "!!!";
}

function numFunc(numby) {
  return numby++;
}

function arrayFunc(arrayed) {
  return arrayed;
}