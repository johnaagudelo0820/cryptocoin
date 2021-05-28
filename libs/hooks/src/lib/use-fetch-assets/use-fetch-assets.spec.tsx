import { renderHook } from '@testing-library/react-hooks'

import { config } from '@coincap/utils';

import useFetchAssets from './use-fetch-assets';

describe.skip('UseFetchAssets', () => {
  it('should render successfully', () => {
    const callbackFetch = jest.fn();
    const { result } = renderHook(() => useFetchAssets(config.API_BASE_URL, callbackFetch));
    expect(result.current.getAsset).toBeCalled();
  });
});
