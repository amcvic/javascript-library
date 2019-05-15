/*
FOR IN LOOPS
*/

let student = {name: 'peter', awesome: true, degree: 'javascript', week: 1};

for (item in student) {
  console.log(item);
  console.log(student[item]);
}

let catArray = ['tabby', 'british shorthair', 'burmese', 'maine coon', 'rag doll'];

for (cat in catArray) {
  console.log(cat);
  console.log(catArray[cat]);
}

//let's write a for in loop that capitalizes the first letter of a name

let name = 'austin';
let newName;

for (i in name) {
  if (i == 0) {
    newName = name[i].toUpperCase();
  } else {
    newName += name[i];
  }
}
console.log(newName);

