import UIQueue from './QueueUI';

const queue = new UIQueue();

test('queueUI рендерит счетчик', () => {
  document.body.innerHTML = "<div class='container'><h1 class='queue--count'></h1></div>";
  const q = {};
  q.returnQueue = jest.fn();
  queue.queueUI(q);
  expect(document.getElementsByClassName('queue-count--container')[0]).toBeTruthy();
});
