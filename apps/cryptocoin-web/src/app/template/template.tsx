import React from 'react';
import { useRecoilState } from 'recoil';
import { Container, Grid, Switch } from '@material-ui/core'

import { darkModeAtom } from '../../recoil/atoms';

/* eslint-disable-next-line */
export interface TemplateProps {
  children: React.ReactNode,
}

export function Template(props: TemplateProps) {
  const [darkMode, setDarkMode] = useRecoilState(darkModeAtom);
  return (
    <Container>
      <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
      <Grid
        container
      >
        <Grid item xs={12}>
          <h1>header</h1>
          {props.children}
        </Grid>
      </Grid>
    </Container>
  );
}

export default Template;
