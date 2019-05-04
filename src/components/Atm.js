import EventEmitter from './EventEmitter';

export default function Atm() {
  EventEmitter.call(this);

  this.state = 'free';
  this.count = 0;
}

Atm.prototype = Object.create(EventEmitter.prototype);
Atm.prototype.constructor = Atm;

Atm.prototype.setBusy = function setBusy() {
  this.state = 'busy';
  this.emit('busy', this.state);
  this.count += 1;
};

Atm.prototype.setFree = function setFree() {
  this.state = 'free';
  this.emit('free', this.state);
};

Atm.prototype.getState = function getState() {
  return this.state;
};

Atm.prototype.getCount = function getCount() {
  return this.count;
};
