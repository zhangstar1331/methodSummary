function Singleton(name) {
    this.name  = name;
    this.instance = null;
}
Singleton.prototype.getName = function(){
    console.log(this.name)
}
// 获取类的实例
Singleton.getInstance = function(name) {
    if (!this.instance) {
        this.instance = new Singleton(name);
    }
    return this.instance;
}

const a = Singleton.getInstance('a');
const b = Singleton.getInstance('b');
console.log(a)
console.log(a === b)
a.getName()