import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { scale } from 'react-native-size-matters';
import { firebase } from '@react-native-firebase/auth';
export default function TutorProfile() {
  const navigation = useNavigation();
  const [userEmail, setUserEmail] = useState(''); 
  const handleLogout = async () => {
    useEffect(() => {
      // Get the currently logged-in user
      const currentUser = auth().currentUser;
  
      if (currentUser) {
        // If a user is logged in, set their email to the state
        setUserEmail(currentUser.email);
      } else {
        // If no user is logged in, navigate back to the login screen
        navigation.replace('Login');
      }
    }, [navigation]);

    try {
      // Sign out from Firebase
      await auth().signOut();
      await AsyncStorage.clear();
      console.log('AsyncStorage cleared, user signed out.');
      Alert.alert('Signed Out', 'You have been signed out successfully.');
      navigation.replace('Login');
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };
  //let user = firebase.auth().currentUser;

  return (
    <View style={styles.container}>
      <View style={{justifyContent:'center', alignItems:'center'}}>
        <Image source={require('../images/profile3.png')} style={styles.img}/>
        <Text>Email</Text>
        <Text>{userEmail}</Text>


      <TouchableOpacity onPress={handleLogout}>
        <Text style={{ color: 'red', fontSize: scale(20) }}>
          Logout!
        </Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}
const styles =StyleSheet.create({
  container:{
    flex:1
  },
  img:{
    width:scale(250),
    height:scale(250)
  }
})