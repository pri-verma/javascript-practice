const name = "noshimi";
const age = 21;
console.log(name + " is " + age + " years old");

const gameName = new String('The Legend of Zelda');
console.log(gameName[0]);
console.log(gameName.__proto__);

// String Interpolation  => ${}
console.log(`${name} is ${age} years old`);




// String Methods
const str = "Hello World";
console.log(str.length);
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.indexOf("World"));
console.log(str.slice(-5, -1));
console.log(str.replace("World", "JavaScript"));
console.log(str.substring(0, 4));  // (starting index, length of substring)   

// Escape Characters
const str2 = "He said, \"Hello World\"";
console.log(str2);