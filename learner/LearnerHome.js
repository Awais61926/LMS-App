import { View, Text, Image } from 'react-native'
import React from 'react'
import { TEXT_COLOR } from '../utils/Colors'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LearnerProfile from './LearnerProfile';
import Courses from './Courses';
import ActiveCourses from './ActiveCourses';

const LearnerHome=()=> {
  const Bottom = createBottomTabNavigator();
  return (
    <Bottom.Navigator screenOptions={{tabBarStyle:{height:60}}}>
      <Bottom.Screen name="Courses" component={Courses} options={{
        tabBarIcon:({size})=>{
          return <Image source={require('../images/courses.png')} style={{width:size+15,height:size+15}}/>
        }
      }} />
      <Bottom.Screen name="ActiveCourses" component={ActiveCourses} options={{
      tabBarIcon:({size})=>{
        return <Image source={require('../images/activecourses.png')} style={{width:size+10,height:size+10}}/>
      }
    }} />


    <Bottom.Screen name="LearnerProfile" component={LearnerProfile} options={{
      tabBarIcon:({size})=>{
        return <Image source={require('../images/learnerprofile4.png')} style={{width:size+20,height:size+15}}/>
      }
    }} />
   
  </Bottom.Navigator>
  )
}
export default LearnerHome


