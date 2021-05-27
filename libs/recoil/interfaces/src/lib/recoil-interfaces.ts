export type AssetHistory = {
  value: number,
  time: string,
}

export interface Asset {
  changePercent24Hr: string,
  explorer: string,
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
}

export interface AssetAtom {
  assetParam: string;
  hashCoins: any;
  list: Array<Asset>;
  loading: boolean;
  isUp: boolean,
};

export type AssetDetailAtom = {
  data: any;
  history: Array<AssetHistory>
  loading: boolean;
} 