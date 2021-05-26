import moment from 'moment';

export const colors = {
  blackPearl: "#20252c",
  charade: "#272c35",
  zircon: "#e0e0e0",
  white: "#fff",
  camine: "#ef6372",
  picton: "#3c6fc8",
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