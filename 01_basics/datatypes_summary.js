/* Primitive Datatypes

// Call by value means work with copy not original data

1. String
2. Number
3. Boolean
4. Null
5. Undefined
6. Symbols
7. BigInt

*/

const ID1 = Symbol("123");
const ID2 = Symbol("123");
console.log(ID1 == ID2);


/* Non-Primitive Datatypes

// Call by reference means work with original data

1. Array = []
2. Objects = {}
3. Functions = function(){}

*/

const arr = ["minho", "joongki", "jungkook", "taehyung"]

const obj = {
    name : "Priyanka" ,
    age : 21
}

const value = null
console.log(typeof value);    // typeof (null) = object

const fun = function () {
    console.log("Hello");
}

/*
typeof operator → tells us the type of a value

typeof undefined;        "undefined"
typeof null;              "object"  ← famous JS quirk
typeof true;             "boolean"
typeof 10;               "number"
typeof "hello";          "string"

Objects
typeof {};                "object"
typeof [];               "object"

Functions
typeof function() {};      "function"
*/

////////////////////////////////////  MEMORY  ////////////////////////////////////

// Stack (Primitive)  - Call by value => copy of original data is created and stored in stack memory

let name1 = "noshimi";
let name2 = name1;
name2 = "Priyanka";

console.log(name1);
console.log(name2);


//  Heap (Non-Primitive) - Call by reference => orginal data is changed

let user1 = {
    email : "noshimi@google.com" ,
    age : 21
};
let user2 = user1;
user2.email = "noshimi@gmail.com";

console.log(user1);
console.log(user2);