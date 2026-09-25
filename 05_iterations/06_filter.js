const coding = ["js", "py", "c++", "java", "rb"]

const values = coding.forEach((item) => {
    console.log(item);
    return item;        // doesnot stores filtered values
})
console.log(values);    // return undefined

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// filter()

const nums = [1,2,3,4,5,6,7,8,9,10]

//version 1
const new_nums1 = nums.filter ( (num) => num > 4)   //stores filtered values
console.log(new_nums1);

//version 2
const new_nums2 = nums.filter ( (num) => {return num > 4})   // if {} is used, then return is neccessary
console.log(new_nums2);                                      // if return is not present, it will give empty array

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//for each

const new_nums3 = []
nums.forEach( (num) => {
    if (num>4){
        new_nums3.push(num)
    }
})
console.log(new_nums3);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

const userBooks1 = books.filter((bk) => bk.genre === 'History')
console.log("userBooks1")
console.log(userBooks1)
  
const userBooks2 = books.filter((bk) => bk.publish >= 2000)
console.log("userBooks2")
console.log(userBooks2)
    
const userBooks3 = books.filter((bk) => {
    return bk.publish >= 2000 && bk.genre === 'Science'
})
console.log("userBooks3")
console.log(userBooks3)