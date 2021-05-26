import React from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/core';

import { useSetRecoilState } from 'recoil';
import { ItemListCrypto } from '@coincap/ui-mobile';
import { AssetAtom } from '@coincap/interfaces';
import { useSubscriptionPrice } from '@coincap/hooks';
import { assetsAtom } from '@coincap/atoms'

/* eslint-disable-next-line */
export interface HomeListProps {
  assets: AssetAtom
}

export function HomeList({ assets }: HomeListProps) {
  const navigation = useNavigation();
  const setAssets = useSetRecoilState(assetsAtom);
  useSubscriptionPrice({
    assets, setAssets,
  });

  const handlerPress = (idCryto: string) => {
    navigation.navigate('CoinDetail', {
      idCryto
    });
  }

  return (
    <FlatList
      data={assets.list}
      renderItem={({ item }) => (
        <ItemListCrypto
          id={item.id}
          name={item.name}
          symbol={item.symbol}
          priceUsd={item.priceUsd}
          changePercent24Hr={item.changePercent24Hr}
          key={item.id}
          onPress={handlerPress}
        />
      )}
    />
  );
}

export default HomeList;