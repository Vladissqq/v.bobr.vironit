import UIQueue from './QueueUI';
import Queue from '../Queue';

const q = new Queue();
const queue = new UIQueue(q);


test('queueUI рендерит счетчик', () => {
  q.addPerson();
  document.body.innerHTML = "<div class='container'><h1 id='queue--count'></h1></div>";
  q.returnQueue = jest.fn();
  queue.queueUI(q);
  expect(q.returnQueue).toHaveBeenCalled();
});

test ('queueRender', () => {
  queue.queueUI = jest.fn();
  queue.queueRender();
  q.addPerson();
  expect(queue.queueUI).toHaveBeenCalled();
});