var john = {
  name: "john",
  yearOfBirth: 1990,
  job: "teacher",
};

var Person = function (name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
};

Person.prototype.calculateAge = function () {
  console.log(2020 - this.yearOfBirth);
};
Person.prototype.lastName = "Smith";

var john = new Person("john", 1990, "teacher");
john.calculateAge();
var jane = new Person("Jane", 1969, "Designer");
jane.calculateAge();
var mark = new Person("Mark", 1948, "retired");
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);
