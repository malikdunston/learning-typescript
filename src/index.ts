let id: number = 5;

// tsc -- watch [file]
// you can do above in tsconfig.json...

console.log("id: ", id)


// basic types

let company: string = "Traversy Media";
let isPublished: boolean = true;
let x: any = "hello";

x = true; // no problem bc any type...

let age: number;
age = 30;

let ids: number[] = [1, 2, 3, 4, 5] // array with only numbers....
// ids.push("hello") // error...

let arr: any[] = [1, true, "hello"];

// Tuples
let person: [number, string, boolean] = [1, "brad", true];
// Tuple Array
let employee: [number, string][];
employee = [
	[1, "brad"],
	[1, "sarah"],
	[1, "jill"],
]

// practice on my own...
// let newArr: [2, 3, 5] = [2, 3, 5]; // no need to define type if doing this really....
// newArr.push(8)// error... benefit of static typing

// Unions
let productId: string | number = 22;
productId = "586";

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
	faveMovies: string[]
}
const newUser: User = {
	id: 7,
	name: "Brad",
	faveMovies: [
		"The Dark Knight",
		"Eternals",
		"Avengers"
	]
}
console.log(newUser)