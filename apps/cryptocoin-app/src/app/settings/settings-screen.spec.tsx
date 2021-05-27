import React from 'react';
import { render } from '@testing-library/react';

import SettingsScreen from './settings-screen';

describe('SettingsScreen', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SettingsScreen />);
    expect(baseElement).toBeTruthy();
  });
});
