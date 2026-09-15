//################################  Numbers  ####################################

const score = 100;
const bonus = new Number(20);
console.log(score);
console.log(bonus);
console.log(bonus.toString().length);
console.log(bonus.toExponential());
console.log(bonus.toFixed(2));

const num = 1543.623456789;
console.log(num.toPrecision(5));
console.log(num.toPrecision(10));
console.log(num.toPrecision(4));

const Price = 10000000000000;
console.log(Price.toLocaleString('en-US'));  //by default, it will use the USD to format the number
console.log(Price.toLocaleString('en-IN'));

//################################  Maths  ####################################

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.PI);
console.log(Math.round(4.7));
console.log(Math.floor(4.7));
console.log(Math.ceil(4.7));
console.log(Math.trunc(4.7));
console.log(Math.pow(2, 3));
console.log(Math.sqrt(16));
console.log(Math.min(1, 2, 3, 4, 5));
console.log(Math.max(1, 2, 3, 4, 5));
console.log(Math.random()); // 0 to 1
console.log(Math.random() * 10); // 0 to 10
console.log(Math.floor(Math.random() * 10)); // 0 to 9
console.log(Math.floor(Math.random() * 10) + 1); // 1 to 10

// Values btw min and max
const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // 10 to 20
// range = max - min + 1
// if we want to include the max value, we need to add 1 to the range.
// if we want to include the min value, we need to add min to the result.