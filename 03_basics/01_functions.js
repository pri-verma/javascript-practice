function myname(){
    console.log("P");
    console.log("R");
    console.log("I");
}

myname // referencing function, nothing will output 
myname() // executing function

/////////////////////////////////////////////////////////////////////////////////////////////////

function add(num1, num2){  //(parameters)
console.log(num1 + num2);
}

add(5, 10)  //(agruments)
add("Hello", " World")
add(45,"abc")
add("abc", 15)

//when trying to store result
const result = add(12,48)
console.log("Result:", result)  // undefined

/////////////////////////////////////////////////////////////////////////////////////////////////

function mul(num1, num2){
    let result = num1 * num2
    return result   //after return statement function will close, nothing execute anymore
    // return num1*num2
}

const result1 = mul(10, 7)
console.log("Result:", result1)

/////////////////////////////////////////////////////////////////////////////////////////////////

function userlogin(username){
    return `${username} LoggedIn`;
    //return => can be use if you don`t want to return any value, it will exit function
};

userlogin("priyanka") //this will return value of function but not print it
console.log(userlogin("priyanka"));

/////////////////////////////////////////////////////////////////////////////////////////////////

function calculatePrice (...num){   //...  => rest operator include multiple agruments as list
    return num
}

console.log(calculatePrice(200,500,400,700,900));

/////////////////////////////////////////////////////////////////////////////////////////////////

function three(val1,val2,...num){  //will give largest 2 numbers
    return num
}

console.log(three( 500,400,700,900));

/////////////////////////////////////////////////////////////////////////////////////////////////

const user ={
    name:"priyanka",
    age:21
}

function handleObjects(data){
    console.log(`Username is ${data.name} and age is ${data.age}`);
};

handleObjects(user);
handleObjects({
    name:"noshimi",
    age: 20
})

/////////////////////////////////////////////////////////////////////////////////////////////////

const arr=[10, 38, 47, 97, 66, 79, 25, 85]

function get_second_value(array){
    return array[2]
}

console.log(get_second_value(arr));