import React from 'react';
import { render } from '@testing-library/react';

import ChartLine from './chart-line';

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

const data = [
  { time: '2018-12-01', value: 32.51 },
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
  { time: '2018-12-13', value: 30.74 },
];

const options = {
  color: '#f48fb1',
  lineStyle: 0,
  lineWidth: 1,
  crosshairMarkerVisible: true,
  crosshairMarkerRadius: 6,
  crosshairMarkerBorderColor: '#ffffff',
  crosshairMarkerBackgroundColor: '#2296f3',
  lineType: 1,
};
describe('ChartLine', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ChartLine 
        data={data}
        darkTheme
        height={500}
        options={options}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
