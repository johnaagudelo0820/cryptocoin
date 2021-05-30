import React from 'react';
import { render } from '@testing-library/react';

import Header from './header';

describe('Header', () => {
  it('should render successfully', () => {
    const mockOnChange = jest.fn();
    const { baseElement } = render(<Header
      onChange={mockOnChange}
      darkMode
      title="Coincap"
    />);
    expect(baseElement).toBeTruthy();
  });
});
