import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { colors } from '@coincap/utils';
import HomeScreeen from './home-screen';

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
      <Stack.Screen name="Coins" component={HomeScreeen} options={{ title: 'Coincap' }}/>
      {/* <Stack.Screen name="CoinDetail" component={CoinDetailScreen} /> */}
    </Stack.Navigator>
  );
}

export default Home;
