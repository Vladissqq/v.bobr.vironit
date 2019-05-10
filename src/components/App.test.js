
import App from './App';

const app = new App();

test('addAtm добавляет банкомат в atmTable atmTableUI', () => {
  const tableLenght = app.atmTable.length;
  const tableLenghtUI = app.atmTableUI.length;
  document.body.innerHTML = "<div class='container'>  <div class='atm--container'></div></div>";
  app.addAtm();

  expect(app.atmTable).toHaveLength(tableLenght + 1);
  expect(app.atmTableUI).toHaveLength(tableLenghtUI + 1);
});

jest.useFakeTimers();

test('changeTurn ждет рандомное время', () => {
  const timer = app.changeTurn;
  timer();

  expect(setTimeout).toHaveBeenCalledTimes(1);
  expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), app.rand());
});

test('removeAtm удаляет из atmTable последний элемент', () => {
  app.addAtm();
  const tableLenght = app.atmTable;
  app.removeAtm();
  expect(tableLenght + 1).toHaveLength(app.atmTable);
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

test('start меняет free на busy',() => {
  app.atmTable = [];
  app.addAtm();
  app.Queue.turn = 5;
  console.log(app.Queue.returnQueue());// undefined
  app.start();
  setTimeout((expect(app.atmTable[0].state).toBe('busy')), 2000);
});
