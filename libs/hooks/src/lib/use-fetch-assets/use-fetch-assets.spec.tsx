import React from 'react';
import { render } from '@testing-library/react';

import UseFetchAssets from './use-fetch-assets';

describe('UseFetchAssets', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UseFetchAssets />);
    expect(baseElement).toBeTruthy();
  });
});
