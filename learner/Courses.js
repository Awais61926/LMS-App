import { View, Text, StyleSheet, StatusBar, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TEXT_COLOR, THEME_COLOR, WHITE } from '../utils/Colors'
import { moderateScale, scale } from 'react-native-size-matters'
import firestore from '@react-native-firebase/firestore'
import CoursesList from '../tutor/courses/CoursesList'
import LearnerCourses from './LearnerCourses'
export default function Courses() {
    const [coursesData,setCourseData]=useState([]);
    useEffect(()=>{
        
    const getCourses=async ()=>{
        const data = await firestore().collection('courses').get();
        console.log((await data).docs);
        const temp=[];
        await data.docs.forEach(item => temp.push({ ...item.data()}));
        setCourseData(temp);

    }
    getCourses();

    },[]

    )
    return (
        <View style={styles.container}>
            <StatusBar
                backgroundColor={WHITE}
            />
            <View>     
                <Text style={styles.sectionTitle}>Available Courses</Text>
                <FlatList
                data={coursesData} 
                renderItem={({ item, index }) => {
                    return <LearnerCourses item={item} />
                }}
              
            />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    sectionTitle:{
        color:'#4CAF50',
        fontSize:moderateScale(30),
        fontWeight:'bold',
        marginLeft:scale(17)
    }
})