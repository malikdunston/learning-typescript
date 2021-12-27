let id: number = 5;

// tsc -- watch [file]
// you can do above in tsconfig.json...

// console.log("id: ", id)

// --------------------------------------------------------

// basic types

let company: string = "Traversy Media";
let isPublished: boolean = true;
let x: any = "hello";

x = true; // no problem bc any type...

let age: number; // namespacing for later...
age = 30;

let ids: number[] = [1, 2, 3, 4, 5] // array with only numbers....
// ids.push("hello") // error...

let arr: any[] = [1, true, "hello"];

// some new practice after revisiting...

// --------------------------------------------------------

// Tuples
let person: [number, string, boolean | string] = [1, "brad", true]; // | is or operator in typing values in ts... but the whole point of ts is kind of nullified when this is used, unless there are specific instances where you WANT to take multiple types, which is rare... edit: this is a union.

// Tuple Array
let employee: [number, string][];
employee = [
	[1, "brad"],
	[1, "sarah"],
	[1, "jill"],
]

// practice on my own...
// let newArr: [2, 3, 5] = [2, 3, 5]; // no need to define type if doing this really....
// newArr.push(8)// error... benefit of static typing. set length for newArr

// --------------------------------------------------------

// Unions
// unions used for "or" condition for a type using "|"...
let productId: string | number = 22;
// productId = true; // error.. not assignable... (string or number...)
productId = "586";

// --------------------------------------------------------

//Enum
enum Direction1 {
	Up = 78,
	Down,
	Left,
	Right
}
// Direction1.Up = 4; // cannot assign... read-only property......
console.log(Direction1);

enum Direction2 {
	Up = "up",
	Down = "down",
	Left = "left",
	Right = "right"
}
console.log(Direction2);

// --------------------------------------------------------

//Objects
const user: {
	id: number,
	name: string
} = {
	id: 1,
	name: "Cicely"
}
// above code is lil messy, sooo
// instead you can do this...
type User = {
	id: number,
	name: string,
	faveMovies: string[],
	auth: []
}
const newUser: User = {
	id: 7,
	name: "Brad",
	faveMovies: [
		"The Dark Knight",
		"Eternals",
		"Avengers"
	],
	auth: null // since I guess null is also an object... 
}
console.log(newUser)

// --------------------------------------------------------

//type assertion
let cid: any = "5jkljlk";
// let customerId = <number>cid // alternat way to do this, prefer below
let customerId = cid as number;
customerId = 8;
// console.log(cid, customerId)

// --------------------------------------------------------

// functions
function addNum(x: number, y: number): string {
	return (x + y).toString() // type assertions do not convert types for you... you must still do this manually...
	// made these changes here (return string vs number) to test type assertion
}
// console.log(addNum(4, "78")); // error
console.log(addNum(4, 78));

// void
function log(message: string | number): void{
	console.log(message);
}
function log2(message: string | number){
	console.log(message);
}
function log3(message: string | number): any{
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
// log3(true); // error
// so, given the above... why use void? Why not use any? or nothing? There has to be some other purpose... no?
// why not use :any as the return type? 

// --------------------------------------------------------

// Interfaces
// custom type... specific structure to an obj or function...
// used similarly to the custom User type above...
interface UserInterface {
	readonly value: number,
	id: number,
	name: string,
	age?: number // ? = optional... (see objects above, better way to do that up there..)
}
const userHerbert: UserInterface = {
	value: 89, // cannot be changed bc readonly in interface...
	id: 1,
	name: "Herbert",
}
userHerbert.id = 7;
// herbert.value = 70; // error... readonly...
// console.log(userHerbert);

// some more practice after returning to this section...
interface UserInterface2 extends UserInterface {
	newProp: number
};
const userJosiah: UserInterface2 = {
	value: 89,
	id: 8907,
	name: "Josiah",
	newProp: 78,
	age: 29, // still optional here bc of extension from UserInterface...
}
console.log(userJosiah);

// Interfaces vs Types....
// Types can be used with primitaves () or unions
// Interfaces cannot be used in this way
type Point = number | string;
const p1: Point = 156;
// using an interface for above would throw an error..

// interfaces as functions
interface MathFunc {
	(x: number, y: number): number
}
const add: MathFunc = (x: number, y: number): number => x + y
const sub: MathFunc = (x: number, y: number): number => x - y
console.log(add(5, 6),sub(27, 2));

// not sure where I got this from
interface LabeledValue {
	label: string;
}
function printLabel(labeledObj: LabeledValue) {
	console.log(labeledObj.label);
}
let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
printLabel(myObj);