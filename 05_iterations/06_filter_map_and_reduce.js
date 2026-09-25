const coding = ["js", "py", "c++", "java", "rb"]

const values = coding.forEach((item) => {
    console.log(item);
    return item;        // doesnot stores filtered values
})
console.log(values);    // return undefined

//////////////////////////////////////////////////////////////////////////////////////////

const nums = [1,2,3,4,5,6,7,8,9,10]

const new_nums = nums.filter ( () => nums > 4)   //stores filtered values
console.log(new_nums);
