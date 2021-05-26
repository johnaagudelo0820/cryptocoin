import React, { useState, useEffect } from 'react';

import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';

import { formatterNumberWithDecimals } from '@coincap/utils';

import useStyles from './item-list-crypto.styles';

/* eslint-disable-next-line */
export interface ItemListCryptoProps {
  changePercent24Hr: string,
  id: string,
  name: string,
  priceUsd: string,
  symbol: string,
  handlerOnClick: (id: string) => void, 
}

export function ItemListCrypto({ id, name, symbol, priceUsd, changePercent24Hr, handlerOnClick }: ItemListCryptoProps) {
  const [price, setPrice] = useState(priceUsd);
  const [changePrice, setChange] = useState('');
  const classes = useStyles();

  useEffect(() => {
    setPrice((oldPrice) => {
      if(priceUsd > oldPrice) {
        setChange('up');
      }
      if (priceUsd < oldPrice) {
        setChange('down');
      }
      return priceUsd;
    });
  }, [priceUsd]);

  return (
    <ListItem
      className={clsx({
        [classes.animationUpPrice]: changePrice === 'up',
        [classes.animatioDownPrice]: changePrice === 'down',
      })}
      onClick={() => handlerOnClick(id)}
      button
    >
      <ListItemAvatar>
        <Avatar
          alt={name}
          src={`https://static.coincap.io/assets/icons/${symbol.toLowerCase()}@2x.png`}
        />
      </ListItemAvatar>
      <ListItemText primary={name} secondary={symbol} />
      <ListItemSecondaryAction className={classes.secundaryText}>
        <Box className={classes.contentPrice}>
          <Box className={classes.price}>
            <Typography variant="overline" align="right" gutterBottom>
              Price
            </Typography>
            <Typography variant="subtitle2" align="right">
              {`$${formatterNumberWithDecimals(price, 2)}`}
            </Typography>
          </Box>
          <Box className={classes.price}>
            <Typography variant="overline" align="right">
              (24H)
            </Typography>
            <Typography variant="subtitle2" align="right">
              {`%${formatterNumberWithDecimals(changePercent24Hr, 2)}`}
            </Typography>
          </Box>  
        </Box>
      </ListItemSecondaryAction>
    </ListItem>
  );
}

export default ItemListCrypto;
