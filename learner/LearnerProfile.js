import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React, { useEffect } from 'react'
import { TEXT_COLOR, WHITE } from '../utils/Colors'
import { moderateVerticalScale, scale } from 'react-native-size-matters'
import AsyncStorage from '@react-native-async-storage/async-storage'
import auth from '@react-native-firebase/auth'
import { useNavigation } from '@react-navigation/native'
const LearnerProfile=()=> {
     const navigation = useNavigation();
    // const learnerEmail= AsyncStorage.getItem('userEmail')
    const handleSignOut = async () => {
      await AsyncStorage.removeItem('userRole'); // Clear the user role
      navigation.replace('Login'); // Navigate to the login screen
    };
    
  return (
    <View style={{ flex:1,backgroundColor:WHITE, alignItems:'center',justifyContent:'center'}}>
      <Image source={require('../images/learnerprofile3.png')} style={styles.img}/>
      <Text>
        {/* {learnerEmail} */}
      </Text>
      <TouchableOpacity onPress={handleSignOut}>
        <Text style={styles.txt}>Logout!</Text>
      </TouchableOpacity>
    </View>
  )
}
export default LearnerProfile
const styles=StyleSheet.create({
    txt:{
        color:'red',
        fontSize:scale(25)


    },
    img:{
        width:'45%',
        height:moderateVerticalScale(250)
    }
})