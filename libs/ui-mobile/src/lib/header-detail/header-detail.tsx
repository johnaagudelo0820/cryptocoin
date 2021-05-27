import React from 'react';
import { View, Text, StyleSheet, Image, SectionList } from 'react-native';

import { colors } from '@coincap/utils';
import { formatterNumberWithDecimals } from '@coincap/utils';

/* eslint-disable-next-line */
export interface HeaderDetailProps {
  name: string,
  symbol: string,
  iconIndicator: any,
  sections: Array<any>,
  price: string,
}

export function HeaderDetail({ name, symbol, iconIndicator, sections, price }: HeaderDetailProps) {
  return (
    <View style={styles.header}>
      <View style={styles.subHeader}>
        <View style={styles.row}>
          <Image
            style={styles.iconImg}
            source={{
              uri: `https://static.coincap.io/assets/icons/${symbol.toLowerCase()}@2x.png`
            }}
          />
          <Text style={styles.titleText}>{name}</Text>
        </View>

        <Text style={styles.btnFavoriteText}>
          {iconIndicator}
          {`$${formatterNumberWithDecimals(price || '0', 2)}`}
        </Text>
      </View>

      <SectionList
        style={styles.section}
        sections={sections}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <View style={styles.sectionItem}>
            <Text style={styles.itemText}>{item}</Text>
          </View>
        )}
        renderSectionHeader={({ section }) => (
          <View style={styles.sectionHeader}>
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

export default HeaderDetail;
