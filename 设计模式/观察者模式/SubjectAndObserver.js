class Subject {
    constructor() {
        this.observers = [];
    }

    subscribe(observer) {
        this.observers.push(observer);
    }

    unsubscribe(observer) {
        const index = this.observers.findIndex(o => o.name === observer.name);
        this.observers.splice(index, 1);
    }

    notify(data) {
        this.observers.forEach(obs => obs.notified(data));
    }
}

// 观察者
class Observer {
    constructor(name, subject) {
        this.name = name;
        if (subject) {
            subject.subscribe(this);
        }
    }

    notified(data) {
        console.log(`${this.name}收到消息：${data}`);
    }
}

const subject = new Subject();
const observerA = new Observer('observerA', subject);
const observerB = new Observer('observerB');
subject.subscribe(observerB);
subject.notify('Hello from subject');
subject.unsubscribe(observerA);
subject.notify('Hello again');