//################################  Date  ####################################

let mydate = new Date();
console.log(mydate); // current date and time
console.log(mydate.toString()); 
console.log(mydate.toDateString()); // current date
console.log(mydate.toTimeString()); // current time
console.log(mydate.toLocaleDateString()); // current date in local format
console.log(mydate.toLocaleTimeString()); // current time in local format
console.log(mydate.toLocaleString()); // current date and time in local format
console.log(mydate.getFullYear()); // current year
console.log(mydate.getMonth()); // current month (0-11)
console.log(mydate.getDate()); // current date (1-31)
console.log(mydate.getDay()); // current day (0-6)
console.log(mydate.getHours()); // current hour (0-23)
console.log(mydate.getMinutes()); // current minute (0-59)
console.log(mydate.getSeconds()); // current second (0-59)
console.log(mydate.getMilliseconds()); // current millisecond (0-999)
console.log(mydate.getTime()); // current time in milliseconds since 1970-01-01
console.log(mydate.toJSON()); // current date and time in JSON format
console.log(mydate.toISOString()); // current date and time in ISO format
console.log(typeof mydate); // object

//################################  Time  ####################################

let mytime = Date.now(); // current time in milliseconds since 1970-01-01
console.log(mytime);
console.log(Math.floor(mytime / 1000)); // current time in seconds since 1970-01-01

let newDate = new Date();
console.log(newDate.toLocaleString('default',{
    weekday: 'long', // long, short, narrow
    year: 'numeric', // numeric, 2-digit
    month: 'long', // long, short, narrow, numeric, 2-digit
    day: 'numeric', // numeric, 2-digit
    hour: 'numeric', // numeric, 2-digit
    minute: 'numeric', // numeric, 2-digit
    second: 'numeric', // numeric, 2-digit
    timeZoneName: 'short' // short, long
}));