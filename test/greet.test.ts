import { expect, test, describe } from 'vitest';
import { greet } from '../src';

describe('greet', () => {
  test('should say hello world when given world', () => {
    const result = greet('world');
    expect(result).toBe('Hello world');
  });
});
