import { useCallback } from 'react';
import moment from 'moment';

import { AssetHistory, AssetDetailAtom } from '@coincap/interfaces'
import { formatterNumberWithDecimals, cloneObject } from '@coincap/utils';

import useWebSocket from '../use-websocket/use-websocket';

export function useSuscriptionPriceHistory(idCrypto: string, setAsset: any) {
  const updateAssetHistory = (e: any) => {
    const updateCurrent = JSON.parse(e.data);
    const time = moment().format('YYYY-MM-DD');
    const value = parseFloat(formatterNumberWithDecimals(updateCurrent[idCrypto], 2));
    const currentHistory: AssetHistory = {  time, value };
    setAsset((oldAsset: AssetDetailAtom) => {
      const currentAsset = cloneObject(Object.assign({}, oldAsset));
      const historyData: Array<AssetHistory> = currentAsset.history;
      const labelsData: Array<string> = currentAsset.labels;
      const priceData: Array<number> = currentAsset.prices;
      const dataAsset = currentAsset.data;
      dataAsset.isUp = updateCurrent[idCrypto] > dataAsset.priceUsd;
      dataAsset.priceUsd = updateCurrent[idCrypto];
      labelsData.push(time);
      priceData.push(value);
      historyData.push(currentHistory);

      return {
        ...oldAsset,
        data: dataAsset,
        labels: labelsData,
        prices: priceData,
        history: historyData,
      }
    });
  };

  const suscriptionPriceHistory = useCallback(updateAssetHistory, [idCrypto, setAsset]);

  useWebSocket(idCrypto, suscriptionPriceHistory);
}

export default useSuscriptionPriceHistory;
