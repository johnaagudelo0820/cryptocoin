import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, Image, TouchableWithoutFeedback, Animated } from 'react-native';

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
  const [animation] = useState(new Animated.Value(0));
  const [price, setPrice] = useState(priceUsd);
  const [upPrice, setUpPrice] = useState(colors.charade);

  const handleAnimation = useCallback(() => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: false
    } as any).start(() => {
      Animated.timing(animation, {
        toValue:0,
        duration: 1000,
        useNativeDriver: false
      } as any).start()
    })
  }, [animation])

  const boxInterpolation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [colors.charade , upPrice]
  })

  const animatedStyle = {
    backgroundColor: boxInterpolation
  }

  useEffect(() => {
    setPrice((oldPrice) => {
      if(priceUsd > oldPrice) {
        setUpPrice("rgba(45, 165, 99, 0.5)");
        handleAnimation();
      }
      if (priceUsd < oldPrice) {
        setUpPrice("rgba(224,82,99, 0.5)");
        handleAnimation();
      }
      return priceUsd;
    });
  }, [priceUsd, handleAnimation]);

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Animated.View style={{ ...styles.container, ...animatedStyle }}>
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
          <Text style={styles.namePrice}>{`$${formatterNumberWithDecimals(price, 2)}`}</Text>
          <Text style={styles.percentText}>{`%${formatterNumberWithDecimals(changePercent24Hr, 2)}`}</Text>
        </View>
      </Animated.View>
    </TouchableWithoutFeedback>
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
    marginLeft: 8,
  },
  imageIcon: {
    width: 22,
    height: 22,
  }
})

export default ItemListCrypto;
