import { useEffect, useCallback } from 'react';

import { Http } from '@coincap/http';
import { Asset, AssetAtom } from '@coincap/interfaces';

/* eslint-disable-next-line */
type useFetchAssetsProps = (callback: () => AssetAtom) => void;

export function useFetchAssets(url: string, callbackAssets: useFetchAssetsProps) {
  const getAPIAssets = async () => {
    const response = await Http.instance.get(url);

    const hashCoins = response.data.reduce((listCoins: any, coin: Asset) => {
      listCoins[coin.id] = coin;
      return listCoins;
    }, {});

    callbackAssets(() => {
      const updateAsset: AssetAtom = {
        assetParam: response.data.map((coin: Asset) => coin.id).join(','),
        hashCoins,
        list: [...response.data],
        loading: false,
      };
      return updateAsset;
    });
  }

  const getAsset = useCallback(getAPIAssets, [url, callbackAssets]);

  useEffect(() => {
    getAsset();
  }, [getAsset]);

  return { getAsset };
}

export default useFetchAssets;
