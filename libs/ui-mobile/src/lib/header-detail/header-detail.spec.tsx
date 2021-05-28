import React from 'react';
import { render } from '@testing-library/react';

import HeaderDetail from './header-detail';

describe('HeaderDetail', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HeaderDetail
      name="bitcoin"
      symbol="BTC"
      iconIndicator={<div>icon</div>}
      sections={[{ name: 'name', title: 'title' }]}
      price="10.45"
    />);
    expect(baseElement).toBeTruthy();
  });
});
