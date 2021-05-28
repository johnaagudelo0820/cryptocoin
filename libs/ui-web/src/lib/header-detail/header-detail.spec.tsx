import React from 'react';
import { render } from '@testing-library/react';

import HeaderDetail from './header-detail';

describe('HeaderDetail', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HeaderDetail
      priceUsd="53000.54"
      name="Bitcoin"
      symbol="BTC"
      imageUp={<div>indicator</div>}
    />);
    expect(baseElement).toBeTruthy();
  });
});
