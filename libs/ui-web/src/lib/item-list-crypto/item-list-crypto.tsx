import React, { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';

/* eslint-disable-next-line */
export interface ItemListCryptoProps {
  changePercent24Hr: string,
  id: string,
  name: string,
  priceUsd: string,
  symbol: string,
  handlerOnClick: (id: string) => void, 
}

const useStyles = makeStyles((theme) => ({
  contentPrice: {
    display: 'flex',
    width: '100%',
    flex: 1,
    justifyContent: 'space-between',
  },
  secundaryText: {
    width: '30%',
  },
  price: {
    marginRight: theme.spacing(1),
  },
  animatioDownPrice: {
    background: 'transparent',
    animation: `$downPrice 1s ${theme.transitions.easing.easeInOut}`,
  },
  animationUpPrice: {
    background: 'transparent',
    animation: `$upPrice 1s ${theme.transitions.easing.easeInOut}`,
  },
  "@keyframes downPrice": {
    "0%": {
      background: 'transparent',
    },
    "80%": {
      background: 'red',
    },
    "100%": {
      background: 'transparent',
    }
  },
  "@keyframes upPrice": {
    "0%": {
      background: 'transparent',
    },
    "80%": {
      background: 'green',
    },
    "100%": {
      background: 'transparent',
    }
  },
}));

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
              {price}
            </Typography>
          </Box>
          <Box className={classes.price}>
            <Typography variant="overline" align="right">
              (24H)
            </Typography>
            <Typography variant="subtitle2" align="right">
              {changePercent24Hr}
            </Typography>
          </Box>  
        </Box>
      </ListItemSecondaryAction>
    </ListItem>
  );
}

export default ItemListCrypto;
