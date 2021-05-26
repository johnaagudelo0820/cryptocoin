import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreeen from './home-screen';
import Color from '../res/colors';

const Stack = createStackNavigator();
export function Home() {
  return (
    <Stack.Navigator
      initialRouteName="Coins"
      screenOptions={{
        headerStyle: {
          backgroundColor: Color.blackPearl,
          shadowColor: Color.blackPearl,
        },
        headerTintColor: Color.white,
      }}
    >
      <Stack.Screen name="Coins" component={HomeScreeen} options={{ title: 'Coincap' }}/>
      {/* <Stack.Screen name="CoinDetail" component={CoinDetailScreen} /> */}
    </Stack.Navigator>
  );
}

export default Home;
