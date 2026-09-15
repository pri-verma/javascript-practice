let arr = [0,1,2,3,4,5,6,7,8,9];
let arr2 = new Array(10); // creates an array of length 10 with empty slots
arr2[5] = "isulu"; // sets the fifth slot of arr2 to "isulu"
arr2.push("abc"); // adds "abc" to the end of arr2

console.log(arr);
console.log(arr2);

arr2.fill("noshimi"); // fills all 10 slots of arr2 with "noshimi"
arr.unshift("pri"); // adds "def" to the beginning of arr

console.log(arr);
console.log(arr2);

console.log(arr.includes(6)); // checks if 6 is in arr, returns true

const arr3 = arr.join(":"); // joins all elements of arr into a string separated by colons

console.log(arr);
console.log(arr3)
console.log(typeof arr3); // returns "string"

console.log("Slice & Splice");
// slice & splice
const arr1 = [0,1,2,3,4,5,6,7,8,9];
const arr4 = arr1.slice(1, 3); // creates a new array with elements from index 2 to 4 of arr

console.log("Original : ", arr1);
console.log("Slice(1, 3) : ",arr4);

const arr5 = arr1.splice(1, 3); // removes 2 elements starting from index 3

console.log("Original : ", arr1);
console.log("Splice(1, 3) : ", arr5);