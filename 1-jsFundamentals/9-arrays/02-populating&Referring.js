/*
ARRAYS
*/

//what is an array?
//has [] brackets
//can hold multiple datatypes
//arrays can list datatypes in an ordered, numbered way

let students = ['tony', 'marshall', 'reese', 'ray', 23, true, ['ryan', 'iesha']];

console.log(typeof students);
console.log(students instanceof Array);
console.log(students[2]);
console.log(students[1]);
console.log(students[6]);

let name = students[6][1];
console.log(`hello ${name}, you look nice today`);

let food = ['pecan pie', 'shrimp', 'quesadilla', 'cheese cake', 'hotdog'];

for (f of food) {
  console.log(f + ' is amazing');
}

//array methods
food.push('pizza'); //add to end of array
console.log(food);
food.splice(1, 1, 'bananas');
console.log(food);
food.splice(2, 0, 'sweet potato pie');
console.log(food);
food.pop(); //removes last element of array
console.log(food);

//food = food.slice(2,5); //first item to slice, stop position
//console.log(food);

//forEach allows us to iterate with loops specifically and we can grab both elements
//and their index numbers

food.forEach((f) => console.log(f));

food.forEach((food, index) => {
  console.log(`the ${food} food in our array is at position ${index}`);
});

let movies = ['300', 'snow white', 'the phantom menace', 'the watchmen', 'the sound of music'];

movies.push('the force awakens');
movies.splice(3, 1, 'the league of extraordinary gentlemen');

movies.forEach(movie => console.log(movie));
console.log(movies.length);

//let's do the following with an array
//we will check if we are working with an array
//we will then flips the values within the array
//using a method only, print the values

let arr = new Array(1,2,3,4,5);

if (arr instanceof Array) {
  let revArr = arr.reverse();
  revArr.forEach(num => console.log(num));
}
