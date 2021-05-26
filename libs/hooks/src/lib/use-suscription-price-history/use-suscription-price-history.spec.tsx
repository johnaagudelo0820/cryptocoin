import React from 'react';
import { render } from '@testing-library/react';

import UseSuscriptionPriceHistory from './use-suscription-price-history';

describe('UseSuscriptionPriceHistory', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UseSuscriptionPriceHistory />);
    expect(baseElement).toBeTruthy();
  });
});
