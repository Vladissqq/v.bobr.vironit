
import AtmUI from './AtmUI';

const atmU = new AtmUI();

const atm = {
  count: 0,
};

test('atmRender добавляет Atm-item в atm-container', () => {
  document.body.innerHTML = "<div class='container'>  <div class='atm--container'></div></div>";
  atmU.atmRender(atm);
  const container = document.getElementsByClassName('atm--container');
  expect(container).toHaveLength(1);
});

test('setBusy меняет класс на бизи ', () => {
  document.body.innerHTML = "<div class='atm-item free'></div>";
  const arr = document.getElementsByClassName('atm-item');
  [atmU.atm] = arr;
  atmU.setBusyUI(atmU.atm);
  expect(atmU.atm.getAttribute('class')).toEqual('busy atm-item');
});

test('setFree меняет класс на free ', () => {
  // document.body.innerHTML = "<div class='atm-item'></div>";
  // const arr = document.getElementsByClassName('atm-item');
  // [atmU.atm] = arr;
  atmU.setFreeUI(atmU.atm);
  expect(atmU.atm.getAttribute('class')).toEqual('free atm-item');
});

test('atmRender проверяем что рендерится', () => {
  expect(document.getElementsByClassName('free atm-item')[0]).toBeTruthy();
});

test('changeCounter перерендер банкомат', () => {
  atm.getCount = jest.fn();
  atmU.changeCounter(atm);
  expect(document.getElementsByClassName('free atm-item')[0]).toBeTruthy();
});
