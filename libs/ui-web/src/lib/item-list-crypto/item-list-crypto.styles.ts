import { makeStyles } from '@material-ui/core/styles';

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

export default useStyles;