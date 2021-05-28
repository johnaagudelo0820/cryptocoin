import React from 'react';
import { render } from '@testing-library/react';
import { themePalette } from '@coincap/utils';

import Navigator from './navigator';

const themeLight = {
  colors: {
    primary: themePalette.primary.main,
    background: themePalette.white,
    card:  themePalette.primary.dark,
    text: themePalette.secondary.dark,
    border: themePalette.primary.light,
    notification: themePalette.primary.main,
  },
};

describe('Navigator', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Navigator theme={themeLight} />);
    expect(baseElement).toBeTruthy();
  });
});
