import React from 'react';
import { render } from '@testing-library/react';

import UseFetchDetailAsset from './use-fetch-detail-asset';

describe('UseFetchDetailAsset', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UseFetchDetailAsset />);
    expect(baseElement).toBeTruthy();
  });
});
