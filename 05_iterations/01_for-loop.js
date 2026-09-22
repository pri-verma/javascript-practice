// for loop

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
// }

// To change same variable in all places at once = Double-click on first variable, then press Ctrl+D until all desirable variable get select

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        console.log("This is number 5");
    }
    console.log(i);
}

// console.log(i);   // Can't access outside scope

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

for (let i = 1; i <= 10; i++) {
    console.log(`Outer loop value: ${i}`)
    for (let j = 1; j <= 10; j++) {
    // console.log(`Inner loop "j" value: ${j} and Inner loop "i" value: ${i}`)     
    console.log(`${i} * ${j} = ${i*j}`)   
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

let arr = ["pri", "poo", "tan", "roh", "son"]
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    console.log(element)
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// break and continue

for (let index = 1; index < 20; index++) {
    if (index == 5){
        console.log("Dectected number ")
        continue   // jump next iteration once and then execute rest of program
    }
    if (index == 10){
        console.log("Dectected number 10")
        break   // jump out of scope
    }
    console.log(`Value of i is ${index}`);
    
    
}