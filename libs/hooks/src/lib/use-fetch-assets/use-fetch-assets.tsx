import { useEffect } from 'react';

import { Http } from '@coincap/http';

/* eslint-disable-next-line */
export interface useFetchAssetsProps {
  callbackAssets: (oldState) => void,
}

export function useFetchAssets(url: string, callbackAssets: useFetchAssetsProps) {
  const getCoins = async () => {
    const response = await Http.instance.get(url);

    const hashCoins = response.data.reduce((listCoins, coin) => {
      listCoins[coin.id] = coin;
      return listCoins;
    }, {});

    callbackAssets((oldAssets) => ({
      ...oldAssets,
      assetParam: response.data.map(coin => coin.id).join(','),
      hashCoins,
      list: [...response.data],
    }));
  }

  useEffect(() => {
    getCoins();
  }, []);
}

export default useFetchAssets;
