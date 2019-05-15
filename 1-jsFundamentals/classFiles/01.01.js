let first = "hello";
let second = ["hi", 100];
let third = {
  funString : "cool"
}
console.log(first);
console.log(second[0]);
console.log(third.funString);

let hello = "hello";
let six = 6;
let yes = true;
let nothing;
let empty = null;
let arr = ["jan", "feb", "mar"];
let obj = {
  fun : "yeah"
}

console.log(typeof(hello), typeof(six), typeof(yes), typeof(nothing), typeof(empty), typeof(arr), typeof(obj));

var coolArray = ["stringy", 500, false, undefined, null, [1, 2, 3, 4], {arrayObj  : "yep", arrayOther : "yea"}];
var coolObj = {
  coolStr   : "stringo",
  coolNum   : 11,
  coolBool  : true,
  coolDef   : undefined,
  coolNull  : null,
  coolArr   : [5, 6, 7, 8],
  coolObj   : {objObj : "ha", objOther  : "lol"}
}
console.log(coolArray);
console.log(coolObj);