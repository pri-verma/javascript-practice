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

function one(){
    const username = "pri"

    function two(){
        const website = "noshimi"
        console.log(username);
    }
    //console.log(website);     //Out of scope of function two
    two()
}
one()

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

if(true){
    const name = "pri"
    if (name=== "pri"){
        const website = " noshimi"
        console.log(name + website);
    }
    //console.log(website);
    
}
//console.log(name);    //Out of if function


////////////////////////////////////////////////////////////////////////////////////////////////////////////////

console.log(add_one(5));  //this will execute 
function add_one(num){
    return num + 1
}

//console.log(add_two(5));  //this will not execute , Cannot access 'add_two' before initialization
const add_two = function(num){
    return num + 2
}
console.log(add_two(5));