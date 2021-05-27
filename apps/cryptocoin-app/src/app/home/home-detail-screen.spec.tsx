import React from 'react';
import { render } from '@testing-library/react';

import HomeDetailScreen from './home-detail-screen';

describe('HomeDetailScreen', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HomeDetailScreen />);
    expect(baseElement).toBeTruthy();
  });
});
