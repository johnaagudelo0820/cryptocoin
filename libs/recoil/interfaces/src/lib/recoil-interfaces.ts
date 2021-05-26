export type AssetHistory = {
  value: number,
  time: string,
}

export interface AssetAtom {
  assetParam: string;
  hashCoins: any;
  loading: boolean;
};

export type AssetDetailAtom = {
  data: any;
  history: Array<AssetHistory>
  loading: boolean;
} 