function logParameters(target, name, descriptor) {  
    const originalMethod = descriptor.value;  
    
    descriptor.value = function(...args) {  
      console.log('Method:', name);  
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
    
  class Greeter {  
    @logParameters  
    greet(name, age) {  
      console.log(`Hello, ${name}! You are ${age} years old.`);  
    }  
  }  
    
  const greeter = new Greeter();  
  greeter.greet('Alice', 25);