function pow( x: number, y: number): void{
	return Math.pow(x, y).toString();
}

pow(5, 10);

const arr: number[] = [];

arr.push(1);
arr.push("23"); //error
arr.push(false); //error

// tuples...

type myList = [number, string, boolean]

const arr2: myList = []

arr2.push(1);
arr2.push("23"); //error
arr2.push(false); //error
