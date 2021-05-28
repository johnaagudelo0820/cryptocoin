import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Image, } from 'react-native';

import Home from '../home/home';
import Settings from '../settings/settings';

const Tabs = createBottomTabNavigator()

export function Navigator({ theme }) {
  const tabBarOptions = {
    tintColor: theme.colors.text,
    activeTintColor: 'white',
    inactiveTintColor: theme.colors.border,
    style: {
      backgroundColor: theme.colors.primary,
    }
  };
  return (
    <NavigationContainer theme={theme}>
      <Tabs.Navigator
        tabBarOptions={tabBarOptions}
      >
          <Tabs.Screen
            name="Coins"
            component={Home}
            options={{
              tabBarIcon: ({ size, color }) => (
                <Image
                  style={{ tintColor: color, width: size, height: size }}
                  source={require('../assets/bank.png')}
                />
              ),
            }}
          />
          <Tabs.Screen
            name="Settings"
            component={Settings}
            options={{
              tabBarIcon: ({ size, color }) => (
                <Image
                  style={{ tintColor: color, width: size, height: size }}
                  source={require('../assets/star.png')}
                />
              ),
            }}
          />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
