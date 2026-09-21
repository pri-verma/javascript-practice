const email1 = "pri@ai.com"    // full string is treated as true
if (email1){
    console.log("Got user email");
}

///////////////////////////////////////////////////////////////////////////////////////////////////////

const email2 = ""   // empty string is treated as false
if (email2){
    console.log("Didn't get user email");
} else {
    console.log("Empty email");
}

///////////////////////////////////////////////////////////////////////////////////////////////////////

const arr = []     // empty list is treated as true
if (arr){
    console.log("Got the array");
} else {
    console.log("Empty array");
}

if (arr.length === 0){
    console.log("Array is empty");
}

///////////////////////////////////////////////////////////////////////////////////////////////////////

const obj = {}
if (Object.keys(obj).length === 0){
    console.log("Object is empty");
}

///////////////////////////////////////////////////////////////////////////////////////////////////////
/* 

Falsy Values : false 
               0 
               -0 
               BigInt: 0n
               null
               Empty: ""
               undefined
               NaN

Truthy Values : true
                1
                []
                "0"
                "false"
                Space: " "
                {}
                function(){}
                ... more other than falsy values

 */

///////////////////////////////////////////////////////////////////////////////////////////////////////

// Nullish Coalescing Operator (??): Choose first true value

let val1;
val1 = 5 ?? 10     

console.log(val1);

///////////////////////////////////////////////////////////////////////////////////////////////////////

let val2;
val2 = null ?? 10

console.log(val2);

///////////////////////////////////////////////////////////////////////////////////////////////////////

let val3;
val3 = undefined ?? 15

console.log(val3);

///////////////////////////////////////////////////////////////////////////////////////////////////////

let val4;
val2 = null ?? undefined     //Choose undefined over null

console.log(val4);

///////////////////////////////////////////////////////////////////////////////////////////////////////

// Terniary Operator :-  condition ? true : false

const Icetea = 100
Icetea <= 80 ? console.log("Less than 80") : console.log("More than 80")