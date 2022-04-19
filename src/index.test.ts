import TeHai from './index';

test('Hi from TeHai', () => {
  // eslint-disable-next-line no-console
  console.log = jest.fn();

  const teHai = new TeHai();
  teHai.hi();

  // eslint-disable-next-line no-console
  expect(console.log).toHaveBeenCalledWith('TeHai🀄');
});
