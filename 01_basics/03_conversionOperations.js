let score = "33"

console.log(typeof score);

let valueInNumber = Number(score);

console.log(typeof valueInNumber);

// =================================
let score2 = "33abc"

console.log(typeof score2);

let valueInNumber2 = Number(score2);

console.log(typeof valueInNumber2);

console.log(valueInNumber2);

// =================================
let score3 = null

console.log(typeof score3);

let valueInNumber3 = Number(score3);

console.log(typeof valueInNumber3);

console.log(valueInNumber3);

// =================================
let score4 = undefined

console.log(typeof score4);

let valueInNumber4 = Number(score4);

console.log(typeof valueInNumber4);

console.log(valueInNumber4);

// =================================
let score5 = true

console.log(typeof score5);

let valueInNumber5 = Number(score5);

console.log(typeof valueInNumber5);

console.log(valueInNumber5);

// =================================
let score6 = 123

console.log(typeof score6);

let valueInNumber6 = String(score6);

console.log(typeof valueInNumber6);

console.log(valueInNumber6);

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

////////////////////////////////////////  OPERATIONS  ////////////////////////////////////////////////////

let value = 4;
let negvalue = -value;
console.log(negvalue);

console.log("1" + 2 );
console.log(1 + "2" );
console.log("1" + 2 + 3 );
console.log(1 + 2 + "3");
