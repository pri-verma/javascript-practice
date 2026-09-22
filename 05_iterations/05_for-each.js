//for each

const coding = ["js", "py", "c++", "java", "rb"]

coding.forEach(function (item){
    console.log(item)
})
console.log("-----------------------------------")

coding.forEach( (val) => {
    console.log(val)
})
console.log("-----------------------------------")

 function printme(item){
    console.log(item)
 }
coding.forEach(printme)
console.log("-----------------------------------")

coding.forEach((element,index,arr) => {
    console.log(element,index,arr);
});

const mycode = [
    {   lang :"js",
        file : "javascript"
    },
    {   lang :"java",
        file : "java"
    },
    {   lang :"py",
        file : "python"
    },
]

mycode.forEach((element) => {
    console.log(element.lang);
});