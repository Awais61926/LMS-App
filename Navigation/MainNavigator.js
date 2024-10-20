import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Login from '../login/Login';
import TutorHome from '../tutor/TutorHome';
import LearnerHome from '../learner/LearnerHome';

const Stack = createStackNavigator();

export default function MainNavigator() {
  const [initialRoute, setInitialRoute] = useState(null);

  useEffect(() => {
    const checkUserRole = async () => {
      const userRole = await AsyncStorage.getItem('userRole');

      if (userRole === 'Tutor') {
        setInitialRoute('TutorHome');
      } else if (userRole === 'Learner') {
        setInitialRoute('LearnerHome');
      } else {
        setInitialRoute('Login');
      }
    };

    checkUserRole(); // Check the role when the app starts
  }, []);

  if (!initialRoute) {
    return null; // Wait for the check to complete
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={initialRoute}>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="LearnerHome" component={LearnerHome} options={{ headerShown: false }} />
        <Stack.Screen name="TutorHome" component={TutorHome} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
