import TeHai from './index';

test('Hi from TeHai', () => {
  console.log = jest.fn();

  const teHai = new TeHai();
  teHai.hi();

  expect(console.log).toHaveBeenCalledWith('TeHai🀄');
});
