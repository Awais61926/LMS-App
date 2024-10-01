import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { STD_TYPE, TUTOR_TYPE, USER_TYPE } from './utils/Strings';
import { TEXT_COLOR, WHITE, WhITE } from './utils/Colors';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';
import BgButton from './components/BgButton';
import BorderButton from './components/BorderButton';
import { Screen } from 'react-native-screens';

export default function ChooseUserType() {
  const navigation=useNavigation();
  return (
    <View style={styles.container}>
      <Image source={require('./images/users.jpg')} style={{ width:'100%',height:'30%'}}/>
      <Text style={styles.txt}>{USER_TYPE}</Text>
      <BgButton title={TUTOR_TYPE}
      color={WHITE}
      onClick={()=>{navigation.navigate('Login',{
        Screen:'tutor'
      })
        
      }}
      />
      <BorderButton
      title={STD_TYPE}
      onClick={()=>{navigation.navigate('Login',
    {
      Screen:'Student'
    })
        
    }}
      />

    </View>
  )
}
const styles= StyleSheet.create({

 container:{
  flex:1,
 },
 txt:{
  fontSize:moderateScale(25),
  marginTop:moderateVerticalScale(10),
  fontWeight:'bold',
  color:TEXT_COLOR,
  alignSelf:'center'


 } 
});