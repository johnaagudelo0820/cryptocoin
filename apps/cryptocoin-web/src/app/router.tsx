import React from 'react';

import Home from '../view/home/home';
import Detail from '../view/detail/detail';

export const router = [
  {
    id: 1,
    path: '/:idCrypto',
    view: <Detail />
  },
  {
    id: 0,
    path: '/',
    view: <Home />
  }
];