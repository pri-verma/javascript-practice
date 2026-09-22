// while loop

let i=0
while (i<=10) {
    console.log(`Value of index is ${i}`)
    i+=2
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// To stop infinite loop = Ctrl + C

let arr = ["pri", "poo", "tan", "roh", "son"]
let a = 0
while(a < arr.length){
    console.log(`Value of index is ${arr[a]}`)
    a++
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

let score = 11
do {
    console.log(`Score is  ${score}`)  // first execute program and then check condition
    score++
} while (score <=10);