import EventEmitter from './EventEmitter';

export default function Atm() {
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