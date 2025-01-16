Function.prototype.bind = function (context) {
    const args1 = Array.from(arguments)
    return (...args2) => this.apply(context, [...args1,...args2])
};