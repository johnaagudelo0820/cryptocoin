import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { colors } from '@coincap/utils';
import SettingScreen from './settings-screen';

const Stack = createStackNavigator();

/* eslint-disable-next-line */
export interface SettingsProps {}

export function Settings(props: SettingsProps) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.blackPearl,
          shadowColor: colors.blackPearl,
        },
        headerTintColor: colors.white,
      }}
    >
      <Stack.Screen name="settings" component={SettingScreen} options={{ title: 'Settings' }}/>
    </Stack.Navigator>
  );
}

export default Settings;
