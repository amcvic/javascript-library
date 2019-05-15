function pacersWon(){
  console.log("Pacers won!");
}
pacersWon();

function numberEntered(x){
  console.log("The number you entered was: ", x);
}

numberEntered(5);
numberEntered(4);
numberEntered(3);
numberEntered(2);
numberEntered(1);

function addAnyTwoNumbers(x, y){
  console.log(x + y);
}

addAnyTwoNumbers(4, 5);
addAnyTwoNumbers(6, 11);
addAnyTwoNumbers(7, 8);

function subtractAnyTwoNumbers(firstNum, secondNum) {
  console.log(secondNum - firstNum);
}

subtractAnyTwoNumbers(8, 9);

function getMyTaxReturnAndDoMyTaxesAndStuff(a, x, y, z){
  let myInc = a * x;
  let myTaxes = myInc - y;
  let total = myTaxes + z;
  return total; 
}

console.log(getMyTaxReturnAndDoMyTaxesAndStuff(10000, 5, 50000, 0));

function nameCat(firstName, lastName) {
  return firstName + " " + lastName;
}

console.log(nameCat("bob", "smith"));

function petInfo(petName, petBreed) {
  return "Name: " + petName + "\nBreed: " + petBreed;
}

console.log(petInfo("sparky", "golden retreiver"));

function calcTotalPrice(price, quantity) {
  return price * quantity * 1.07;
}

console.log(calcTotalPrice(50, 2));