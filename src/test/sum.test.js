import multiply from '../multiply';
import libraryAsyncMultiply from '../libraryAsyncMultiply';

test('Plain multiply', () => {
  expect(multiply(2, 4)).toBe(8);
});

test('Async multipy', signalEndOfTest => {
  async function testAsyncMultiply() {
    const product = await libraryAsyncMultiply(6, 4);
    expect(product).toBe(24);
    signalEndOfTest();
  }
  testAsyncMultiply();
});
