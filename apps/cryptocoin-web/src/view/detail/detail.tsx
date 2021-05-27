import React from 'react';
import { useParams } from "react-router-dom";
import { useRecoilState, useRecoilValue } from 'recoil';
import { Grid, Paper, Divider } from '@material-ui/core';

import { assetdetailAtom, darkModeAtom } from '@coincap/atoms';
import { useFetchDetailAsset, useSuscriptionPriceHistory } from '@coincap/hooks';
import { formatterNumberWithDecimals, cloneObject } from '@coincap/utils';
import { ChartLine, HeaderDetail } from '@coincap/ui-web';

export interface paramRoute {
  idCrypto: string,
}

export function Detail() {
  const { idCrypto }: paramRoute = useParams();
  const [asset, setAsset] = useRecoilState(assetdetailAtom);
  const darkMode = useRecoilValue(darkModeAtom);
  useFetchDetailAsset(idCrypto, setAsset);
  useSuscriptionPriceHistory(idCrypto, setAsset);
  const getImageArrow = (upCurrency: boolean) => {
    if (upCurrency) {
      return '../../assets/arrow_up.png';
    }
    return '../../assets/arrow_down.png';
  }

  const { priceUsd, name, symbol, isUp } = asset.data;
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <HeaderDetail
          name={name}
          priceUsd={priceUsd}
          symbol={symbol}
          imageUp={<img alt="indicator" src={getImageArrow(isUp)} width={40} height={40} />}
        />
      </Grid>
      <Grid item xs={12}>
        <Divider />
      </Grid>
      <Grid item xs={12}>
        <Paper>
          <ChartLine
            options={{
              localization: {
                priceFormatter: function(price: string) {
                  return `$${formatterNumberWithDecimals(price, 2)}`;
                }
              }
            }}
            data={cloneObject(asset.history)}
            height={400}
            darkTheme={darkMode}
          />
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Detail;
