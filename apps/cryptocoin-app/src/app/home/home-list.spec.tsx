import React from 'react';
import { render } from '@testing-library/react';

import HomeList from './home-list';

describe('HomeList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HomeList />);
    expect(baseElement).toBeTruthy();
  });
});
