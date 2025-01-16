function InstanceOf(son, farther){
    while(true){
        son = son.__proto__
        if(son === null) return false
        if(son === farther.prototype) return true
    }
}