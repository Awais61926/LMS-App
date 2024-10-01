import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { BG_COLOR, TEXT_COLOR, THEME_COLOR, WHITE } from '../utils/Colors'
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters'

const BorderButton=({title,color,bg,onClick})=>{
    return(
        <View>
            <TouchableOpacity style={[styles.btn,{borderColor:bg?bg:THEME_COLOR}]} 
            onPress={onClick}>
                <Text style={[styles.title,{color:color?color:TEXT_COLOR}]}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    btn:{
        width:'90%',
        height:moderateVerticalScale(50),
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center',
        margin:moderateScale(10),
        borderRadius:moderateScale(10),
        borderWidth:1,
        backgroundColor:BG_COLOR



    },
    title:{
        fontSize:moderateScale(16),
        fontWeight:'700'
        

    }

})
export default BorderButton;