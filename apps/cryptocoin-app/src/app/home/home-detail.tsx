import React from 'react';
import { SafeAreaView, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { useRecoilState } from 'recoil';
import { useTheme } from '@react-navigation/native';

import { assetdetailAtom } from '@coincap/atoms';
import { useFetchDetailAsset, useSuscriptionPriceHistory } from '@coincap/hooks';
import { formatterNumberWithDecimals } from '@coincap/utils';
import { ChartLine, HeaderDetail } from '@coincap/ui-mobile';

/* eslint-disable-next-line */
export interface HomeDetailProps {
  idCrypto: string,
  name: string,
  symbol: string,
}

export function HomeDetail({ idCrypto, name, symbol }: HomeDetailProps) {
  const { colors } = useTheme();
  const [asset, setAsset] = useRecoilState(assetdetailAtom)
  useFetchDetailAsset(idCrypto, setAsset);
  useSuscriptionPriceHistory(idCrypto, setAsset);
  const { priceUsd, changePercent24Hr, marketCapUsd, isUp } = asset.data;

  return (
    <SafeAreaView style={styles.container}>
      <HeaderDetail
        name={name}
        symbol={symbol}
        iconIndicator={isUp ? (
          <Image
            style={styles.iconIndicator}
            source={require('../assets/arrow_up.png')}
          />
        ): (
          <Image
            style={styles.iconIndicator}
            source={require('../assets/arrow_down.png')}
          />
        )}
        sections={[
          {
            title: 'Change 24h',
            data: [`${formatterNumberWithDecimals(changePercent24Hr, 2)}%`]
          },
          {
            title: 'Market Cap',
            data: [`${formatterNumberWithDecimals(marketCapUsd, 2)}`]
          }
        ]}
        price={priceUsd}
      />

      {asset.loading ? (
        <ActivityIndicator
          color={colors.card}
          size="large"
        />
      ): (
        <ChartLine
          labels={asset.labels}
          data={asset.prices}
          height={300}
          config={{
            backgroundColor: colors.background,
            backgroundGradientFrom: colors.background,
            backgroundGradientTo: colors.background,
            decimalPlaces: 0,
            color: () => colors.text,
            labelColor: () => colors.text,
            propsForDots: {
              r: "0",
              strokeWidth: "0",
            }
          }}
          style={{
            marginVertical: 8,
          }}
          numberLabels={4}
          numberData={30}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  iconIndicator: {
    width: 17,
    height: 17,
    marginRight: 5
  },
})

export default HomeDetail;
