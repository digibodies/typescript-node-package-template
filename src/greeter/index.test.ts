import { greeter } from './index';

describe('sayHello', () => {
  test('should print firstname and lastname', () => {
    expect(greeter({ firstname: 'Blaine', lastname: 'Garrett' })).toBe('Hello Blaine Garrett.');
  });

  test('should print firstname when lastname missing', () => {
    expect(greeter({ firstname: 'Blaine' })).toBe('Hello Blaine.');
  });
});
