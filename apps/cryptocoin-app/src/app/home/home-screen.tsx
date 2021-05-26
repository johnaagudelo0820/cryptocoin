import React from 'react';
import { View, FlatList, StyleSheet, ActivityIndicator, Text } from 'react-native';

import { useRecoilState } from 'recoil';
import { assetsAtom } from '@coincap/atoms'
import { useFetchAssets } from '@coincap/hooks';

import Color from '../res/colors';

export function HomeScreen() {
  const [assets, setAssets] = useRecoilState(assetsAtom);

  console.log(assets);

  // custom hook inital component
  useFetchAssets('https://api.coincap.io/v2/assets?limit=20', setAssets);

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
            <Text>{item.name}</Text>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.charade,
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
