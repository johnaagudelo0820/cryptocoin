import React from 'react';
import { render } from '@testing-library/react';

import Template from './template';

describe('Template', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Template />);
    expect(baseElement).toBeTruthy();
  });
});
