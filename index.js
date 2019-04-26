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

Atm.prototype.setWait = function() {
    this.state = 'wait';
    this.emit('wait',this.state);
}

Atm.prototype.getState = function () {
    return this.state;
}



function Queue() {
    EventEmitter.call(this);

    this.turn = 0;

}

Queue.prototype = Object.create(EventEmitter.prototype);
Queue.prototype.constructor = Queue;

Queue.prototype.returnQueue = function(){
    return this.turn;
};

function App() {
    EventEmitter.call(this);
    this.Atm = new Atm();
    this.Queue = new Queue();
    this.atmTable = [];


};

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
};

App.prototype.rand = function (min, max) {

    return (max - min) * Math.random() + min;
};

App.prototype.remove = function () {
    this.Queue.turn--;
};

App.prototype.addAtm = function () {
    const atm = new Atm();
    this.atmTable.push(atm);
};

App.prototype.start = function (min, max) {
    if (this.Queue.turn > 0) {
        for (let i = 0; i < this.atmTable.length; i++) {
            if (this.atmTable[i].getState() === 'free') {
                this.atmTable[i].setBusy();
                this.remove();
                setTimeout(() => {
                    setTimeout(this.atmTable[i].setFree(),
                        1000);
                }, 500);
            }
            if(this.Queue.returnQueue() === 0) break;
        }
    }
};

App.prototype.logger = function () {
    this.Queue.on('changeTurn++', () => console.log('В очереди ' + this.Queue.turn + 'человек'));
    for (let i = 0; i < this.atmTable.length; i++) {
        this.atmTable[i].on('busy', () => console.log('Банкомат занят'));
        this.atmTable[i].on('free', () => console.log('Банкомат свободен'));
        this.atmTable[i].on('free', () => console.log('Банкомат обслужил ' + this.atmTable[i].count + 'человек'));
    }
};

const manager = new App();



manager.changeTurn(100, 4000);
manager.addAtm();manager.addAtm();manager.addAtm();manager.addAtm();manager.addAtm();
manager.Queue.on('changeTurn++', () => {
    manager.start(2000, 3000);
});
manager.logger();
