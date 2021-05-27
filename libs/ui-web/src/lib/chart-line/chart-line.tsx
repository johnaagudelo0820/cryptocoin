import React from 'react';
import Chart from 'kaktana-react-lightweight-charts';

import { AssetHistory } from '@coincap/interfaces';

/* eslint-disable-next-line */
export interface ChartLineProps {
  darkTheme: boolean,
  height: number,
  data: Array<AssetHistory>,
  options: any,
}

export function ChartLine({ data, darkTheme, height, options }: ChartLineProps) {
  return (
    <Chart
      options={options}
      lineSeries={[{
        data,
      }]}
      autoWidth
      height={height}
      darkTheme={darkTheme}
    />
  );
}

export default ChartLine;
