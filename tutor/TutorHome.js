import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import LiveCourses from './LiveCourses';
import CourseSell from './CourseSell';
import TutorProfile from './TutorProfile';
const Bottom=createBottomTabNavigator()
const TutorHome=()=>{
    return(
        <Bottom.Navigator>
            <Bottom.Screen name='LiveCourses' component={LiveCourses}/>
            <Bottom.Screen name='CourseSell' component={CourseSell}/>
            <Bottom.Screen name='TutorProfile' component={TutorProfile}/>
        </Bottom.Navigator>

    )
}
export default TutorHome;