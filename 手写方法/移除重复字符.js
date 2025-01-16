function removeDuplicateChar(str){
    var strArr = str.split('');
    var targetArr = []
    strArr.forEach(item => {
        if(targetArr.indexOf(item) === -1){
            targetArr.push(item)
        }
    })
    return targetArr.join('').split(' ').join('')
}