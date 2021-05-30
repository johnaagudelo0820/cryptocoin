import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

/* eslint-disable-next-line */
export interface HeaderProps {
  onChange: () => void,
  darkMode: boolean,
  title: string
}

export function Header({ onChange, darkMode, title }: HeaderProps) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
        <Typography variant="h6" className={classes.title}>
            <Link to="/" style={{ color: 'white', textDecoration: 'none'}}>
              {title}
            </Link>
          </Typography>
          <Switch checked={darkMode} onChange={onChange} />
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
