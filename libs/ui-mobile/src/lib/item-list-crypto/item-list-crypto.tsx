import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, Image, TouchableWithoutFeedback, Animated } from 'react-native';
import { useTheme } from '@react-navigation/native';

import { themePalette, formatterNumberWithDecimals, config } from '@coincap/utils';

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
  const { colors } = useTheme();
  const [animation] = useState(new Animated.Value(0));
  const [price, setPrice] = useState(priceUsd);
  const [upPrice, setUpPrice] = useState(colors.background);

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
    outputRange: [colors.background , upPrice]
  })

  const animatedStyle = {
    backgroundColor: boxInterpolation
  }

  useEffect(() => {
    setPrice((oldPrice) => {
      if(priceUsd > oldPrice) {
        setUpPrice(themePalette.up);
        handleAnimation();
      }
      if (priceUsd < oldPrice) {
        setUpPrice(themePalette.down);
        handleAnimation();
      }
      return priceUsd;
    });
  }, [priceUsd, handleAnimation]);

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Animated.View style={{
        ...styles.container,
        ...animatedStyle,
        borderBottomColor: colors.primary,
      }}>
        <View style={styles.row}>
          <Image
            style={styles.imageIcon}
            source={{
              uri: `${config.BASE_IMAGE}${symbol.toLowerCase()}@2x.png`,
            }}
          />
          <Text style={{ ...styles.nameText, color: colors.text }}>{name}</Text>
          <Text style={{ ...styles.symbolText, color: colors.text }}>{symbol}</Text>
        </View>

        <View style={styles.row}>
          <Text style={{ ...styles.namePrice, color: colors.text }}>{`$${formatterNumberWithDecimals(price, 2)}`}</Text>
          <Text style={{ ...styles.percentText, color: colors.text }}>{`${formatterNumberWithDecimals(changePercent24Hr, 2)}%`}</Text>
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
    borderBottomWidth: 1,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  symbolText: {
    fontSize: 10,
    marginRight: 16,
  },
  nameText: {
    fontWeight: "bold",
    fontSize: 16,
    marginRight: 6,
    marginLeft: 6,
  },
  namePrice: {
    fontSize: 14,
  },
  percentText: {
    fontSize: 12,
    marginLeft: 8,
  },
  imageIcon: {
    width: 22,
    height: 22,
  }
})

export default ItemListCrypto;
