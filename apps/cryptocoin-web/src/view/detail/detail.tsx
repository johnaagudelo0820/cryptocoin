import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useRecoilState } from 'recoil';
import Chart from 'kaktana-react-lightweight-charts';
import { Box } from '@material-ui/core';
import moment from 'moment';

import { Http } from '@coincap/http';
import { assetdetailAtom } from '@coincap/atoms';
import { AssetHistory } from '@coincap/interfaces';
import { useWebSocket } from '@coincap/hooks';

/* eslint-disable-next-line */
export interface paramRoute {
  idCrypto: string,
}

export function Detail() {
  const { idCrypto }: paramRoute = useParams();
  const [asset, setAsset] = useRecoilState(assetdetailAtom);

  const criptoData = async () => {
    const assetResponse = await Http.instance.get(`https://api.coincap.io/v2/assets/${idCrypto}`);
    const historyResponse = await Http.instance.get(`https://api.coincap.io/v2/assets/${idCrypto}/history?interval=d1`);

    const historyData: Array<AssetHistory> = [];
    historyResponse.data.forEach((snapshotCriptoTime: any): void => {
      const history = Object.assign({}, {
        time: moment(snapshotCriptoTime.time).format('YYYY-MM-DD'),
        value: parseFloat(Number(snapshotCriptoTime.priceUsd).toFixed(2))
      });
      historyData.push(history);
    });

    setAsset(() => ({
      data: assetResponse.data,
      history: [...historyData],
      loading: false,
    }));
  };

  useEffect(() => {
    criptoData();
  }, []);

  const updateAssetHistory = (e: any) => {
    const updateCurrent = JSON.parse(e.data);
    const currentHistory: AssetHistory = {
      time: moment().format('YYYY-MM-DD h:mm:ss'),
      value: parseFloat(Number(updateCurrent[idCrypto]).toFixed(2))
    };
    setAsset((oldAsset) => {
      const currentAsset = JSON.parse(JSON.stringify(Object.assign({}, oldAsset)));
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

  useWebSocket(idCrypto, updateAssetHistory);

  const lineSeries = [{
    data: JSON.parse(JSON.stringify(asset.history)),
  }];
  const { priceUsd } = asset.data;
  return (
    <Box display="flex" >
      <Box>{priceUsd}</Box>
      <Chart
        options={{
          localization: {
            priceFormatter: function(price: string) {
              return `$${Number(price).toFixed(2)}`;
            }
          }
        }}
        lineSeries={lineSeries}
        autoWidth
        height={600}
        darkTheme={true}
      />
    </Box>
  );
}

export default Detail;
