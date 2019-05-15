/*
FOR OF LOOPS
*/

//for of requires the thing you are looping through be numbered & iterable
/*
let student = {name: 'Peter', isAwesome: true, degree: 'javascript', week: 1};

for (item of student) {
  console.log(item);
}
DOES NOT WORK
*/

let catArray = ['tabby', 'british shorthair', 'burmese', 'maine coon', 'rag doll'];

for (cat of catArray) {
  console.log(cat, 'says meow');
}