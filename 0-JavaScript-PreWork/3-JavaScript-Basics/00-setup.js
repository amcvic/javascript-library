console.log("Hello World");

var i;

function fizzbuzz() {
  for(i=1; i<=100; i++) {
    if (!(i % 5) && !(i % 3)) {
      console.log("FizzBuzz");
    } else if (!(i % 3)) {
      console.log("Fizz");
    } else if (!(i % 5)) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

fizzbuzz();