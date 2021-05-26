import React from 'react';
import { render } from '@testing-library/react';

import UseWebSocket from './use-websocket';

describe('UseWebsocket', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UseWebSocket />);
    expect(baseElement).toBeTruthy();
  });
});
