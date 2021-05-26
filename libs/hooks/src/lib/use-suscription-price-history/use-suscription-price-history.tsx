import { useCallback } from 'react';
import moment from 'moment';

import { AssetHistory, AssetAtom } from '@coincap/interfaces'
import { formatterNumberWithDecimals, cloneObject } from '@coincap/utils';

import useWebSocket from '../use-websocket/use-websocket';

export function useSuscriptionPriceHistory(idCrypto: string, setAsset: any) {
  const updateAssetHistory = (e: any) => {
    const updateCurrent = JSON.parse(e.data);
    const currentHistory: AssetHistory = {
      time: moment().format('YYYY-MM-DD'),
      value: parseFloat(formatterNumberWithDecimals(updateCurrent[idCrypto], 2))
    };
    setAsset((oldAsset: AssetAtom) => {
      const currentAsset = cloneObject(Object.assign({}, oldAsset));
      const historyData: Array<AssetHistory> = currentAsset.history;
      const dataAsset = currentAsset.data;
      dataAsset.priceUsd = updateCurrent[idCrypto];
      historyData.push(currentHistory);

      return {
        ...oldAsset,
        data: dataAsset,
        history: historyData,
      }
    });
  };

  const suscriptionPriceHistory = useCallback(updateAssetHistory, [idCrypto, setAsset]);

  useWebSocket(idCrypto, suscriptionPriceHistory);
}

export default useSuscriptionPriceHistory;
