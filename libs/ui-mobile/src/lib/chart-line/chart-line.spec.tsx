import React from 'react';
import { render } from '@testing-library/react';

import ChartLine from './chart-line';

describe('ChartLine', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ChartLine />);
    expect(baseElement).toBeTruthy();
  });
});
