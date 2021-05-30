import React from 'react';
import { Box, Grid, Avatar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { formatterNumberWithDecimals, config } from '@coincap/utils';

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(8),
    height: theme.spacing(8),
  },
}));

/* eslint-disable-next-line */
export interface HeaderDetailProps {
  priceUsd: string,
  name: string,
  symbol: string
  imageUp: any,
}

export function HeaderDetail({ priceUsd, name, symbol = '', imageUp }: HeaderDetailProps) {
  const classes = useStyles();
  return (
    <Grid container spacing={2}>
      <Grid item xs={1}>
        <Box>
          <Avatar
            className={classes.large}
            alt={name}
            src={`${config.BASE_IMAGE}${symbol.toLowerCase()}@2x.png`}
          />
        </Box>
      </Grid>
      <Grid item xs={7}>
        <Typography variant="h4">{name}</Typography>
        <Typography>{symbol}</Typography>
      </Grid>
      <Grid item xs={4}>
        <Box display="flex" alignItems="center">
          <Box marginRight={2}>
            {imageUp}
          </Box>
          <Typography variant="h3">{`$${formatterNumberWithDecimals(priceUsd || '0', 2)}`}</Typography>
        </Box>
      </Grid>
    </Grid>
  );
}

export default HeaderDetail;
