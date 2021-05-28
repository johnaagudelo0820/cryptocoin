import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { useTheme } from '@react-navigation/native';

import { useRecoilState } from 'recoil';
import { assetsAtom } from '@coincap/atoms'
import { useFetchAssets } from '@coincap/hooks';
import { config } from '@coincap/utils';

import HomeList from './home-list';

export function HomeScreen() {
  const [assets, setAssets] = useRecoilState(assetsAtom);
  const { colors } = useTheme();

  // custom hook inital component
  useFetchAssets(`${config.API_BASE_URL}?limit=20`, setAssets);

  return (
    <View style={styles.container}>
      {assets.loading ? (
        <ActivityIndicator
          color={colors.card}
          size="large"
        />
      ) : (
        <HomeList assets={assets} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default HomeScreen;
