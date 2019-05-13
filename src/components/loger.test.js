import Logger from './loger';
import Queue from './Queue';
import { JestEnvironment } from '@jest/environment';

const queue = new Queue();
const log = new Logger();

test('queue', () => {
  global.console = { log: jest.fn() };
  queue.addPerson();
  log.loggerQueue(queue);
  queue.addPerson();
  expect(console.log).toHaveBeenCalled();
});
