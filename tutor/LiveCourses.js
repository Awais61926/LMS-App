import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { THEME_COLOR, WHITE } from '../utils/Colors';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native-gesture-handler';
import CoursesList from './courses/CoursesList';
import firestore from '@react-native-firebase/firestore'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LiveCourses() {
    const navigation = useNavigation();
    const [courses,setCourses]=useState([]);
    const isFocused = useIsFocused();
    useEffect(()=>{
        getCourses();


    },[isFocused])
    const getCourses=async()=>{
        const userID = await AsyncStorage.getItem('userID');
        const email = await AsyncStorage.getItem('userEmail');
        const data = await firestore()
            .collection('courses')
            .where('email', '==', email)
            .get();
        console.log((await data).docs);
        const temp=[];
        (await data).docs.forEach(item=>{
            temp.push({...item.data()});
        });
        setCourses(temp)

    }
    return (
        <View style={styles.container}>
            {/* Course List */}
            <FlatList
                data={courses} 
                renderItem={({ item, index }) => {
                    return <CoursesList item={item} index={index} />;
                }}
                contentContainerStyle={styles.listContent}
            />
            
            {/* Add Course Button */}
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('AddCourse')}>
                    <Text style={styles.btnText}>Add Courses</Text>
                    <Image source={require('../images/plus2.png')} style={styles.btnImage} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: scale(15),
        backgroundColor: 'white',
    },
    listContent: {
        paddingBottom: verticalScale(80), // Provide bottom padding so the button doesn’t overlap with the list
    },
    buttonContainer: {
        position: 'absolute', // Ensures button stays fixed at the bottom
        bottom: scale(20),
        right: scale(20),
        elevation: 20,
    },
    btn: {
        backgroundColor: THEME_COLOR,
        width: moderateScale(200),
        height: moderateScale(55),
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderRadius: 40,
        flexDirection: 'row-reverse',
        paddingHorizontal: scale(15),
        elevation: 10,
    },
    btnText: {
        fontSize: scale(18),
        padding: 2,
        color: WHITE,
    },
    btnImage: {
        alignItems:'center',
        width: moderateScale(30),
        height: moderateScale(30),
        marginLeft: scale(5),
    },
});
