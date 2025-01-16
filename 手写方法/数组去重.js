let arr = [1,2,3,4,1,2,3,4];
let newArr = [];

// newArr = arr.filter((item,index,arr)=>{
//     return arr.indexOf(item) === index;
// })

newArr = Array.from(new Set(arr))
console.log(newArr)