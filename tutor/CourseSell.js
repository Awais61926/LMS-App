import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters'
import { TEXT_COLOR, WHITE } from '../utils/Colors'
import { FlatList } from 'react-native-gesture-handler'
import HistoryList from './courses/HistoryList'

export default function CourseSell() {
    return (
        <View style={styles.container}>
            <View style={styles.gridView}>
                <View style={styles.gridCard}>
                    <Text style={styles.heading}>
                        {'Rs. 5000'}

                    </Text>
                    <Text style={styles.title}>
                        {'Total sell'}
                    </Text>

                </View>

                <View style={styles.gridCard}>
                <Text style={styles.heading}>
                        {'10'}

                    </Text>
                    <Text style={styles.title}>
                        {'Courses'}
                    </Text>

                </View>
            </View>
            <Text style={styles.heading}>
                {'History'}
            </Text>
            <FlatList
            data={[1,2,3,4,5,6]} renderItem={({data})=>{
                return <HistoryList data={data}/>
            }}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    gridView: {
        width: '100%',
        height: moderateVerticalScale(120),
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: moderateScale(8)


    },
    gridCard: {
        width: '40%',
        height: moderateVerticalScale(100),
        backgroundColor: WHITE,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 15,
        borderRadius: scale(12),
    },
    heading: {
         color: TEXT_COLOR,
         fontWeight:'800',
         fontSize: moderateScale(17),
         margin:moderateScale(5)
    },
    title:{
        fontSize:moderateScale(15),
        color:'green',
        fontWeight:'500'
    }
})