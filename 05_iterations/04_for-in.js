// for in
// for (const key in object) {
//     if (!Object.hasOwn(object, key)) continue;
    
//     const element = object[key];
    
    
// }

const obj ={
    1 : "one",
    2 : "two",
    3 : "three",
    4 : "four"
}

for (const key in obj) {
    console.log(key)        // return keys
}

for (const key in obj) {  
    console.log(obj[key])   //return values
}

/////////////////////////////////////////////////////////////////////////////////////

const arr = ["pri", "son", "jio"]

for (const key in arr) {
    console.log(key)     // return index key
}

for (const key in arr) {
    console.log(arr[key])  // return element
}