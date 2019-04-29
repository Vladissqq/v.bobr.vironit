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

Atm.prototype.setWait = function () {
    this.state = 'wait';
    this.emit('wait', this.state);
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

Queue.prototype.returnQueue = function () {
    return this.turn;
};




function App() {
    EventEmitter.call(this);
    this.Queue = new Queue();
    this.UIQueue = new UIQueue(this.Queue);
    this.UIAtm = new UIAtm();
    this.atmTable = [];
    this.atmTableUI = [];
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
    this.atmUi = new UIAtm(atm);
    this.atmTable.push(atm);
    this.atmUi.atmRender();
    this.atmTableUI.push(this.atmUi);
    console.log(this.atmTableUI);
};

App.prototype.start = function (min, max) {
    if (this.Queue.turn > 0) {
        for (let i = 0; i < this.atmTable.length; i++) {
            if (this.atmTable[i].getState() === 'free') {
                this.atmTable[i].setBusy();
                this.atmTableUI[i].setBusyUI();
                this.remove();
                setTimeout(() => {
                    setTimeout(()=>{
                        this.atmTable[i].setFree();
                        this.atmTableUI[i].setFreeUI();
                    },
                    App.prototype.rand(min, max));
                }, App.prototype.rand(min, max));
            }
            if (this.Queue.returnQueue() === 0) break;
        }
    }
};

App.prototype.logger = function () {
    this.Queue.on('changeTurn++', () => console.log('В очереди ' + this.Queue.turn + 'человек'));
    for (let i = 0; i < this.atmTable.length; i++) {
        this.atmTable[i].on('busy', () => console.log('Банкомат  '+i+' занят'));
        this.atmTable[i].on('free', () => console.log('Банкомат  '+i+' ``   свободен'));
        this.atmTable[i].on('free', () => console.log('Банкомат'+ i+'обслужил ' + this.atmTable[i].count + 'человек'));
    }
};




function UIQueue(Queue) {
    this.Queue = Queue;

};

UIQueue.prototype.queueUI = function () {

    const oldQueue = document.getElementsByClassName('queue-count--container');
    const appContainer = document.getElementsByClassName('container');
    const queue = document.createElement('div');
    queue.setAttribute('class', 'queue-count--container');

    queue.innerHTML =
        `
            <h1 class='queue--count'>${this.Queue.turn}</h1>
        `;
    appContainer[0].replaceChild(queue, oldQueue[0]);

};

UIQueue.prototype.queueRender = function () {
    this.Queue.on('changeTurn++', () => {
        this.queueUI()
    })
};




function UIAtm(Atm) {
    this.Atm = Atm;
};


UIAtm.prototype.atmRender = function () {
    const atmContainer = document.getElementsByClassName('atm--container');
    const atmItem = document.createElement('div');
    atmItem.setAttribute('class', 'atm-item free');
    atmItem.innerHTML =
        `       <h1>ATM</h1>
                <div class="atm-item--count ">
                  ${this.Atm.count}
                </div>
        `;

    atmContainer[0].appendChild(atmItem);

    
};

UIAtm.prototype.setBusyUI = function () {
    const atmItem = document.getElementsByClassName('atm-item free');
    atmItem[0].setAttribute('class', 'atm-item busy');
};

UIAtm.prototype.setFreeUI = function () {
    const atmItem = document.getElementsByClassName('atm-item busy');
    atmItem[0].setAttribute('class', 'atm-item free');
};

/* AppUI.prototype.atmRender = function (){
   
        const oldAtm = document.getElementsByClassName('atm-item');
        const atmContainer = document.getElementsByClassName('atm--container');
        const atm = document.createElement(div);
        atm.setAttribute('class','atm-item free');

        atm.innerHTML = 
        `       <h1>ATM</h1>
                <div class="atm-item--count">
                  ${this.atmTable[i].count}
                </div>
        `;

        atmTable.map()
};
 */


const manager = new App();



manager.changeTurn(1000, 4000);
manager.addAtm();manager.addAtm();
manager.Queue.on('changeTurn++', () => {
    manager.start(1000, 2000);

});
manager.logger();
manager.UIQueue.queueRender();
