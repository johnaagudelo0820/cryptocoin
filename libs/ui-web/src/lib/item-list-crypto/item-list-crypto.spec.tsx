import React from 'react';
import { render } from '@testing-library/react';

import ItemListCrypto from './item-list-crypto';

describe('ItemListCrypto', () => {
  it('should render successfully', () => {
    const handlerMock = jest.fn();
    const { baseElement } = render(<ItemListCrypto
      id="bitcoin"
      name="Bitcoin"
      symbol="btc"
      priceUsd="530000.56"
      changePercent24Hr="10.5"
      handlerOnClick={handlerMock}
    />);
    expect(baseElement).toBeTruthy();
  });
});
