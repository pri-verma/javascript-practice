const marvel_heros = ["Iron Man", "Captain America", "Thor", "Hulk", "Black Widow", "Hawkeye"];
const dc_heros = ["Superman", "Batman", "Wonder Woman", "Flash", "Aquaman", "Cyborg"];

marvel_heros.push(dc_heros); // Adding list of all DC heroes to the end of marvel_heros array
console.log(marvel_heros);
console.log(marvel_heros.length); // returns 7, because dc_heros is added as a single element
//console.log(marvel_heros[7][2]); // returns error 

const marvel_heros1 = ["Iron Man", "Captain America", "Thor", "Hulk", "Black Widow", "Hawkeye"];
// use for two arrays to be combined into one array
const all_heros = marvel_heros1.concat(dc_heros); // Adding list of all DC heroes to the end of marvel_heros array
console.log(all_heros);

// use spread operator to combine two or more arrays into one array
const all_heros1 = [...marvel_heros1, ...dc_heros]; // Adding list of all DC heroes to the end of marvel_heros array
console.log(all_heros1);


const nested_array = [[1, 2, 3], 72, 65, [55, [4, 5, 6], 12, 10, 48], 3, 6, 87, [7, [8, 9]]];
const flat_array = nested_array.flat(2); // flattening the nested array to 2 levels or Infinity to flatten all levels of nested array
console.log(flat_array);

console.log(Array.isArray("noshimi")); // returns false, because "noshimi" is not an array
console.log(Array.from("noshimi")); // returns ['n', 'o', 's', 'h', 'i', 'm', 'i'], because Array.from() method creates a new array instance from an array-like or iterable object
console.log(Array.from({name: "noshimi"})); // returns [], because Array.from() method creates a new array instance from an array-like or iterable object, but the object does not have a length property


let score1 = 10
let score2 = 20
let score3 = 30

console.log(Array.of(score1, score2, score3)); // returns [10, 20, 30]