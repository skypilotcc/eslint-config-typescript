import * as module from '../index';

describe('index.js', () => {
  it('should export a module', () => {
    expect(typeof module).toBe('object');
  });
});
