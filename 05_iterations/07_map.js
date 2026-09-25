// map()

const nums = [1,2,3,4,5,6,7,8,9,10]

const new_nums1 = nums.map( (num) => {return num + 10})  // if {} is used, then return is neccessary
console.log(new_nums1);                                  // if return is not present, it will give undefined elements array

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Chaining

const new_nums2 = nums.map((num) =>  num * 10).map((num) => num + 5).filter((num) => num > 40)
console.log(new_nums2);