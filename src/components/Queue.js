
import EventEmitter from './EventEmitter';
import Person from './Person';

export default function Queue() {
  EventEmitter.call(this);

  this.turn = [];
}

Queue.prototype = Object.create(EventEmitter.prototype);
Queue.prototype.constructor = Queue;

Queue.prototype.returnQueue = function returnQueue() {
  return this.turn.length;
};

Queue.prototype.addPerson = function addPerson() {
  this.turn.push(this.personTimeMaker(1000, 2000).next().value);
  this.emit('changeTurn', this.turn.length);
};

Queue.prototype.removePerson = function removePerson() {
  this.turn.splice(0, 1);
  this.emit('changeTrun', this.turn.length);
};

Queue.prototype.personTimeMaker = function* personTimeMaker(min, max) {
  while (true) yield new Person(this.rand(min, max));
};

Queue.prototype.rand = function rand(min, max) {
  return (max - min) * Math.random() + min;
};
