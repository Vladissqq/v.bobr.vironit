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

};

Atm.prototype = Object.create(EventEmitter.prototype);
Atm.prototype.constructor = Atm;

Atm.prototype.setBusy = function () {
  this.state = 'busy';
  this.emit('busy', this.state);
  this.count++;

};

Atm.prototype.setFree = function () {

  this.state = 'free';
  this.emit('free', this.state);

};

Atm.prototype.setWait = function () {
  this.state = 'wait';
  this.emit('wait', this.state);
}

Atm.prototype.getState = function () {
  return this.state;
}

Atm.prototype.getCount = function getCount() {
  return this.count;
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

Queue.prototype.addPerson = function addPerson() {
  this.turn++;
  this.emit('changeTurn', this.turn);
};

Queue.prototype.removePerson = function removePerson() {
  this.turn--;
  this.emit('changeTrun', this.turn);
}


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
      this.Queue.addPerson();
      this.changeTurn(min, max);
    }),
    App.prototype.rand(min, max));
};

App.prototype.rand = function (min, max) {

  return (max - min) * Math.random() + min;
};



App.prototype.addAtm = function () {
  const atm = new Atm();
  const atmUI = new UIAtm();
  atmUI.atmRender(atm);
  atmUI.on('remove', () => atmUI.removeAtm());
  atm.on('free', () => {
    this.start();
    atmUI.setFreeUI();
    atmUI.changeCounter(atm);
  });
  atm.on('busy', () => {
    atmUI.setBusyUI();
    this.Queue.removePerson();
    setTimeout(() => {
      if (!this.stateIsFree(atm)) {
        atm.setFree();
      }
    }, 2000);
  });

  this.atmTable.push(atm);
  this.atmTableUI.push(atmUI);
  console.log(this.atmTableUI);

};

App.prototype.removeAtm = function removeAtm() {
  this.atmTable.pop();
  const rem = this.atmTableUI.pop();
  rem.emit('remove',this.atmTableUI);

}

/* App.prototype.removeAtm = function removeAtm() {
  this.atmTable.pop();
  const UI = this.atmTableUI.pop();
  UI.emit('deleted', this.atmTable);
} */

App.prototype.stateIsFree = function stateIsFree(atm) {
  return atm.state === 'free';
};

App.prototype.start = function start() {
  if (this.Queue.returnQueue() > 0) {
    let firstFreeAtm = this.atmTable.find(this.stateIsFree);
    if (firstFreeAtm) {
      setTimeout(() => {
        if (this.Queue.returnQueue() > 0 && firstFreeAtm.state === 'free') {
          firstFreeAtm.setBusy();
          console.log(firstFreeAtm.state);
        }
      }, 1000);

    };
  }

};

App.prototype.begin = function begin() {
  this.Queue.on('changeTurn', () => {
    this.start();

  });
};





App.prototype.logger = function () {
  this.Queue.on('changeTurn', () => console.log('В очереди ' + this.Queue.turn + 'человек'));
  for (let i = 0; i < this.atmTable.length; i++) {
    this.atmTable[i].on('busy', () => console.log('Банкомат  ' + i + ' занят'));
    this.atmTable[i].on('free', () => console.log('Банкомат  ' + i + ' ``   свободен'));
    this.atmTable[i].on('free', () => console.log('Банкомат' + i + 'обслужил ' + this.atmTable[i].count + 'человек'));
  }
};


App.prototype.addBtn = function addBtn() {
  const addAtmnBtn = document.getElementById('btn-atm--add');
  addAtmnBtn.addEventListener('click', () => this.addAtm());
};

App.prototype.remBtn = function remBtn() {
  const remAtmBtn = document.getElementById('btn-atm--rem');
  remAtmBtn.addEventListener('click', () => this.removeAtm());
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
            <h1 class='queue--count'>${this.Queue.returnQueue()}</h1>
        `;
  appContainer[0].replaceChild(queue, oldQueue[0]);

};

UIQueue.prototype.queueRender = function () {
  this.Queue.on('changeTurn', () => {
    this.queueUI()
  });
};




function UIAtm() {
  EventEmitter.call(this);
  this.atm = null;
  this.count = 0;
}

UIAtm.prototype = Object.create(EventEmitter.prototype);
UIAtm.prototype.constructor = UIAtm;

UIAtm.prototype.atmRender = function (atm) {
  const atmContainer = document.getElementsByClassName('atm--container');
  const atmItem = document.createElement('div');
  this.atm = atmItem;
  this.count = atm.getCount();
  atmItem.setAttribute('class', 'atm-item free');
  atmItem.innerHTML =
    `       <h1>ATM</h1>
                <div class="atm-item--count ">
                  ${atm.count}
                </div>
        `;

  atmContainer[0].appendChild(atmItem);


};

UIAtm.prototype.changeCounter = function changeCounter(atm) {
  this.atm.innerHTML =
    `       <h1>ATM</h1>
                <div class="atm-item--count ">
                  ${atm.getCount()}
                </div>
        `;
}

UIAtm.prototype.setBusyUI = function (atm) {
  this.atm.setAttribute('class', 'atm-item busy');


};

UIAtm.prototype.setFreeUI = function (atm) {
  this.atm.setAttribute('class', 'atm-item free');
};

UIAtm.prototype.removeAtm = function removeAtm() {
  const container = document.getElementsByClassName('atm--container');
  container[0].removeChild(this.atm); 

}

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




manager.addBtn();
manager.remBtn();
manager.UIQueue.queueRender();
manager.logger();
manager.begin();
manager.changeTurn(1000, 2000);