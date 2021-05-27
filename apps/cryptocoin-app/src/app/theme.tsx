import React from 'react';
import { DefaultTheme } from '@react-navigation/native';

import { useRecoilValue } from 'recoil';
import { darkModeAtom } from '@coincap/atoms';

import { themePalette } from '@coincap/utils' ;

const themeLight = {
  ...DefaultTheme,
  colors: {
    primary: themePalette.primary.main,
    background: themePalette.white,
    card:  themePalette.white,
    text: themePalette.secondary.contrastText,
    border: themePalette.secondary.light,
    notification: themePalette.primary.main,
  },
};

const themeDark = {
  ...DefaultTheme,
  colors: {
    primary: themePalette.secondary.light,
    background: themePalette.secondary.main,
    card: themePalette.secondary.dark,
    text: themePalette.secondary.contrastText,
    border: themePalette.secondary.light,
    notification: themePalette.secondary.light,
  },
};

/* eslint-disable-next-line */
export interface ThemeProps {
  children: (theme: any) => void,
}

export function Theme({ children }: ThemeProps) {
  const darkMode = useRecoilValue(darkModeAtom);
  const theme = darkMode ? themeDark : themeLight;

  return (
    <>
      {children(theme)}
    </>
  );
}

export default Theme;
