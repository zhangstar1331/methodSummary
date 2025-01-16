// 穷举一个数组中各个元素的排列
// 减而治之 递归
function getPermutation(arr){
    if(arr.length == 1){
        return [arr]
    }
    var permutation = []
    for(var i = 0; i < arr.length; i++){
        var firstEle = arr[i]
        var arrClone = arr.slice(0)
        arrClone.splice(i,1)
        var childPermutation = getPermutation(arrClone)
        for(var j = 0; j < childPermutation.length; j++){
            childPermutation[j].unshift(firstEle)
        }
        permutation = permutation.concat(childPermutation)
    }
    return permutation
}