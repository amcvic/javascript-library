// Challenge 1 (Arrays, Array Methods):
// Make an array that stores numbers.  Using Array.prototype.forEach(), add a random
// number amount to the value of every element in the array.  Console.log your array
// to confirm that it worked.

let nums = [1,2,3,4,9,8,7,6,5,0];
console.log("original array: " + nums);
nums.forEach(function (el, i) {nums[i] = el + Math.floor((Math.random() * Math.floor(100)));});
console.log("new array: " + nums);

//bonus
nums = [1,2,3,4,9,8,7,6,5,0];
let pool = [3,4,7];
console.log("original array: " + nums);
nums.forEach(function (el, i) {nums[i] = el + pool[Math.floor(Math.random() * (3))]});
console.log("new array: " + nums);

//challenge 2: make a function that takes an object and outputs an array of every other key

let exampleObj = {
  keyA:'1150',
  keyB: 1150,
  keyC: undefined,
  keyD: null,
  keyE: [1,2,3]
};

function everyOther(obj) {
  let oddKeys = [];
  Object.keys(obj).forEach(function (e, i) { if (i % 2) { oddKeys.push(e); } });
  return oddKeys;
}

console.log(everyOther(exampleObj));

