import React from 'react';
import { render } from '@testing-library/react';

import ItemListCrypto from './item-list-crypto';

describe('ItemListCrypto', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ItemListCrypto />);
    expect(baseElement).toBeTruthy();
  });
});
