import game from '../app';

test('проверка состояния здоровья игрока', () => {
  const playerTest = { name: 'Маг', health: 100 };
  const received = game(playerTest);
  expect(received).toBe('healthy');
});

test('проверка состояния здоровья игрока', () => {
  const playerTest = { name: 'Маг', health: 40 };
  const received = game(playerTest);
  expect(received).toBe('wounded');
});

test('проверка состояния здоровья игрока', () => {
  const playerTest = { name: 'Маг', health: 8 };
  const received = game(playerTest);
  expect(received).toBe('critical');
});
