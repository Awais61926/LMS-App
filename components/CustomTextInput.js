import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import { moderateVerticalScale, scale } from 'react-native-size-matters'
import { TEXT_COLOR, THEME_COLOR } from '../utils/Colors'

export default function CustomTextInput({ keyboardType, onChangeText, placeholder, multiline }) {
    const [isFocus, setisFocus] = useState(false)
    return (
        <View style={{ margin: moderateVerticalScale(7), width: '90%', height: multiline?moderateVerticalScale(120): moderateVerticalScale(45), borderWidth: 2, borderColor: isFocus ? THEME_COLOR : '#9e9e9e', borderRadius: scale(5), alignSelf: 'center', padding:2 }}>
            <TextInput placeholder={placeholder} placeholderTextColor={TEXT_COLOR} keyboardType={keyboardType} onPress={() => setisFocus(true)} onSubmitEditing={() => setisFocus(false)} onBlur={() => setisFocus(false)} onChangeText={onChangeText} multiline={multiline} style={{color:TEXT_COLOR}}/>
        </View>
    )
}