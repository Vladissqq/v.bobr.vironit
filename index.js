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

Atm.prototype.setBusy = function () {
    this.state = 'busy';
    this.emit('busy', this.state);
    this.count++;

}

Atm.prototype.setFree = function (min, max) {
    this.state = 'free';
    this.emit('free', this.state);
}




function Queue() {
    EventEmitter.call(this);

    this.turn = 0;

}

Queue.prototype = Object.create(EventEmitter.prototype);
Queue.prototype.constructor = Queue;



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
            this.Queue.emit('changeTurn++', this.Queue.turn);
            this.changeTurn(min, max);
        }),
        App.prototype.rand(min, max));
}

App.prototype.rand = function (min, max) {

    return (max - min) * Math.random() + min;
}

App.prototype.remove = function () {
    this.Queue.turn--;
}





/* App.prototype.on('free',Atm.prototype.changeBusy);
App.on('busy',Atm.prototype.free); 
App.prototype.on('changeTurn++',()=>{});
App.on('changeTurn--',()=>console.log('-1')); 
 */

const manager = new App();



manager.changeTurn(1000, 5000);
manager.Queue.on('changeTurn++', () => {
    start(2000,3000);
});

const start = function (min,max) {
    if (manager.Queue.turn > 1) {
        if (manager.Atm.state === 'free') {
            manager.Atm.setBusy();
            manager.remove();
            setTimeout(() => {
                setTimeout(() => {
                    manager.Atm.setFree();
                }, manager.rand(min,max));
            }, 1000);
        }
    }
}


const logger = function(){
    manager.Queue.on('changeTurn++',()=>console.log('В очереди '+manager.Queue.turn+'человек'));
    manager.Atm.on('busy',()=>console.log('Банкомат занят'));
    manager.Atm.on('free',()=>console.log('Банкомат свободен'));
    manager.Atm.on('free',()=>console.log('Банкомат обслужил '+manager.Atm.count+'человек'));

}
logger();
