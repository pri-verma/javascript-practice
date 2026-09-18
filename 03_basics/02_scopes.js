// Global scope

let a = 100
const b = 200
var c = 300
d = 400

if (true) {
    // Local scope
    let a = 10
    const b = 20
    var c = 30
    d = 40
}

console.log(a);      //shows global scope value
console.log(b);     //shows global scope value
console.log(c);    //shows local scope value
console.log(d);   //shows local scope value  


////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function one 
