/* eslint-disable no-console */
import Loger from './loger';
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
  this.log = new Loger();
  this.atmTable = [];
  this.atmTableUI = [];
}

App.prototype = Object.create(EventEmitter.prototype);
App.prototype.constructor = App;


App.prototype.changeTurn = function changeTurn(min, max) {
  return setTimeout((
    () => {
      this.Queue.addPerson();
      this.changeTurn(min, max);
    }),
  App.prototype.rand(min, max));
};

App.prototype.rand = function rand(min, max) {
  return (max - min) * Math.random() + min;
};


App.prototype.addAtm = function addAtm() {
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
    }, this.perOrNo());
  });

  this.atmTable.push(atm);
  this.atmTableUI.push(atmUI);
  this.log.loggerAtm(atm, this.atmTable.indexOf(atm));
};

App.prototype.perOrNo = function perOrNo() {
  if (this.Queue.turn[0]) {
    return this.Queue.turn[0].personTime;
  }
  return 1000;
};

App.prototype.removeAtm = function removeAtm() {
  this.atmTable.pop();
  const rem = this.atmTableUI.pop();
  rem.emit('remove', this.atmTableUI);
};


App.prototype.stateIsFree = function stateIsFree(atm) {
  return atm.state === 'free';
};

App.prototype.start = function start() {
  if (this.Queue.returnQueue() > 0) {
    const firstFreeAtm = this.atmTable.find(this.stateIsFree);
    if (firstFreeAtm) {
      setTimeout(() => {
        if (this.Queue.returnQueue() > 0 && firstFreeAtm.state === 'free') {
          firstFreeAtm.setBusy();
        }
      }, 1000);
    }
  }
};

App.prototype.begin = function begin() {
  this.log.loggerQueue(this.Queue);
  this.Queue.on('changeTurn', () => {
    this.start();
  });
};

App.prototype.addBtn = function addBtn() {
  const addAtmnBtn = document.getElementById('btn-atm--add');
  addAtmnBtn.addEventListener('click', () => this.addAtm());
};

App.prototype.remBtn = function remBtn() {
  const remAtmBtn = document.getElementById('btn-atm--rem');
  remAtmBtn.addEventListener('click', () => this.removeAtm());
};
