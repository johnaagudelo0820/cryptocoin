import { renderHook, act } from '@testing-library/react-hooks'

import useSubscriptionPrice from './use-subscription-price';

import { MockAssets } from '@coincap/utils'; 

describe('UseSubscriptionPrice', () => {
  it('should render successfully', () => {
    const callbackSuscription = jest.fn();
    const { result } = renderHook(() => useSubscriptionPrice({
      assets: MockAssets,
      setAssets: callbackSuscription,
    }));
    expect(typeof result.current.updateAssetCrypto).toBe('function');
    act(() => {
      result.current.updateAssetCrypto({
        data: '{"bitcoin": "56678.34"}'
      });
    });
    expect(callbackSuscription).toHaveBeenCalled();
  });
});
