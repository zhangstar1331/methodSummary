// 闭包实现
function Singleton(name){
    this.name = name
}
Singleton.prototype.getName = function(){
    return this.name
}
Singleton.getInstance = (function(){
    return function(name){
        if(!this.instance){
            this.instance = new Singleton(name)
        }
        return this.instance
    }
})()

const a = Singleton.getInstance('a');
const b = Singleton.getInstance('b');
console.log(a)
console.log(a === b)
console.log(a.getName())