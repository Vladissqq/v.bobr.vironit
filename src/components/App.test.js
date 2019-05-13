
import App from './App';

jest.useFakeTimers();

const app = new App();

test('addAtm добавляет банкомат в atmTable atmTableUI', () => {
  const tableLenght = app.atmTable.length;
  const tableLenghtUI = app.atmTableUI.length;
  document.body.innerHTML = "<div class='container'>  <div class='atm--container'></div></div>";
  app.addAtm();

  expect(app.atmTable).toHaveLength(tableLenght + 1);
  expect(app.atmTableUI).toHaveLength(tableLenghtUI + 1);
});


test('changeTurn ждет рандомное время', () => {
  app.Queue.turn = [];
  app.changeTurn(100, 200);
  jest.advanceTimersByTime(1000);
  expect(app.Queue.turn.length).not.toBe(0);
});

test('removeAtm удаляет из atmTable последний элемент', () => {
  app.addAtm();
  const tableLenght = app.atmTable;
  app.removeAtm();
  expect(tableLenght).toHaveLength(1);
});

test('addBtn проверяем ивент листинер', () => {
  const event = new Event('click');
  document.body.innerHTML = `
  <div class="container">
    <div class="btn--container">
        <button id="btn-atm--add" class="btn">Add ATM</button>
        <button id="btn-atm--rem" class="btn">Delete ATM</button>
    </div>
</div>
  `;
  const addAtmnBtn = document.getElementById('btn-atm--add');
  app.addAtm = jest.fn();
  app.addBtn();
  addAtmnBtn.dispatchEvent(event);
  expect(app.addAtm).toHaveBeenCalledTimes(1);
});

test('remBtn проверяем ивент листенер', () => {
  const event = new Event('click');
  const remAtmBtn = document.getElementById('btn-atm--rem');
  app.removeAtm = jest.fn();
  app.remBtn();
  remAtmBtn.dispatchEvent(event);
  expect(app.removeAtm).toHaveBeenCalledTimes(1);
});

test('start меняет free на busy', () => {
  expect(app.atmTable[0].state).toBe('free');
  app.start();
  jest.advanceTimersByTime(1500);
  expect(app.atmTable[0].state).toBe('busy');
});

test('start find first free atm', () => {
  app.Queue.addPerson();
  app.addAtm();
  app.atmTable.find = jest.fn();
  app.start();
  expect(app.atmTable.find).toHaveBeenCalledTimes(1);
});

test('begin', () => {
  app.log.loggerQueue = jest.fn();
  app.start = jest.fn();
  app.begin();
  app.Queue.emit('changeTurn');
  expect(app.start).toHaveBeenCalledTimes(1);
});

test('perOrNo', () => {
  app.Queue.turn = [];
  app.perOrNo();
  expect(app.perOrNo()).toBe(1000);
  app.Queue.addPerson();
  app.Queue.turn[0].personTime = 100;
  app.perOrNo();
  expect(app.perOrNo()).toBe(100);
});

test('addAtm вызываем сет из фри', () => {
  app.addAtm();
  app.atmTable[0].setBusy();
  app.atmTable[0].setFree = jest.fn();

  jest.advanceTimersByTime(1000);
  expect(app.atmTable[0].setFree).toHaveBeenCalled();
});

test('addAtm тестим подписку на фри', () => {
  document.body.innerHTML = "<div class='container'>  <div class='atm--container'></div></div>";
  const app2 = new App();
  app2.addAtm();
  app2.atmTableUI[0].setFreeUI = jest.fn();
  app2.atmTableUI[0].changeCounter = jest.fn();
  app2.atmTable[0].setFree();
  jest.advanceTimersByTime(1000);
  expect(app2.atmTableUI[0].setFreeUI).toHaveBeenCalledTimes(1);
});
