
export default function EventEmitter() {
  this.eventTable = {};
}

EventEmitter.prototype.emit = function emit(eventName, ...args) {
  const event = this.eventTable[eventName];
  if (event) {
    event.forEach((fn) => {
      // eslint-disable-next-line prefer-spread
      fn.apply(null, args);
    });
  }
};

EventEmitter.prototype.on = function on(eventName, fn) {
  if (!this.eventTable[eventName]) {
    this.eventTable[eventName] = [];
  }

  this.eventTable[eventName].push(fn);
  return () => {
    this.eventTable[eventName] = this.eventTable[eventName].filter(eventFn => fn !== eventFn);
  };
};
