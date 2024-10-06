import { View, Text, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import LiveCourses from './LiveCourses';
import CourseSell from './CourseSell';
import TutorProfile from './TutorProfile';
import { THEME_COLOR } from '../utils/Colors';
const Bottom = createBottomTabNavigator()
const TutorHome = () => {
    return (
        <Bottom.Navigator screenOptions={{tabBarStyle:{height:60}}}>
            <Bottom.Screen name='LiveCourses' component={LiveCourses} options={{
                tabBarIcon: ({ size, focused }) => {
                    return <Image source={require('../images/livecourses.png')} style={{  width:size,height:size }}/>
                },
            }}  />
            <Bottom.Screen name='CourseSell' component={CourseSell} options={{
                tabBarIcon: ({ size, focused }) => {
                    return <Image source={require('../images/sell.png')} style={{
                          width:size+5,height:size+5 }}/>
                },
            }} />
            <Bottom.Screen name='TutorProfile' component={TutorProfile} options={{tabBarIcon:({size,focused})=>{
                return <Image source={require('../images/profile.png')} style={{  width:size+5,height:size+5}}/>

            },
            }} />
        </Bottom.Navigator>

    )
}
export default TutorHome;