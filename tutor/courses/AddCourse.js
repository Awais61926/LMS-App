import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

export default function AddCourse() {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
        <View style={{justifyContent:'center', alignItems:'center',marginTop:15}}>
      <TouchableOpacity style={styles.banner}>
        <Image source={require('../../images/plus2.png')} style={styles.img}/>
        <Text style={{fontWeight:800,color:'black'}}>Select Banner</Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        flex:1
    },
    banner:{
        width:moderateScale(350),
        height:verticalScale(180),
        borderColor:'#9e9e9e',
        borderWidth:2,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10
        
    },
    img:{
        width:scale(30),
        height:scale(30)
    }
})