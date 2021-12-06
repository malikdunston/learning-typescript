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