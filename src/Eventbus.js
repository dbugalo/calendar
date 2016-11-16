import Eventbus from 'minibus'

class EventBus {
    constructor() {
        this.bus = Eventbus.create();
    }
    
    on(key, fn) {
        this.bus.on(key,fn);
    }
    
    emit(key, param){
        this.bus.emit(key, param);
    }
}

const eventbus = new EventBus();

export default function() {
    return eventbus;
}