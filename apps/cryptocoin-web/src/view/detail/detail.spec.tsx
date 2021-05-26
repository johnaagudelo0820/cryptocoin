import React from 'react';
import { render } from '@testing-library/react';

import Detail from './detail';

describe('Detail', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Detail />);
    expect(baseElement).toBeTruthy();
  });
});
