import React from 'react';
import { Header } from './header';

import { withKnobs, boolean, text } from '@storybook/addon-knobs';

export default {
  component: Header,
  title: 'Header',
  decorators: [withKnobs]
};

export const primary = () => {
  return <Header
    onChange={() => console.log('foobar')}
    darkMode={boolean('DrakMode', true)}
    title={text('Title', 'Coincap')}
  />;
};
