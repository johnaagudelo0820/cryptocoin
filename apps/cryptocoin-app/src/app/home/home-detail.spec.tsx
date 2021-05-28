import React from 'react';
import { render } from '@testing-library/react';

import HomeDetail from './home-detail';

describe('HomeDetail', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HomeDetail idCrypto="bitcoin" symbol="BTC" name="Bitcoin" />);
    expect(baseElement).toBeTruthy();
  });
});
