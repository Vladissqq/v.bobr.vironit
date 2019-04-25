function EventEmitter() {
    this.eventTable = {};
}

EventEmitter.prototype.emit = function (eventName, ...args) {

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



function Atm() {
    EventEmitter.call(this);
    this.state = 'free';
    this.count = 0;

}

Atm.prototype = Object.create(EventEmitter.prototype);
Atm.prototype.constructor = Atm;
console.dir(Atm);

Atm.prototype.setBusy = function () {
    
    setTimeout(() => {
        this.state = 'busy';
        this.emit('busy', this.state);
        this.count++;
        this.Queue.turn--;
        
        console.log(this.state);
    }, 1000);
}

Atm.prototype.setFree = function (min,max) {
    setTimeout(() => {
        this.state = 'free';
        this.emit('free', this.state);
        console.log(this.state);
    },1000);
}




function Queue() {
    EventEmitter.call(this);

    this.turn = 0;

}

Queue.prototype = Object.create(EventEmitter.prototype);
Queue.prototype.constructor = Queue;
console.dir(Queue);



function App() {
    EventEmitter.call(this);
    this.Atm = new Atm();
    this.Queue = new Queue();

}

App.prototype = Object.create(EventEmitter.prototype);
App.prototype.constructor = App;

App.prototype.changeTurn = function (min, max) {
    return setTimeout((
        () => {
            this.Queue.turn++;
            console.log('turn++' + this.Queue.turn);
            this.emit('changeTurn++', this.Queue.turn);
            this.changeTurn(min, max);
        }),
        App.prototype.rand(min, max));
}

App.prototype.rand = function (min, max) {

    return (max - min) * Math.random() + min;
}







/* App.prototype.on('free',Atm.prototype.changeBusy);
App.on('busy',Atm.prototype.free); 
App.prototype.on('changeTurn++',()=>{});
App.on('changeTurn--',()=>console.log('-1')); 
 */

const manager = new App();
const Atm1 = new Atm();
const queue = new Queue();


manager.changeTurn(1000, 5000);
manager.on('changeTurn++', () => console.log('Queue=' + manager.Queue.turn));
manager.Atm.emit('free');
manager.Atm.on('free',manager.Atm.setBusy);
manager.Atm.on('busy',manager.Atm.setFree);


