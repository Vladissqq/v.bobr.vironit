import EventEmitter from './EventEmitter';

export default function Queue() {
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