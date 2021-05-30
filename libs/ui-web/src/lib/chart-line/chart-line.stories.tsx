import React from 'react';
import { ChartLine } from './chart-line';
import { withKnobs, boolean, object, number } from '@storybook/addon-knobs';

export default {
  component: ChartLine,
  title: 'ChartLine',
  decorators: [withKnobs],
};

const data = [
  { time: "2018-12-01", value: 32.51 },
  { time: '2018-12-02', value: 31.11 },
  { time: '2018-12-03', value: 27.02 },
  { time: '2018-12-04', value: 27.32 },
  { time: '2018-12-05', value: 25.17 },
  { time: '2018-12-06', value: 28.89 },
  { time: '2018-12-07', value: 25.46 },
  { time: '2018-12-08', value: 23.92 },
  { time: '2018-12-09', value: 22.68 },
  { time: '2018-12-10', value: 22.67 },
  { time: '2018-12-11', value: 27.57 },
  { time: '2018-12-12', value: 24.11 },
  { time: '2018-12-13', value: 30.74 }
];

const options = {
  color: 'red',
  lineStyle: 0,
  lineWidth: 1,
  crosshairMarkerVisible: true,
  crosshairMarkerRadius: 59,
  crosshairMarkerBorderColor: 'red',
  crosshairMarkerBackgroundColor: 'red',
  lineType: 1,
};

// Knobs for React props
export const primary = () => {
  return <ChartLine
    data={object('Data', data)}
    darkTheme={boolean('DarkTheme', false)}
    height={number('Height', 500)}
    options={options}
  />;
};

