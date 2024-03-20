"use strict";

var _class;
function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
function logParameters(target, name, descriptor) {
  const originalMethod = descriptor.value;
  descriptor.value = function () {
    console.log('Method:', name);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    console.log('Parameters:', args);
    return originalMethod.apply(this, args.map(arg => {
      // 这里可以对参数进行处理，比如转换为大写  
      if (typeof arg === 'string') {
        return arg.toUpperCase();
      }
      return arg;
    }));
  };
  return descriptor;
}
let Greeter = (_class = class Greeter {
  greet(name, age) {
    console.log("Hello, ".concat(name, "! You are ").concat(age, " years old."));
  }
}, (_applyDecoratedDescriptor(_class.prototype, "greet", [logParameters], Object.getOwnPropertyDescriptor(_class.prototype, "greet"), _class.prototype)), _class);
const greeter = new Greeter();
greeter.greet('Alice', 25);