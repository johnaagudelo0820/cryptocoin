import { renderHook } from '@testing-library/react-hooks'

import useFetchDetailAsset from './use-fetch-detail-asset';

describe.skip('UseFetchDetailAsset', () => {
  it('should render successfully', () => {
    const callbackFetch = jest.fn();
    const idCrypto = 'bitcoin';
    const { result } = renderHook(() => useFetchDetailAsset(idCrypto, callbackFetch));
    expect(result.current.getDetailAsset).toBeCalled();
  });
});
