import React from 'react';
import { render } from '@testing-library/react';

import UseSubscriptionPrice from './use-subscription-price';

describe('UseSubscriptionPrice', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UseSubscriptionPrice />);
    expect(baseElement).toBeTruthy();
  });
});
