const accountId = 151561
let accountEmail = "noshiminau@gmail.com"
var accountpassword = "12345"      // var has scope problem; preferred not to use because of block scope and functional scope
accountCity = "Delhi" 
let accountState;

//accountId=20  // not allowed
accountEmail = "pri@gmail.com"
accountpassword = "541548"
accountCity = "Seoul"

console.log(accountId);
console.log(accountEmail);
console.log(accountpassword);
console.log(accountCity);

console.table([accountId, accountEmail, accountpassword, accountCity, accountState])