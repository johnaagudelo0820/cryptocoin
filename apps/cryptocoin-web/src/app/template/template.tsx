import React from 'react';
import { useRecoilState } from 'recoil';
import { Container, Grid, Box } from '@material-ui/core'

import { darkModeAtom } from '@coincap/atoms';
import { Header } from '@coincap/ui-web';

/* eslint-disable-next-line */
export interface TemplateProps {
  children: React.ReactNode,
}

export function Template(props: TemplateProps) {
  const [darkMode, setDarkMode] = useRecoilState(darkModeAtom);
  return (
    <>
      <Header
        darkMode={darkMode}
        onChange={() => setDarkMode(!darkMode)}
      />
      <Box marginTop={4}>
        <Container>
          <Grid container>
            <Grid item xs={12}>
              {props.children}
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default Template;
