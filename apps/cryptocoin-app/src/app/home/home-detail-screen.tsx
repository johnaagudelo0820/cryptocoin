import React from 'react';

import HomeDetail from './home-detail';

/* eslint-disable-next-line */
export interface HomeDetailScreenProps {
  route: any,
  navigation: any,
}

export function HomeDetailScreen({ route, navigation }: HomeDetailScreenProps) {
  const { asset } = route.params;
  navigation.setOptions({ title: asset.symbol });

  return (
    <HomeDetail
      idCrypto={asset.id}
      name={asset.name}
      symbol={asset.symbol}
    />
  );
}



export default HomeDetailScreen;
