// A singleton object is a design pattern that ensures a class only has a single instance throughout your application. This single instance, also known as the singleton, serves as the central point of access to any data or methods associated with the class.

//object literal has two methods to create:
// first is using the object literal syntax, which is the most common way to create a singleton object in JavaScript. This method involves defining an object using curly braces {} and specifying its properties and methods directly within the object literal.
const user1 = {
    name: 'John Doe',
    "full name": 'Johnathan Doe',
    age: 30,
    location: 'New York',
    email: "john.doe@example.com",
    Login_Status: false,
};

// second is using the Object.create() method, which allows you to create a new object that inherits from a specified prototype object. This method is useful when you want to create a singleton object that has a specific prototype or when you want to create multiple instances of the same object with different properties.
const user2 = Object.create(null)

// To retrieve the value of a property from an object, you can use either dot notation or bracket notation. Dot notation is the most common way to access properties in JavaScript, and it involves using the name of the property directly after the object name, separated by a dot. Bracket notation, on the other hand, allows you to access properties using a string that represents the property name, enclosed in square brackets. This method is useful when the property name contains special characters or spaces, or when you want to access a property dynamically using a variable.
console.log(user1.email);
console.log(user1["email"]);
//console.log(user1."full name");    // This line will throw a syntax error because the property name contains a space and cannot be accessed using dot notation. Instead, you can use bracket notation to access the property:
console.log(user1["full name"]);

const my_symbol1 = Symbol('my_key1');  // Property key
const my_symbol2 = Symbol('my_key2');

console.log(typeof my_symbol1); // before assigning it to an object, the type of a symbol is 'symbol'.
console.log(typeof my_symbol2);

const user3 = {
    name: 'John Doe',
    "my_symbol1": 'key1',
    [my_symbol2]: 'key2',   // This is a computed property name using a symbol as the key.
    age: 30,
    location: 'New York',
    email: "john.doe@example.com",
    Login_Status: false,
};

console.log(user3.my_symbol1); // This will log 'key1' because the property name is a string, not a symbol.
console.log(typeof user3.my_symbol1);
console.log(user3[my_symbol2]);  // This will log 'key2' because the property name is a symbol, and we are using bracket notation to access it.
console.log(typeof user3[my_symbol2]); // This will log 'string' because the value associated with the symbol key is a string.


user3.email = "noshiminau@gmail.com";
Object.freeze(user3);  // this method prevents any modifications to the object, including adding, deleting, or changing properties. It makes the object immutable.
user3.email = "noshiminau@hotmail.com";
console.log(user3);


user1.greetings = function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

console.log(user1.greetings);
console.log(user1.greetings());