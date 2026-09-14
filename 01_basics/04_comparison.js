console.log("2" > 1);
console.log("02" > 1);

console.log(null == 0);
console.log(null > 0);
console.log(null < 0);
console.log(null >= 0);  // while comparing null is treated as 0


console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);
console.log(undefined >= 0);      // undefined always gives false
console.log(undefined == null);   // undefined gives true
console.log(undefined > null); 
console.log(undefined < null);


// ===  use for Strict checking means datatype checking also while comparing

console.log("2" === 2);
console.log(2+2);
