//setTimeout(function () {console.log('this is a test of timeouts')}, 1000);

let promise = new Promise(function(resolve, reject) {
  setTimeout(function () {
    if (true) {
      resolve('success');
    } else {
      reject('failure');
    }
  }, 3000);
});

promise
  .then(success => console.log(success)) //success = 'success'
  .catch(err => console.log(err)); //err = 'failure'

console.log('this code is after our promise & .then chain');

function playFunc() {
  return 5;
}

console.log(playFunc());