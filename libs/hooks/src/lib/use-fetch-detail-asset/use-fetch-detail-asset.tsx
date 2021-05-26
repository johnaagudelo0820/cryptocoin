import { useEffect, useCallback } from 'react';

import { Http } from '@coincap/http';
import { AssetHistory } from '@coincap/interfaces';
import { formatterDate, formatterNumberWithDecimals, config } from '@coincap/utils';

export function useFetchDetailAsset(idCrypto: string, setAsset: any) {
  const callApi = async () => {
    const assetResponse = await Http.instance.get(`${config.API_BASE_URL}/${idCrypto}`);
    const historyResponse = await Http.instance.get(`${config.API_BASE_URL}/${idCrypto}/history?interval=d1`);

    const historyData: Array<AssetHistory> = [];
    historyResponse.data.forEach((snapshotCriptoTime: any): void => {
      const history = Object.assign({}, {
        time: formatterDate(snapshotCriptoTime.time),
        value: parseFloat(formatterNumberWithDecimals(snapshotCriptoTime.priceUsd, 2))
      });
      historyData.push(history);
    });

    setAsset(() => ({
      data: assetResponse.data,
      history: [...historyData],
      loading: false,
    }));
  };

  const getDetailAsset = useCallback(callApi, [idCrypto, setAsset]);

  useEffect(() => {
    getDetailAsset();
  }, [getDetailAsset]);
}

export default useFetchDetailAsset;
