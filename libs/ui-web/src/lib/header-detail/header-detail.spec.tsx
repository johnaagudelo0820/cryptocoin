import React from 'react';
import { render } from '@testing-library/react';

import HeaderDetail from './header-detail';

describe('HeaderDetail', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HeaderDetail />);
    expect(baseElement).toBeTruthy();
  });
});
