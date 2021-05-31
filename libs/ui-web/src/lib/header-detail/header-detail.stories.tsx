import React from 'react';
import { Container } from '@material-ui/core';
import { HeaderDetail } from './header-detail';

import { withKnobs, select, text } from '@storybook/addon-knobs';

export default {
  component: HeaderDetail,
  title: 'HeaderDetail',
  decorators: [withKnobs],
};

const ctaOptions = {
  Up: <div>{'🟢'}</div>,
  Down: <div>{'🔴'}</div>,
  None: null,
}

text('Symbol', 'BTC');
export const primary = () => {
  return (
    <Container>
      <HeaderDetail
        priceUsd={text('Price', '53000.54')}
        name={text('Name', 'Bitcoin')}
        symbol="BTC"
        imageUp={ctaOptions[select('Indicator', ['Up', 'Down', 'None'], 'Up')]}
      />
    </Container>);
};
