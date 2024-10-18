import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import { moderateVerticalScale, scale } from 'react-native-size-matters'
import { verticalScale } from 'react-native-size-matters'
import { TEXT_COLOR } from '../../utils/Colors'
import BorderButton from '../../components/BorderButton'

const CourseView=()=> {
    const route =useRoute()
  return (
    <View style={styles.container}>
        <Image source={{uri:route.params.item.bannerImage}} style={{width:'100%', height:verticalScale(200)}}/>
        <Text style={styles.txt}>{route.params.item.title}</Text>
        <Text style={styles.txt}>{route.params.item.description}</Text>
        <BorderButton title={'Add Chapter'}/>
        
    </View>
  )
}
export default CourseView
const styles=StyleSheet.create({
    container:{
        flex:1,
    },
    txt:{
        fontSize:scale(15),
        color:TEXT_COLOR,
        fontWeight:'bold',
        
    }
})