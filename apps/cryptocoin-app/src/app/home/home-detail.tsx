import React from 'react';
import { View, Text, StyleSheet, Image, SectionList, ActivityIndicator } from 'react-native';
import { useRecoilState, useRecoilValue } from 'recoil';

import { assetdetailAtom } from '@coincap/atoms';
import { useFetchDetailAsset, useSuscriptionPriceHistory } from '@coincap/hooks';
import { formatterNumberWithDecimals } from '@coincap/utils';
import { ChartLine, HeaderDetail } from '@coincap/ui-mobile';
 
import { colors } from '@coincap/utils';

/* eslint-disable-next-line */
export interface HomeDetailProps {
  idCrypto: string,
  name: string,
  symbol: string,
}

export function HomeDetail({ idCrypto, name, symbol }: HomeDetailProps) {
  const [asset, setAsset] = useRecoilState(assetdetailAtom)
  useFetchDetailAsset(idCrypto, setAsset);
  useSuscriptionPriceHistory(idCrypto, setAsset);
  const { priceUsd, changePercent24Hr, marketCapUsd, isUp } = asset.data;

  return (
    <View style={styles.container}>
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
          color="#fff"
          size="large"
        />
      ): (
        <ChartLine
          labels={asset.labels}
          data={asset.prices}
          height={220}
          config={{
            backgroundColor: '#e26a00',
            backgroundGradientFrom: '#fb8c00',
            backgroundGradientTo: '#ffa726',
            decimalPlaces: 1,
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16
            }
          }}
          style={{
            marginVertical: 8,
            borderRadius: 16
          }}
          numberLabels={4}
          numberData={30}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.charade,
    flex: 1,
  },
  row: {
    flexDirection: "row",
  },
  subHeader: {
    backgroundColor: 'rgba(0,0,0,0.1)',
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.white,
    marginLeft: 8,
  },
  iconImg: {
    width: 26,
    height: 26,
  },
  iconIndicator: {
    width: 15,
    height: 15,
    marginRight: 5
  },
  section: {
    maxHeight: 220,
  },
  sectionHeader: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    padding: 8,
  },
  sectionItem: {
    padding: 8,
  },
  itemText: {
    color: '#fff',
    fontSize: 14
  },
  sectionText: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 14,
  },
  list: {
    maxHeight: 100,
  },
  marketTitle: {
    color: colors.white,
    fontSize: 18,
    marginBottom: 8,
    marginLeft: 8,
    fontWeight: 'bold',
  },
  btnFavorite: {
    padding: 8,
    borderRadius: 8,
  },
  btnFavoriteText: {
    color: colors.white,
  },
  btnFavoriteAdd: {
    backgroundColor: colors.picton,
  },
  btnFavoriteRemove: {
    backgroundColor: colors.camine,
  }
})

export default HomeDetail;
