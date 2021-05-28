import React from 'react';
import { render } from '@testing-library/react';

import ChartLine from './chart-line';

describe.skip('ChartLine', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ChartLine
      data={[50,30]}
      height={200}
      config={{}}
      style={{}}
      labels={['2021-05-27','2021-05-28']}
      numberLabels={1}
      numberData={1}
    />);
    expect(baseElement).toBeTruthy();
  });
});
