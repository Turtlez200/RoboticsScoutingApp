import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScoutingSheet from './screens/ScoutingSheet';

const Stack = createNativeStackNavigator();

export default class App extends Component {

  // Initialize Firebase
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown: false,
        }}>
          <Stack.Screen name="ScoutingSheet" component={ScoutingSheet} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
