// primitive And Non-Primitive Types

// Primitive Types------
/* 
1.  Number
2.  String
3.  Boolean
4.  Null
5.  Undefined
6.  Symbol
*/

// Non-Primitive Data Types
/* 
1.  Array
2.  Tuple
3.  Object

*/
// Primitive Types
const PhoneNumber: number = 500320130;
const MyName: string = "Md. Al Amin Mollik";
const isActive: boolean = false;
const myNull: null = null;
let myUndefined: undefined; // undefined variable
const uniqueId: symbol = Symbol("😀");

// Non-Primitive Data Types
const studentsRoll: number[] = [1, 2, 3, 4, 5];
const stringArray: Array<string> = ["apple", "banana", "cherry"];
const stringArray2: string[] = ["apple", "banana", "cherry"]; // we can define type in both ways


// tuples
// tuple is a type of array >> And it maintain Orders >> And maintain the type of Values
const person: [string, number] = ["Mollik", 30];

// Log the values to the console
console.log("Phone Number:", PhoneNumber);
console.log("Name:", MyName);
console.log("Is Active:", isActive);
console.log("My Null:", myNull);
console.log("My Undefined:", myUndefined);
console.log("Unique ID:", uniqueId.toString());

console.log("Numbers Array:", studentsRoll);
console.log("String Array:", stringArray);
console.log("Person Tuple:", person);
