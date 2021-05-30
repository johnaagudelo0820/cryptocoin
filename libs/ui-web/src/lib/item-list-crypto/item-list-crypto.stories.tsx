import React from 'react';
import { List } from '@material-ui/core';
import { ItemListCrypto } from './item-list-crypto';

import { withKnobs, text } from '@storybook/addon-knobs';

export default {
  component: ItemListCrypto,
  title: 'ItemListCrypto',
  decorators: [withKnobs]
};

const id =  text('Id', 'bitcoin');
const name =  text('Name', 'Bitcoin');
const symbol =  text('Symbol', 'BTC');
const priceUsd =  text('Price', '530000.56');
const changePercent24Hr =  text('PErcent 24Hr', '10.5');

export const primary = () => {
  return (
    <List>
      <ItemListCrypto
        id={id}
        name={name}
        symbol={symbol}
        priceUsd={priceUsd}
        changePercent24Hr={changePercent24Hr}
        handlerOnClick={() => { console.log('handler')}}
      />
    </List>
  )
};
