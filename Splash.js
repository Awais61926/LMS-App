import { View, Text, StyleSheet, Image, StatusBar } from 'react-native'
import React from 'react'
import { BG_COLOR, TEXT_COLOR, THEME_COLOR } from './utils/Colors';
import { SPLASH_TAGLINE } from './utils/Strings';

export default function Splash() {
  return (
    <View style={styles.container}>
        <StatusBar backgroundColor={THEME_COLOR}/>
        <Image source={require('./images/logo.png')} style={styles.logo}/>
        <Text style={styles.txt}>{SPLASH_TAGLINE}</Text>
    </View>
  )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:THEME_COLOR
    
    },
    logo:{
        width:250,
        height:250
    },
    txt:{
        fontSize:25,
        fontWeight:'bold',
        color:TEXT_COLOR
    }
});
