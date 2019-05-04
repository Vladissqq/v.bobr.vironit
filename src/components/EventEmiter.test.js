import { emit } from 'cluster';
import EventEmitter from './EventEmitter';

const emitter = new EventEmitter();
const handler = jest.fn();

test('check', () => {
  emitter.on('e', handler);
  expect(emitter.eventTable).toHaveProperty('e');
});

test('on содержит функцию', () => {
  expect(emitter.eventTable.e).toContain(handler);
});

test('on отписка от ненужной функции', () => {
  const handler2 = jest.fn();
  const unsubscribe = emitter.on('name', handler2);
  unsubscribe();

  expect(emitter.eventTable).not.toContain(handler2);
});

test('fn вызывается с определенными аргументами', () => {
  emitter.emit('e', 1);
  expect(handler).toHaveBeenCalledWith(1);
});
