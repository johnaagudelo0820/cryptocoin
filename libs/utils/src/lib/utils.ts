import moment from 'moment';
import { AssetAtom } from '@coincap/interfaces'; 

export const config = {
  API_BASE_URL: 'https://api.coincap.io/v2/assets',
  WS_BASE_URL: 'wss://ws.coincap.io/prices?assets=',
  BASE_IMAGE: 'https://static.coincap.io/assets/icons/',
}

export const themePalette = {
  primary: {
    main: '#2979ff',
    light: '#5393ff',
    dark: '#1c54b2',
    contrastText: '#000',
  },
  secondary: {
    main: '#272c35',
    light: '#52565d',
    dark: '#1b1e25',
    contrastText: '#fff',
  },
  down: '#ef6372',
  up: '#487e4c',
  white: '#fff',
  black: '#000',
}

export const formatterNumberWithDecimals = (value: string, decimals: number): string => {
  return Number(value).toFixed(decimals);
}

export const formatterDate = (date: string): string => {
  return moment(date).format('YYYY-MM-DD');
}

export const getCurrentDate = (): string => {
  return moment().format('YYYY-MM-DD');
}

export const cloneObject = (source: any) => {
  return JSON.parse(JSON.stringify(source));
}


export const MockAssets: AssetAtom = {
  assetParam: 'bitcoin',
  hashCoins: {
    'bitcoin': {
      "id": "bitcoin",
      "rank": "1",
      "symbol": "BTC",
      "name": "Bitcoin",
      "supply": "17193925.0000000000000000",
      "maxSupply": "21000000.0000000000000000",
      "marketCapUsd": "119150835874.4699281625807300",
      "volumeUsd24Hr": "2927959461.1750323310959460",
      "priceUsd": "6929.8217756835584756",
      "changePercent24Hr": "-0.8101417214350335",
      "vwap24Hr": "7175.0663247679233209"
    }
  },
  list: [
    {
      "id": "bitcoin",
      "rank": "1",
      "symbol": "BTC",
      "name": "Bitcoin",
      "supply": "17193925.0000000000000000",
      "maxSupply": "21000000.0000000000000000",
      "marketCapUsd": "119150835874.4699281625807300",
      "volumeUsd24Hr": "2927959461.1750323310959460",
      "priceUsd": "6929.8217756835584756",
      "changePercent24Hr": "-0.8101417214350335",
      "vwap24Hr": "7175.0663247679233209"
    }
  ],
  loading: false,
}