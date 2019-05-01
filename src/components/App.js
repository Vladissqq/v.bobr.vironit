import EventEmitter from './EventEmitter';
import Atm from './Atm';
import Queue from './Queue';

import UIAtm from './UI/AtmUI';
import UIQueue from './UI/QueueUI';

export default function App() {
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