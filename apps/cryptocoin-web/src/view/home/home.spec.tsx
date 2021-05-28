import React from 'react';
import { render } from '@testing-library/react';
import { RecoilRoot } from 'recoil';

import Home from './home';

describe('Home', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <RecoilRoot>
        <Home />
      </RecoilRoot>
    );
    expect(baseElement).toBeTruthy();
  });
});
