const user1 = new Object();  // singleton object
console.log(user1); 

const user2 = {};  // non-singleton object
console.log(user2); 

user2.name = 'John Doe';
user2.age = 30;
user2.location = 'New York';
user2.email = "noshimi@gmail.com";
console.log(user2);


// nested objects
const user3 = {
    email: "john.doe@example.com",
    fullname: {
        userfullname: {
            firstname : 'John',
            lastname : 'Doe',
        },
    }
};

console.log(user3);
console.log(user3.fullname);

//merging objects using Object.assign()
const user4 = {1:"a",2:"b", 3:"c"}
const user5 = {4:"d", 5:"e", 6:"f"}
const mergedUser1= Object.assign({}, user4, user5)  // {} is optional but if we don't use it, the first object will be modified means all objects will merge and store in object 1 i.e, user4

// merging objects using spread operator
const mergedUser2= {...user4, ...user5}
console.log(mergedUser1)
console.log(mergedUser2)


const user6 = [
    {
        id: 1,
        email: "pri@gmail.com"
    },
    {
        id: 1,
        email: "pri@gmail.com"
    },  
    {
        id: 1,
        email: "pri@gmail.com"
    },
    {
        id: 1,
        email: "pri@gmail.com"
    },
    {
        id: 1,
        email: "pri@gmail.com"
    },
    {
        id: 1,
        email: "pri@gmail.com"
    },
    {
        id: 1,
        email: "pri@gmail.com"
    },
    {
        id: 1,
        email: "pri@gmail.com"
    },
    {
        id: 1,
        email: "pri@gmail.com"
    },
    {
        id: 1,
        email: "pri@gmail.com"
    },
    {
        id: 1,
        email: "pri@gmail.com"
    },
    {
        id: 1,
        email: "pri@gmail.com"
    },
    {
        id: 1,
        email: "pri@gmail.com"
    }
]

user6[1].email
console.log(user2);
// accessing object properties, all will return list datatype!
console.log(Object.keys(user2));  // returns an array of keys
console.log(Object.values(user2));  // returns an array of values
console.log(Object.entries(user2));  // returns an array of key-value pairs

console.log(user2.hasOwnProperty('name'));  // returns true if the object has the property, otherwise false

////////////// Destructure objects //////////////
const course = {
    title: 'JavaScript Basics',
    description: 'Learn the basics of JavaScript',
    duration: 30,
    level: 'Beginner',
    price: 5000000
};

// Destructuring the object
const { title, price } = course;
console.log(title);
// console.log(level);  // This will throw an error because 'level' is not destructured
console.log(price);

/*  Destructuring in function parameters
const navbar = ({ company }) => {

}
navbar(company = "hello")
*/

/*
// this object is in json format, use in API calls, data transfer between server and client
{
    "name": "pri",
    "age": 21,
    "email": "pri@gmail.com"
}

[
{}
{}
{}
]

*/