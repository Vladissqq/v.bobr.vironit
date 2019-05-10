
export default function UIQueue(Queue) {
  this.Queue = Queue;
}

UIQueue.prototype.queueUI = function queueUI(q) {
  const oldQueue = document.getElementById('queue-count');
  const appContainer = document.getElementsByClassName('container');
  const queue = document.createElement('div');
  queue.setAttribute('class', 'queue-count--container');
  queue.setAttribute('id', 'queue-count');

  queue.innerHTML = `
              <h1 class='queue--count'>${q.returnQueue()}</h1>
          `;
  appContainer[0].replaceChild(queue, oldQueue);
};

UIQueue.prototype.queueRender = function queueRender() {
  this.Queue.on('changeTurn', () => {
    this.queueUI(this.Queue);
  });
};
