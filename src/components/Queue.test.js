import Queue from './Queue';

const queue = new Queue();

test('this turn to contain Person', () => {
  queue.addPerson();
  expect(queue.turn).toHaveLength(1);
});

test('returnQueue возвращает длину массива', () => {
  expect(queue.returnQueue()).toBe(1);
});

test('removePerson удаляет 1 элемент из массива', () => {
  queue.removePerson();
  expect(queue.turn).toHaveLength(0);
});
