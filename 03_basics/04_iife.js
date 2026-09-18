// Imediately Invoked Function Expressions (IIFE) : 
// 1. To invoke function immediately.
// 2. There is a problem due to pollution of global scope sometimes it has to do with the variables of global scope which are declared there, to remove the pollution.
// 3. At the end of function ";" is important because it will end imediately invoked function



// Normal function
function db() {
    console.log('DB Connected 1');
}

db();

// Immediately Invoked Function Expression (IIFE)

// Named IIFE
(function db() {
    console.log('DB Connected 2');
})();

///////////////////////////////////////////////////////////////////////////

// Unamed IIFE
(() => {
    console.log('DB Connected 3');
})();

//////////////////////////////////////////////////////////////////////////

// Unamed IIFE
((name) => {
    console.log(`DB Connected 4 ${name}`);   // backticks(``) use with $
})("pri");