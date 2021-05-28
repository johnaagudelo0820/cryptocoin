import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useTheme } from '@react-navigation/native';

import { themePalette } from '@coincap/utils';

import SettingScreen from './settings-screen';

const Stack = createStackNavigator();

export function Settings() {
  const { colors } = useTheme();
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.primary,
          shadowColor: colors.border,
        },
        headerTintColor: themePalette.white,
      }}
    >
      <Stack.Screen name="settings" component={SettingScreen} options={{ title: 'Settings' }}/>
    </Stack.Navigator>
  );
}

export default Settings;
