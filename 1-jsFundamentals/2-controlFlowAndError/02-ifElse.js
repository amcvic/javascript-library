let weather = '75';

if (weather < 70) {
  console.log('wear a jacket');
} else {
  console.log('no jacket necessary');
}

//you can blend complex conditionals and if-else statements based on your need
if (weather > 70 && typeof weather === 'number') {
  console.log('the weather is amazing');
} else {
  console.log('either the temperature is cool, the variable is not a string, or both');
}

//ELSE IF

//if-elseif statements can be chained

let age = 30;

if (age >= 25) {
  console.log('you can rent a car');
} else if (age >= 21) {
  console.log('you can drink');
} else if (age >= 18) {
  console.log('you can vote');
} else {
  console.log('sorry, you are too young to to anything fun');
}