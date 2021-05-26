import React, { useCallback } from 'react';
import { useHistory } from "react-router-dom";
import { List, Paper } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';

import { useRecoilState } from 'recoil';
import { useFetchAssets } from '@coincap/hooks';
import { ItemListCrypto } from '@coincap/ui-web';
import { assetsAtom } from '@coincap/atoms';
import { useSubscriptionPrice } from '@coincap/hooks';
import { config } from '@coincap/utils';

export function Home() {
  const history = useHistory();
  const [assets, setAssets] = useRecoilState(assetsAtom);
  useSubscriptionPrice({
    assets, setAssets,
  });

  const handlerOnClick = useCallback((id: string) => {
    history.push(`/${id}`);
  }, [history])

  // custom hook inital component
  useFetchAssets(`${config.API_BASE_URL}?limit=20`, setAssets);

  return (
    <Paper>
      {
        assets.loading ? (
          <Skeleton variant="rect" animation="wave" height={100} />
        ) : (
          <List>
            {Object.keys(assets.hashCoins).map(idAsset => {
              const asset = assets.hashCoins[idAsset];
              return (
                <ItemListCrypto
                  id={asset.id}
                  name={asset.name}
                  symbol={asset.symbol}
                  priceUsd={asset.priceUsd}
                  changePercent24Hr={asset.changePercent24Hr}
                  key={asset.id}
                  handlerOnClick={handlerOnClick}
                />
              )
            })}
          </List>
        )
      }
    </Paper>
  );
}

export default Home;
