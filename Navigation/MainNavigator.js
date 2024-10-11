import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Splash from '../Splash';
import ChooseUserType from '../ChooseUserType';
import Login from '../login/Login';
import TutorHome from '../tutor/TutorHome';
import AddCourse from '../tutor/courses/AddCourse';
import Register from '../login/Register';

const Stack = createStackNavigator();
export default function MainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Splash" component={Splash} options={{headerShown:false}} />
      <Stack.Screen name='ChooseUserType' component={ChooseUserType} options={{headerShown:false}} />
      <Stack.Screen name='Login' component={Login} options={{headerShown:false}} />
      <Stack.Screen name='Register' component={Register} options={{headerShown:false}} />
      <Stack.Screen name='TutorHome' component={TutorHome} options={{headerShown:false}} />
      <Stack.Screen name='AddCourse' component={AddCourse} options={{headerShown:true}} />
      
    </Stack.Navigator>
    </NavigationContainer>
  )
}