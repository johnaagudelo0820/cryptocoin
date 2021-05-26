import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';

import { colors, formatterNumberWithDecimals } from '@coincap/utils';

/* eslint-disable-next-line */
export interface ItemListCryptoProps {
  id: string,
  onPress: () => void,
  symbol: string,
  name: string,
  priceUsd: string,
  changePercent24Hr: string
}

export function ItemListCrypto({
  onPress, symbol, name, priceUsd, changePercent24Hr
}: ItemListCryptoProps) {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <View style={styles.row}>
        <Image
          style={styles.imageIcon}
          source={{
            uri: `https://static.coincap.io/assets/icons/${symbol.toLowerCase()}@2x.png`,
          }}
        />
        <Text style={styles.nameText}>{name}</Text>
        <Text style={styles.symbolText}>{symbol}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.namePrice}>{`$${formatterNumberWithDecimals(priceUsd, 2)}`}</Text>
        <Text style={styles.percentText}>{`%${formatterNumberWithDecimals(changePercent24Hr, 2)}`}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
    borderBottomColor: colors.zircon,
    borderBottomWidth: 1,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  symbolText: {
    color: colors.white, 
    fontSize: 10,
    marginRight: 16,
  },
  nameText: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 16,
    marginRight: 6,
    marginLeft: 6,
  },
  namePrice: {
    color: colors.white, 
    fontSize: 14,
  },
  percentText: {
    color: colors.white, 
    fontSize: 12,
    marginRight: 8,
  },
  imageIcon: {
    width: 22,
    height: 22,
  }
})

export default ItemListCrypto;
