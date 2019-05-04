import Atm from './Atm';

const atm = new Atm();

test('setBusy устанавливает стэйт в бизи и счетчик увеличивается', () => {
  atm.state = null;
  atm.count = 0;
  atm.setBusy();
  expect(atm.state).toBe('busy');
  expect(atm.count).toBe(1);
});

test('setFree устанавливает стейт в фри', () => {
  atm.state = null;
  atm.setFree();
  expect(atm.state).toBe('free');
});

test('getState возвращает значение atm.state', () => {
  atm.state = null;
  expect(atm.getState()).toBe(null);
});

test('getCount возвращает atm.count', () => {
  atm.count = 0;
  expect(atm.getCount()).toBe(0);
});
