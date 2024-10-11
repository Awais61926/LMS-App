import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { THEME_COLOR, WHITE } from '../utils/Colors';
import { useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native-gesture-handler';
import CoursesList from './courses/CoursesList';

export default function LiveCourses() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            {/* Course List */}
            <FlatList
                data={[1, 2, 3, 4, 5]} 
                renderItem={({ item, index }) => {
                    return <CoursesList item={item} index={index} />;
                }}
                keyExtractor={(item, index) => index.toString()}
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
        backgroundColor: 'red',
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
        width: moderateScale(40),
        height: moderateScale(40),
        marginLeft: scale(5),
    },
});
