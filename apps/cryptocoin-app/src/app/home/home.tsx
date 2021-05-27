import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { colors } from '@coincap/utils';
import HomeScreen from './home-screen';
import HomeDetailScreen from './home-detail-screen';

const Stack = createStackNavigator();
export function Home() {
  return (
    <Stack.Navigator
      initialRouteName="Coins"
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.blackPearl,
          shadowColor: colors.blackPearl,
        },
        headerTintColor: colors.white,
      }}
    >
      <Stack.Screen name="Coins" component={HomeScreen} options={{ title: 'Coincap' }}/>
      <Stack.Screen name="CoinDetail" component={HomeDetailScreen} />
    </Stack.Navigator>
  );
}

export default Home;
