const user = {
    username : "Priyanka",
    price : 9999,

    welcomeMsg: function() {
        console.log(`${this.username}, Welcome to website`);   //"this" is use for current context
        console.log("local scope");
        console.log(this);
        
        
    }
}
console.log("global scope before execution");
console.log(this);

user.welcomeMsg()
user.username = "noshimi"
user.welcomeMsg()

console.log("global scope after execution");
console.log(this);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

console.log("this in function")
function this_fun() {
    console.log(this)
}
this_fun()

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

function this_username() {
    let username = "noshimi"
    console.log(this.username)
}
this_username()

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

const chai = function(){
    let username = "prii"
    console.log(this.username)
}
chai()

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

const arrow = () => {
    let username = "priyanka"
    console.log(this)
}
arrow()

////////////////////////////  Arrow Function  ////////////////////////////
//    () => {}

const add = (num1 , num2) => {
    return num1 + num2
}
console.log(add(8,6));


const mul =(num1, num2) => (num1 * num2)
console.log(mul(8,6));

const obj = (num) => ({username:"noshimi"})
console.log(obj());
