import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  Image,
  Text,
} from 'react-native';
import { RecoilRoot } from 'recoil'; 

import Home from './home/home';
import Color from './res/colors';

const Tabs = createBottomTabNavigator();

/* import {
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
// @ts-ignore
import openURLInBrowser from 'react-native/Libraries/Core/Devtools/openURLInBrowser'; */

const tabBarOptions = {
  tintColor: "#fefefe",
  style: {
    backgroundColor: Color.blackPearl,
  }
};

const App = () => {
  return (
    <RecoilRoot>
      <NavigationContainer>
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
                    source={require('./assets/bank.png')}
                  />
                ),
              }}
            />
            <Tabs.Screen
              name="Favorite"
              component={() => <Text>Setttings</Text>}
              options={{
                tabBarIcon: ({ size, color }) => (
                  <Image
                    style={{ tintColor: color, width: size, height: size }}
                    source={require('./assets/star.png')}
                  />
                ),
              }}
            />
        </Tabs.Navigator>
      </NavigationContainer>
    </RecoilRoot>
  );
};

export default App;
