import { renderHook, act } from '@testing-library/react-hooks'

import useSuscriptionPriceHistory from './use-suscription-price-history';

describe('UseSuscriptionPriceHistory', () => {
  it('should render successfully', () => {
    const idCrypto = 'bitcoin';
    const callbackSuscription = jest.fn();
    const { result } = renderHook(() => useSuscriptionPriceHistory(idCrypto, callbackSuscription));
    expect(typeof result.current.suscriptionPriceHistory).toBe('function');
    act(() => {
      result.current.suscriptionPriceHistory({
        data: '{"bitcoin": "56678.34"}'
      });
    });
    expect(callbackSuscription).toHaveBeenCalled();
  });
});
