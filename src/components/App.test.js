
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
