import { Http } from './http';

describe('http', () => {
  it('should work', () => {
    expect(typeof Http.instance.get).toEqual('function');
  });
});
