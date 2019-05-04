
export default function UIQueue(Queue) {
  this.Queue = Queue;
}

UIQueue.prototype.queueUI = function queueUI() {
  const oldQueue = document.getElementsByClassName('queue-count--container');
  const appContainer = document.getElementsByClassName('container');
  const queue = document.createElement('div');
  queue.setAttribute('class', 'queue-count--container');

  queue.innerHTML = `
              <h1 class='queue--count'>${this.Queue.returnQueue()}</h1>
          `;
  appContainer[0].replaceChild(queue, oldQueue[0]);
};

UIQueue.prototype.queueRender = function queueRender() {
  this.Queue.on('changeTurn', () => {
    this.queueUI();
  });
};
