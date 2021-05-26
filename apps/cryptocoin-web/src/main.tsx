import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Switch } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import App from './app/app';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <RecoilRoot>
          <App />
        </RecoilRoot>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
