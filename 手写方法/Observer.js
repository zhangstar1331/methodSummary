class Observer {
    constructor() {
        this.events = []
    }
    subscribe(event, callback) {
        if (!this.events[event]) {
            this.events[event] = []
        }
        this.events[event].push(callback)
    }
    publish(event, data) {
        if (this.events[event]) {
            this.events[event].forEach(callback => {
                callback(data)
            })
        }
    }
    unSubscribe(event, callback) {
        if (this.events[event]) {
            this.events[event] = this.events[event].filter(cb => cb !== callback)
        }
    }
}
const ob = new Observer()
function showData() {
    console.log(11111)
}
ob.subscribe('showData',showData)
ob.publish('showData')