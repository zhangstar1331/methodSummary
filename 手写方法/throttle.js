function throttle(fn, delay){
    let last = null
    return function(){
        let now = +new Date()
        if(now - last > delay){
            last = now
            fn.apply(this, arguments)
        }
    }
}