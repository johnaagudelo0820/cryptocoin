import React from 'react';
import { useHistory } from "react-router-dom";
import { List, Paper } from '@material-ui/core';

import { useRecoilState } from 'recoil';
import { useWebSocket, useFetchAssets } from '@coincap/hooks';
import { ItemListCrypto } from '@coincap/ui-web';
import { assetsAtom } from '@coincap/atoms'

export function Home() {
  const history = useHistory();
  const [assets, setAssets] = useRecoilState(assetsAtom);

  const updateAssetCrypto = (e: any) => {
    const updateCurrent = JSON.parse(e.data);
    setAssets((oldAssets) => {
      const assetsCoin = Object.assign({}, oldAssets.hashCoins);
      Object.keys(updateCurrent).forEach(current => {
        const crypto = Object.assign({}, { ...assetsCoin[current], priceUsd: updateCurrent[current] });
        assetsCoin[current] = crypto;
      })
      return {
        ...oldAssets,
        hashCoins: assetsCoin,
      }
    });
  };
  useWebSocket(assets.assetParam, updateAssetCrypto);

  const handlerOnClick = (id: string) => {
    history.push(`/${id}`);
  }

  // custom hook inital component
  useFetchAssets('https://api.coincap.io/v2/assets?limit=20', setAssets);

  return (
    <Paper>
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
    </Paper>
  );
}

export default Home;
