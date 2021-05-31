import React from 'react';
import { List } from '@material-ui/core';
import { ItemListCrypto } from './item-list-crypto';

import { withKnobs, text } from '@storybook/addon-knobs';

export default {
  component: ItemListCrypto,
  title: 'ItemListCrypto',
  decorators: [withKnobs]
};

export const primary = () => {
  return (
    <List>
      <ItemListCrypto
        id={text('Id', 'bitcoin')}
        name={text('Name', 'Bitcoin')}
        symbol={text('Symbol', 'BTC')}
        priceUsd={text('Price', '530000.56')}
        changePercent24Hr={text('Percent 24Hr', '10.5')}
        handlerOnClick={() => { console.log('handler')}}
      />
    </List>
  )
};
