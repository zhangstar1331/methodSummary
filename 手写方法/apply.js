Function.prototype.apply = function(context, args) {
    context.fn = this;
    let result = context.fn(...args);
    delete context.fn;
    return result;
}