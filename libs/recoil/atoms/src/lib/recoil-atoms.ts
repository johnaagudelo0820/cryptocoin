import { atom } from 'recoil';

import { AssetAtom, AssetDetailAtom } from '@coincap/interfaces';

export const darkModeAtom = atom({
  key: 'darkMode',
  default: false as boolean
});

export const assetsAtom = atom({
  key: 'assets',
  default: {
    assetParam: '',
    hashCoins: {},
    loading: true,
  } as AssetAtom,
});

export const assetdetailAtom = atom({
  key: 'asset',
  default: {
    data: {},
    history: [],
    loading: true,
  } as AssetDetailAtom,
});