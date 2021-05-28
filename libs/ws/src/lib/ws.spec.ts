import { Ws } from './ws';

describe('Ws', () => {
  it('should work', () => {
    const ws = new Ws('wss://ws.coincap.io/prices?assets=bitcoin');
    expect(typeof ws.open).toEqual('function');
    expect(typeof ws.message).toEqual('function');
    expect(typeof ws.error).toEqual('function');
    expect(typeof ws.close).toEqual('function');
  });
});
