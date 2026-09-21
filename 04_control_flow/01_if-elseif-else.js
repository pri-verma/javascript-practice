/*
Comparisions operators: >, <, <=, >=, == (checks value only), != (checks value only), === (checks datatype and value), !== (checks datatype and value)
*/

//if

const score = 200
if (score > 100) {
    const power = "fly"
    console.log(`User power : ${power}`);    
}
//console.log(`User power : ${power}`);       //Out of scope

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const balance = 1000;
if (balance > 500) console.log("Greater than 500"), console.log("implicit scope"), console.log("only write in one line, not multiple lines");
else console.log("Exit");

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

if (balance > 500) {
    console.log("Greater than 500");
} else if (balance > 750) {
    console.log("Greater than 750");
} else {
    console.log("Less than 1200");
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const LoggedIn = true
const DebitCard = true
const LoggedInFromGoogle = false
const LoggedInFromEmail = true

if (LoggedIn && DebitCard){   // all conditions need to be true
    console.log("Allow to buy course");
}

if (LoggedInFromGoogle || LoggedInFromEmail){    // atleast one condition need to be true
    console.log("User LoggedIn")
}