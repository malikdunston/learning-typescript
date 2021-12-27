let id = 5;
// tsc -- watch [file]
// you can do above in tsconfig.json...
// console.log("id: ", id)
// --------------------------------------------------------
// basic types
let company = "Traversy Media";
let isPublished = true;
let x = "hello";
x = true; // no problem bc any type...
let age; // namespacing for later...
age = 30;
let ids = [1, 2, 3, 4, 5]; // array with only numbers....
// ids.push("hello") // error...
let arr = [1, true, "hello"];
// some new practice after revisiting...
// --------------------------------------------------------
// Tuples
let person = [1, "brad", true]; // | is or operator in typing values in ts... but the whole point of ts is kind of nullified when this is used, unless there are specific instances where you WANT to take multiple types, which is rare... edit: this is a union.
// Tuple Array
let employee;
employee = [
    [1, "brad"],
    [1, "sarah"],
    [1, "jill"],
];
// practice on my own...
// let newArr: [2, 3, 5] = [2, 3, 5]; // no need to define type if doing this really....
// newArr.push(8)// error... benefit of static typing. set length for newArr
// --------------------------------------------------------
// Unions
// unions used for "or" condition for a type using "|"...
let productId = 22;
// productId = true; // error.. not assignable... (string or number...)
productId = "586";
// --------------------------------------------------------
//Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 78] = "Up";
    Direction1[Direction1["Down"] = 79] = "Down";
    Direction1[Direction1["Left"] = 80] = "Left";
    Direction1[Direction1["Right"] = 81] = "Right";
})(Direction1 || (Direction1 = {}));
// Direction1.Up = 4; // cannot assign... read-only property......
console.log(Direction1);
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "up";
    Direction2["Down"] = "down";
    Direction2["Left"] = "left";
    Direction2["Right"] = "right";
})(Direction2 || (Direction2 = {}));
console.log(Direction2);
// --------------------------------------------------------
//Objects
const user = {
    id: 1,
    name: "Cicely"
};
const newUser = {
    id: 7,
    name: "Brad",
    faveMovies: [
        "The Dark Knight",
        "Eternals",
        "Avengers"
    ],
    auth: null // since I guess null is also an object... 
};
console.log(newUser);
// --------------------------------------------------------
//type assertion
let cid = "5jkljlk";
// let customerId = <number>cid // alternat way to do this, prefer below
let customerId = cid;
customerId = 8;
// console.log(cid, customerId)
// --------------------------------------------------------
// functions
function addNum(x, y) {
    return (x + y).toString(); // type assertions do not convert types for you... you must still do this manually...
    // made these changes here (return string vs number) to test type assertion
}
// console.log(addNum(4, "78")); // error
console.log(addNum(4, 78));
// void
function log(message) {
    console.log(message);
}
function log2(message) {
    console.log(message);
}
function log3(message) {
    console.log(message);
}
log("hello");
log(7);
// log(true); // error
log2("hello");
log2(7);
// log2(true); // error
log3("hello");
log3(7);
const userHerbert = {
    value: 89,
    id: 1,
    name: "Herbert",
};
userHerbert.id = 7;
;
const userJosiah = {
    value: 89,
    id: 8907,
    name: "Josiah",
    newProp: 78,
    age: 29, // still optional here bc of extension from UserInterface...
};
console.log(userJosiah);
const p1 = 156;
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
console.log(add(5, 6), sub(27, 2));
function printLabel(labeledObj) {
    console.log(labeledObj.label);
}
let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
printLabel(myObj);
