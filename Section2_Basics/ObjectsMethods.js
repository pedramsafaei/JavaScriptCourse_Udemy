var john = {
  firstName: "John",
  lastName: "Smith",
  birthYear: 1992,
  family: ["Jane", "Mark", "Bob", "Emily"],
  job: "teacher",
  isMarried: false,
  calcAge: function () {
    this.age = 2020 - this.birthYear;
  },
  calAge2: function (birthYear) {
    return 2020 - birthYear;
  },
  calAge2: function () {
    return 2020 - this.birthYear;
  },
};

//good implmentation
john.calcAge();
console.log(john);

//not a good idea
console.log(john.calAge2(1992));

//not a good idea
console.log(john.calAge2());
