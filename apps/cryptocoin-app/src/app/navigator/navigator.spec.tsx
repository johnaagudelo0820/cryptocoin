import React from 'react';
import { render } from '@testing-library/react';

import Navigator from './navigator';

describe('Navigator', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Navigator />);
    expect(baseElement).toBeTruthy();
  });
});
