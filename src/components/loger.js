export default function Loger() {

}

Loger.prototype.loggerAtm = function loggerAtm(atm, i) {
  atm.on('busy', () => console.log(`Банкомат занят ${i}`));
  atm.on('free', () => console.log(`Банкомат свободен ${i}`));
  atm.on('free', () => console.log(`Банкомат ${i} обслужил ${atm.count}человек`));
};

Loger.prototype.loggerQueue = function loggerQueue(queue) {
  queue.on('changeTurn', () => console.log(`В очереди ${queue.turn.length}человек`));
};
