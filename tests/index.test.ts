// tests/index.test.ts
import { foo } from '../src/index';

test('foo function returns "foo" string', () => {
  expect(foo()).toBe('foo');
});