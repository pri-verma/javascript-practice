// High Order Array Loops

// for of
// for (const element of object) {   // object can be array, string
// }

// ["","",""]
// [{},{},{}]

const arr = [1,2,3,4,5]
for (const num of arr) {
    console.log(num);
}

///////////////////////////////////////////////////////////////////////////////////////

const greetings = "Hello World!"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
}

///////////////////////////////////////////////////////////////////////////////////////

/* Maps : holds (key => value) pairs in {} and remember the original insertion order of the keys
          no duplicate values
          iterable
*/
const map = new Map()
map.set("IN", "India")
map.set("US", "United States")
map.set("SK", "South Korea")
console.log(map);

for (const key of map) {     // returns Key-value pairs in list form
    console.log(key)
}

for (const [key] of map) {   // returns keys only
    console.log(key)
}

for (const [key,value] of map) {   // returns Key:value pairs
    console.log(key,":", value)
}

// const obj ={
//     1 : "one",
//     2 : "two",
//     3 : "three",
//     4 : "four"
// }

// for (const [key,value] of obj) {
//     console.log(key,"=", value)   // returns obj is not iterable
// }