import { atom } from 'recoil';

import { AssetAtom, AssetDetailAtom } from '@coincap/interfaces';

export const darkModeAtom = atom({
  key: 'darkMode',
  default: true as boolean
});

export const assetsAtom = atom({
  key: 'assets',
  default: {
    assetParam: '',
    hashCoins: {},
    list: [],
    loading: true,
  } as AssetAtom,
});

export const assetdetailAtom = atom({
  key: 'asset',
  default: {
    data: {
      changePercent24Hr: '0',
      explorer: '',
      id: '',
      marketCapUsd: '0',
      maxSupply: '',
      name: '',
      priceUsd: '0',
      rank: '',
      supply: '',
      symbol: '',
      volumeUsd24Hr: '',
      vwap24Hr: '',
      isUp: false,
    },
    history: [],
    labels: [],
    prices: [],
    loading: true,
  } as AssetDetailAtom,
});