export default class Subscription {
    constructor(value) {
        this.value = value;
        this.subscriptions = []
    }
    
    setValue(value) {
        this.value = value;
        this.subscriptions.forEach(f => f());
    }
    
    subscribe(f) {
        this.subscriptions.push(f);
    }
}