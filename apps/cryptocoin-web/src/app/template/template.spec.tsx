import React from 'react';
import { render } from '@testing-library/react';

import { RecoilRoot } from 'recoil';

import Template from './template';

describe('Template', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <RecoilRoot>
        <Template>children</Template>
      </RecoilRoot>
    );
    expect(baseElement).toBeTruthy();
  });
});
