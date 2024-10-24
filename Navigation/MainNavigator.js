import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, ActivityIndicator } from 'react-native'; // For splash screen
import Login from '../login/Login';
import TutorHome from '../tutor/TutorHome';
import LearnerHome from '../learner/LearnerHome';
import CourseView from '../tutor/courses/CourseView';
import Splash from '../Splash';  // Import your Splash screen
import Register from '../login/Register';
import ChooseUserType from '../ChooseUserType';
import AddCourse from '../tutor/courses/AddCourse';
import AddChapter from '../tutor/courses/AddChapter';

const Stack = createStackNavigator();

export default function MainNavigator() {
  const [initialRoute, setInitialRoute] = useState(null);

  useEffect(() => {
    const checkUserRole = async () => {
      try {
        const userRole = await AsyncStorage.getItem('userRole');
        
        if (userRole === 'Tutor') {
          setInitialRoute('TutorHome');
        } else if (userRole === 'Learner') {
          setInitialRoute('LearnerHome');
        } else {
          setInitialRoute('Login');
        }
      } catch (error) {
        console.error('Error checking user role', error);
        setInitialRoute('Login'); // Fallback to login if something goes wrong
      }
    };

    checkUserRole(); // Check the role when the app starts
  }, []);

  // Show a loading spinner while checking the user role
  if (!initialRoute) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen 
          name="Splash" 
          component={Splash} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Login" 
          component={Login} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen
          name='Register'
          component={Register}
        />
        <Stack.Screen
          name='ChooseUserType'
          component={ChooseUserType}
        />
        <Stack.Screen
          name='AddCourse'
          component={AddCourse}
        />
        <Stack.Screen 
          name="LearnerHome" 
          component={LearnerHome} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="TutorHome" 
          component={TutorHome} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="CourseView" 
          component={CourseView} 
          options={{ headerShown: false }} 
        />
          <Stack.Screen 
          name="AddChapter" 
          component={AddChapter} 
          options={{ headerShown: false }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
