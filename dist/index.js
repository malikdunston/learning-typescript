let id = 5;
// tsc -- watch [file]
// you can do above in tsconfig.json...
console.log("id: ", id);
// basic types
let company = "Traversy Media";
let isPublished = true;
let x = "hello";
x = true; // no problem bc any type...
let age;
age = 30;
let ids = [1, 2, 3, 4, 5]; // array with only numbers....
// ids.push("hello") // error...
let arr = [1, true, "hello"];
// Tuples
let person = [1, "brad", true];
// Tuple Array
let employee;
employee = [
    [1, "brad"],
    [1, "sarah"],
    [1, "jill"],
];
// practice on my own...
// let newArr: [2, 3, 5] = [2, 3, 5]; // no need to define type if doing this really....
// newArr.push(8)// error... benefit of static typing
// Unions
let productId = 22;
productId = "586";
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
//type assertion
let cid = 1;
// let customerId = <number>cid // alternat way to do this, prefer bottom
let customerId = cid;
// functions
function addNum(x, y) {
    return x + y; // returns number bc of last assertion...
}
console.log(4, "78"); // error
console.log(4, 78);
