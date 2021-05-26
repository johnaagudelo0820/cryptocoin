import React from 'react';
import { useParams } from "react-router-dom";
import { useRecoilState } from 'recoil';
import Chart from 'kaktana-react-lightweight-charts';
import { Box } from '@material-ui/core';

import { assetdetailAtom } from '@coincap/atoms';
import { useFetchDetailAsset, useSuscriptionPriceHistory } from '@coincap/hooks';
import { formatterNumberWithDecimals, cloneObject } from '@coincap/utils';

export interface paramRoute {
  idCrypto: string,
}

export function Detail() {
  const { idCrypto }: paramRoute = useParams();
  const [asset, setAsset] = useRecoilState(assetdetailAtom);
  useFetchDetailAsset(idCrypto, setAsset);
  useSuscriptionPriceHistory(idCrypto, setAsset);

  const lineSeries = [{
    data: cloneObject(asset.history),
  }];
  const { priceUsd } = asset.data;
  return (
    <Box display="flex" >
      <Box>{formatterNumberWithDecimals(priceUsd, 2)}</Box>
      <Chart
        options={{
          localization: {
            priceFormatter: function(price: string) {
              return `$${formatterNumberWithDecimals(price, 2)}`;
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
