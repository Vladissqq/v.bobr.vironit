
function EventEmitter() {
    this.eventTable = {};
}

EventEmitter.prototype.emit = function (eventName, ...args) {
    console.log(args);
    const event = this.eventTable[eventName];
    if (event) {
        event.forEach(fn => {
            fn.apply(null, args);
        });
    }
}

EventEmitter.prototype.on = function (eventName, fn) {
    if (!this.eventTable[eventName]) {
        this.eventTable[eventName] = [];
    }

    this.eventTable[eventName].push(fn);
    return () => {
        this.eventTable[eventName] = this.eventTable[eventName].filter(eventFn => fn !== eventFn);
    }
}




function Atm () {
    EventEmitter.call(this);
    this.state = undefined;
    this.count  = 0;

}

Atm.prototype = Object.create(EventEmitter.prototype);
Atm.prototype.constructor = Atm;
console.dir(Atm);

Atm.prototype.busy = function() {
    this.count++;

    this.state = 'busy';
    this.emit(this.state);
}
Atm.prototype.free = function() {
    this.state = 'free';
    this.emit(this.state);
}

let test = new Atm() ;
test.on('free',()=>{console.log('FREE')});
test.on('busy',()=>{console.log('BUSY')});
test.busy();
test.free();
test.busy();



function Queue () {
    EventEmitter.call(this); 
    
    this.turn = 0;
} 

Queue.prototype = Object.create(EventEmitter.prototype);
Queue.prototype.constructor = Queue;
console.dir(Queue);

Queue.prototype.changeTurn = function () {
    
    this.emit(this.turn);
}




console.dir(EventEmitter);
console.log(test.count)