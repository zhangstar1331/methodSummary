Array.prototype.reduce = function(fn, initialValue) {
    let [val, index] = initialValue ? [initialValue, 0] : [this[0], 1]
    for(let i = index. len = this.length; i < len; i++){
        val = fn(val, this[i],i,this)
    }
    return val
};