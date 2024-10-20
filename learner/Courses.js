import { View, Text, StyleSheet, StatusBar, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TEXT_COLOR, THEME_COLOR, WHITE } from '../utils/Colors'
import { moderateScale } from 'react-native-size-matters'
import firestore from '@react-native-firebase/firestore'
import CoursesList from '../tutor/courses/CoursesList'
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
                    return <CoursesList item={item} index={index} />;
                }}
              
            />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        //        backgroundColor:THEME_COLOR
    },
    sectionTitle:{
        color:'#4CAF50',
        fontSize:moderateScale(30),
        fontWeight:'bold'
    }
})