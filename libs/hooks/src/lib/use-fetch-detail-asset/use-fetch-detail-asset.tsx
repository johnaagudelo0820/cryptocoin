import { useEffect, useCallback } from 'react';

import { Http } from '@coincap/http';
import { AssetHistory } from '@coincap/interfaces';
import { formatterDate, formatterNumberWithDecimals, config } from '@coincap/utils';

export function useFetchDetailAsset(idCrypto: string, setAsset: any) {
  const callApi = async () => {
    const assetResponse = await Http.instance.get(`${config.API_BASE_URL}/${idCrypto}`);
    const historyResponse = await Http.instance.get(`${config.API_BASE_URL}/${idCrypto}/history?interval=d1`);

    const historyData: Array<AssetHistory> = [];
    const labelsData: Array<string> = [];
    const pricesData: Array<number> = [];
    historyResponse.data.forEach((snapshotCriptoTime: any): void => {
      const time = formatterDate(snapshotCriptoTime.time);
      const value = parseFloat(formatterNumberWithDecimals(snapshotCriptoTime.priceUsd, 2));
      const history = Object.assign({}, { time, value });
      labelsData.push(time);
      pricesData.push(value);
      historyData.push(history);
    });

    setAsset(() => ({
      data: assetResponse.data,
      history: [...historyData],
      labels: labelsData,
      prices: pricesData,
      loading: false,
    }));
  };

  const getDetailAsset = useCallback(callApi, [idCrypto, setAsset]);

  useEffect(() => {
    getDetailAsset();
  }, [getDetailAsset]);
}

export default useFetchDetailAsset;
