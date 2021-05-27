import React, { useMemo } from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Route } from "react-router-dom";
import { useRecoilValue } from 'recoil';

import { router } from './router';
import { Template } from './template/template';

import { darkModeAtom } from '@coincap/atoms';
import { themePalette } from '@coincap/utils'; 

export function App() {
  const darkMode = useRecoilValue(darkModeAtom);

  const theme = useMemo(
    () =>
      createMuiTheme({
        palette: {
          ...themePalette,
          type: darkMode ? 'dark' : 'light',
          primary: {
            ...themePalette.primary,
            main: darkMode ? themePalette.secondary.main : themePalette.primary.main,
            contrastText: themePalette.white,
          },
          secondary: {
            ...themePalette.secondary,
            main: themePalette.primary.main,
          },
          contrastThreshold: 3,
          tonalOffset: 0.2,
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