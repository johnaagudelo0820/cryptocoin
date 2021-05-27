import moment from 'moment';

export const config = {
  API_BASE_URL: 'https://api.coincap.io/v2/assets',
  BASE_IMAGE: 'https://static.coincap.io/assets/icons/',
}

export const colors = {
  blackPearl: "#20252c",
  charade: "#272c35",
  zircon: "#e0e0e0",
  white: "#fff",
  camine: "#ef6372",
  picton: "#3c6fc8",
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