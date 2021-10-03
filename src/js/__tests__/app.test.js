import Validator from '../app.js';

test('1', () => {
  expect(Validator.validatetelephonenumber('8 (927) 000-00-00')).toEqual('+79270000000');
});
test('2', () => {
  expect(Validator.validatetelephonenumber('+7 960 000 00 00')).toEqual('+79600000000');
});
test('3', () => {
  expect(Validator.validatetelephonenumber('+86 000 000 0000')).toEqual('+860000000000');
});
