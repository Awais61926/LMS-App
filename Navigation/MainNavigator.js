import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Splash from '../Splash';
import ChooseUserType from '../ChooseUserType';

const Stack = createStackNavigator();
export default function MainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Splash" component={Splash} options={{headerShown:false}} />
      <Stack.Screen name="ChooseUserType" component={ChooseUserType} options={{headerShown:false}} />
    </Stack.Navigator>
    </NavigationContainer>
  )
}