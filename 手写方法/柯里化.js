function add(...args){
    let adder = (..._args) => {
        args = [...args, ..._args]
        return adder
    }
    adder.toString = () => args.reduce((a, b) => a + b)
    return adder
}

console.log(add(1)(2)(3))
console.log(add(1)(2,3)(4,5))