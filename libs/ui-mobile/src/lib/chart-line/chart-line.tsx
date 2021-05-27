import React from 'react';
import { Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

/* eslint-disable-next-line */
export interface ChartLineProps {
  height: number,
  config: any,
  style: any,
  labels: Array<string>,
  data: Array<number>
  numberLabels: number,
  numberData: number,
}

export function ChartLine({ data, height, config, style, labels, numberLabels, numberData }: ChartLineProps) {
  const linedata = {
    labels: labels.length > numberLabels ? labels.slice(labels.length - numberLabels, labels.length) : [],
    datasets: [
      {
        data: data.length > numberData ? data.slice(data.length - numberData, data.length) : [],
      },
    ],
  };
  return (
    <LineChart
      data={linedata}
      width={Dimensions.get('window').width}
      height={height}
      yAxisLabel={'$'}
      chartConfig={config}
      bezier
      style={style}
    />
  );
}

export default ChartLine;
