import { renderHook, act } from '@testing-library/react-hooks'

import useWebSocket from './use-websocket';

describe('UseWebsocket', () => {
  it('should render successfully', () => {
    const callbackSuscription = jest.fn();
    const { result } = renderHook(() => useWebSocket('bitcoin', callbackSuscription));
    expect(typeof result.current.wsRef).toBe('object');
  });
});
