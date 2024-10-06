import { View, Text, StyleSheet, Touchable, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { moderateScale, scale } from 'react-native-size-matters'
import { THEME_COLOR, WHITE } from '../utils/Colors'
import { useNavigation } from '@react-navigation/native'
import AddCourse from './courses/AddCourse'
import { FlatList } from 'react-native-gesture-handler'
import Courses from './courses/courses'

export default function LiveCourses() {
    const navigation = useNavigation();
    return (
        <View style={styles.constainer}>
            <FlatList
            data={[1,2,3,4,5,6,7]} renderItem={({item,index})=>{
                return <Courses item={item} index={index}/>
            }}

            />
            <View style={{ justifyContent: 'flex-end', width: moderateScale(100), height: moderateScale(100), elevation: 150, borderRadius: moderateScale(20), marginRight: scale(70), marginBottom: scale(50) }}>
                <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate('AddCourse')}>
                    <Text style={{ fontSize: scale(18), padding: 2, color:WHITE }}>Add Courses</Text>
                    <Image source={require('../images/plus2.png')} style={{ width: 40, height: 40 }} />
                </TouchableOpacity>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    constainer: {
        flex: 1,

        justifyContent: 'flex-end',
        alignItems: 'flex-end'


    },
    btn: {
        backgroundColor: 'red', width: moderateScale(165), height: moderateScale(55), justifyContent: 'center', alignItems: 'center', borderRadius: 40, flexDirection:'row-reverse', elevation:20

    }
})