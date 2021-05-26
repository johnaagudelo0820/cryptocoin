import React from 'react';
import { View, FlatList, StyleSheet, ActivityIndicator, Text } from 'react-native';
import { useNavigation } from '@react-navigation/core';

import { useRecoilState } from 'recoil';
import { assetsAtom } from '@coincap/atoms'
import { useFetchAssets } from '@coincap/hooks';
import { ItemListCrypto } from '@coincap/ui-mobile';
import { colors } from '@coincap/utils' 

export function HomeScreen() {
  const navigation = useNavigation();
  const [assets, setAssets] = useRecoilState(assetsAtom);

  // custom hook inital component
  useFetchAssets('https://api.coincap.io/v2/assets?limit=20', setAssets);

  const handlerPress = (idCryto: string) => {
    navigation.navigate('CoinDetail', {
      idCryto
    });
  }

  return (
    <View style={styles.container}>
      {assets.loading ? (
        <ActivityIndicator
          color="#fff"
          size="large"
          styles={styles.loader}
        />
      ) : (
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
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.charade,
    justifyContent: 'center',
  },
  titleText: {
    color: 'white',
    textAlign: 'center',
  },
  btn: {
    padding: 8,
    backgroundColor: 'blue',
    borderRadius: 8,
    margin: 16,
  },
  btnText: {
    color: 'white',
    textAlign: 'center'
  },
  loader: {
    marginTop: 60,
  }
});

export default HomeScreen;
