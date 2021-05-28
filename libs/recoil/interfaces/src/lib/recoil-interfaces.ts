export type AssetHistory = {
  value: number,
  time: string,
}

export interface Asset {
  changePercent24Hr: string,
  id: string,
  marketCapUsd: string,
  maxSupply: string,
  name: string,
  priceUsd: string,
  rank: string,
  supply: string,
  symbol: string,
  volumeUsd24Hr: string,
  vwap24Hr: string,
  isUp?: boolean,
}

export interface DynamicAsset {
  [key: string]: Asset,
}

export interface AssetAtom {
  assetParam: string;
  hashCoins: DynamicAsset;
  list: Array<Asset>;
  loading: boolean;
  isUp?: boolean,
};

export type AssetDetailAtom = {
  data: Asset;
  history: Array<AssetHistory>,
  labels: Array<string>,
  prices: Array<number>,
  loading: boolean;
}