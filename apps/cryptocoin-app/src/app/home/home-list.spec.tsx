import React from 'react';
import { render } from '@testing-library/react';
import HomeList from './home-list';

import { MockAssets } from '@coincap/utils'; 

describe('HomeList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HomeList assets={MockAssets}/>);
    expect(baseElement).toBeTruthy();
  });
});
