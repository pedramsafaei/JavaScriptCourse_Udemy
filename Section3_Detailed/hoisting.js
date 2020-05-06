calculateAge(1965);
function calculateAge(year) {
  console.log(2020 - year);
}

//retirement(1990); //since it is a function expression this wont work
var retirement = function (year) {
  console.log(65 - (2020 - year));
};
retirement(1990); //this will work

//console.log(age); //wont work
var age = 23;
console.log(age);

function foo() {
  console.log(age);
  var age = 65;
  console.log(age);
}
foo();
console.log(age);
