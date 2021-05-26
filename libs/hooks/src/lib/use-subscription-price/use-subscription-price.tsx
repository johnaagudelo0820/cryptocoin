import { useCallback } from 'react';

import { AssetAtom } from '@coincap/interfaces';
import { useWebSocket } from '../use-websocket/use-websocket';

/* eslint-disable-next-line */
export interface UseSubscriptionPriceProps {
  assets: AssetAtom,
  setAssets: any;
}
export function useSubscriptionPrice({ assets, setAssets }: UseSubscriptionPriceProps) {
  const updateAssetCrypto = (e: any) => {
    if (assets.loading) return;
    const updateCurrent = JSON.parse(e.data);
    setAssets((oldAssets: AssetAtom) => {
      const assetsCoin = Object.assign({}, oldAssets.hashCoins);
      Object.keys(updateCurrent).forEach(current => {
        const crypto = Object.assign({}, { ...assetsCoin[current], priceUsd: updateCurrent[current] });
        assetsCoin[current] = crypto;
      });
      const listAssets = Object.keys(assetsCoin).map(asset => assetsCoin[asset]);
      return {
        ...oldAssets,
        list: listAssets,
        hashCoins: assetsCoin,
      }
    });
  };

  const suscritionWsPrice = useCallback(updateAssetCrypto, [assets, setAssets]);

  useWebSocket(assets.assetParam, suscritionWsPrice);
}

export default useSubscriptionPrice;
