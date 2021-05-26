import React, { useMemo } from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Route } from "react-router-dom";
import { useRecoilValue } from 'recoil';

import { router } from './router';
import { Template } from './template/template';

import { darkModeAtom } from '../recoil/atoms';

export function App() {
  const darkMode = useRecoilValue(darkModeAtom);

  const theme = useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: darkMode ? 'dark' : 'light',
        },
      }),
    [darkMode],
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Template>
        {router.map((route) => (
          <Route key={route.id} path={route.path} exact>
            {route.view}
          </Route>
        ))}
      </Template>
    </ThemeProvider>
  );
}

export default App;
