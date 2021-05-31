import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'

import { RecoilRoot } from 'recoil';

import Template from './template';

describe('Template', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <RecoilRoot>
        <MemoryRouter>
          <Template>children</Template>
        </MemoryRouter>
      </RecoilRoot>
    );
    expect(baseElement).toBeTruthy();
  });
});
