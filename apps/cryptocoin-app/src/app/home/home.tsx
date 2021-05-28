import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useTheme } from '@react-navigation/native';

import { themePalette } from '@coincap/utils';

import HomeScreen from './home-screen';
import HomeDetailScreen from './home-detail-screen';

const Stack = createStackNavigator();
export function Home() {
  const { colors } = useTheme();
  return (
    <Stack.Navigator
      initialRouteName="Coins"
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.primary,
          shadowColor: colors.border,
        },
        headerTintColor: themePalette.white,
      }}
    >
      <Stack.Screen name="Coins" component={HomeScreen} options={{ title: 'Coincap' }}/>
      <Stack.Screen name="CoinDetail" component={HomeDetailScreen} />
    </Stack.Navigator>
  );
}

export default Home;

