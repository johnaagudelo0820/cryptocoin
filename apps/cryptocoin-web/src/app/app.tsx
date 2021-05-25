import React, { useState, useMemo } from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Box, Switch, Typography } from '@material-ui/core';

export function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = React.useMemo(
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
      <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
      <Typography variant="h1">
        {darkMode ? 'Dark Mode' : 'Light Mode'}
      </Typography>
      <Box>APP tenemos material UI</Box>
    </ThemeProvider>
  );
}

export default App;
