import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { TEXT_COLOR, WHITE } from '../../utils/Colors'
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters'

export default function HistoryList() {
  return (
    <View style={styles.list}>
       <Text style={styles.heading}>
        {'Course Detail:'}
       </Text>
       <Text style={styles.title}>
        {'Name: React native '}
       </Text>
       <Text style={styles.title}>
        {'Price: PKR 2000 '}
       </Text>
       <Text style={styles.heading}>
        {'Purchased By:'}
       </Text>
       <Text style={styles.title}>
        {'Name: Alyan'}
       </Text>
       <Text style={styles.title}>
        {'Email: alyan@gmail.com'}
       </Text>


    </View>
  )
}
const styles = StyleSheet.create({
    list:{
        alignSelf:'center',
        marginBottom:moderateScale(17),
        width:'90%',
        height:moderateVerticalScale(130),
        backgroundColor:WHITE,
        elevation:5,
        borderRadius:moderateScale(10)

    },
    heading: {
         color: TEXT_COLOR,
         fontWeight:'800',
         fontSize: moderateScale(14),
         padding:moderateScale(2)
    },
    title:{
        fontSize:moderateScale(13),
        color:'grey',
        fontWeight:'500',
        paddingLeft:moderateScale(2)
    }
})