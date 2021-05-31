import React from 'react';
import { View, Text, StyleSheet, Image, SectionList } from 'react-native';
import { useTheme } from '@react-navigation/native';

import { themePalette } from '@coincap/utils';
import { formatterNumberWithDecimals, config } from '@coincap/utils';

/* eslint-disable-next-line */
export interface HeaderDetailProps {
  name: string,
  symbol: string,
  iconIndicator: any,
  sections: Array<any>,
  price: string,
}

export function HeaderDetail({ name, symbol, iconIndicator, sections, price }: HeaderDetailProps) {
  const { colors } = useTheme();
  return (
    <View style={styles.header}>
      <View style={{ ...styles.subHeader, backgroundColor: colors.background }}>
        <View style={styles.row}>
          <Image
            style={styles.iconImg}
            source={{
              uri: `${config.BASE_IMAGE}${symbol.toLowerCase()}@2x.png`
            }}
          />
          <Text style={{ ...styles.titleText, color: colors.text }}>{name}</Text>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center' }} >
          <View style={{ marginRight: 10 }}>
            {iconIndicator}
          </View>
          <Text style={{ color: colors.text, fontSize: 18, fontWeight: 'bold' }}>
            {`$${formatterNumberWithDecimals(price || '0', 2)}`}
          </Text>
        </View>
      </View>

      <SectionList
        style={styles.section}
        sections={sections}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <View style={styles.sectionItem}>
            <Text style={{ ...styles.itemText, color: colors.text }}>{item}</Text>
          </View>
        )}
        renderSectionHeader={({ section }) => (
          <View style={{ ...styles.sectionHeader, backgroundColor: colors.card }}>
            <Text style={styles.sectionText}>{section.title}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginBottom: 30,
  },
  row: {
    flexDirection: "row",
  },
  subHeader: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  iconImg: {
    width: 26,
    height: 26,
  },
  section: {
    maxHeight: 220,
  },
  sectionHeader: {
    padding: 8,
  },
  sectionItem: {
    padding: 8,
  },
  itemText: {
    fontSize: 14
  },
  sectionText: {
    color: themePalette.white,
    fontWeight: 'bold',
    fontSize: 14,
  },
})

export default HeaderDetail;
