// reduce()

const nums = [1,2,3,4,5,6,7,8,9,10]
const new_nums1 = nums.reduce(function (accumulator , currentValue) {
    console.log("accumulator : ", accumulator, " and currentValue : ", currentValue)
    return accumulator + currentValue   // accumulator = accumulator + currentValue , currentValue = elements of array [0 to n]
}, 0)    // to initialize accumulator value 
console.log(new_nums1);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//shorthand 

const new_nums2= nums.reduce( (acc, curr) => (acc + curr), 0)
console.log(new_nums2);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const shoppingCart = [
    {
        itemName : "biscuit",
        price : 100
    },
    {
        itemName : "namkeen",
        price : 200
    },
    {
        itemName : "chocolate",
        price : 120
    },
    {
        itemName : "icecream",
        price : 50
    }
]

const Total = shoppingCart.reduce((acc, item) => (acc + item.price), 0)
console.log(Total)