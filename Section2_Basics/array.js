var names = ["John", "Mark", "Jane"];

var years = new Array(1990, 1969, 1948);

console.log(names);
console.log(names.length);

names[1] = "Ben";
console.log(names);

//names[5] = "Mary";
//console.log(names);

names[names.length] = "Mary";
console.log(names);

var john = ["John", "Smith", 1990, "designer", false];
john.push("blue");
john.unshift("MR.");
console.log(john);

john.pop();
john.pop();
john.shift();
console.log(john);

var index = john.indexOf(23);
console.log(index);

var isDesigner =
  john.indexOf("designer") === -1
    ? "John is not a designer"
    : "John is a designer";

console.log(isDesigner);
