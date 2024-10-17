import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore'; // Use this for Firestore in React Native Firebase
import { useNavigation } from '@react-navigation/native';
import { scale } from 'react-native-size-matters';
import { TEXT_COLOR, THEME_COLOR } from '../utils/Colors';
import { ScrollView } from 'react-native-gesture-handler';

export default function TutorProfile() {
  const navigation = useNavigation();
  const [userEmail, setUserEmail] = useState('');
  const [userName, setUserName] = useState('');

  // Fetch the current user's email and fetch Firestore data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      const currentUser = auth().currentUser;

      if (currentUser) {
        // Set the current user's email in the state
        setUserEmail(currentUser.email);
        try {
          // Firestore query to get the user's details by email
          const querySnapshot = await firestore()
            .collection('users')
            .where('email', '==', currentUser.email)
            .get();
            
          querySnapshot.forEach((doc) => {
            console.log('User Name from Firestore:', doc.data().name);
            setUserName(doc.data().name || 'No Name'); // Update the userName from Firestore
          });
        } catch (error) {
          console.error('Error fetching user data from Firestore:', error);
        }
      } else {
        // If no user is logged in, navigate to the login screen
        navigation.replace('Login');
      }
    };

    fetchData(); // Call the async function inside useEffect
  }, [navigation]); // Add dependencies like navigation

  const handleLogout = async () => {
    try {
      // Sign out from Firebase
      await auth().signOut();
      // Clear AsyncStorage
      await AsyncStorage.clear();
      console.log('AsyncStorage cleared, user signed out.');
      Alert.alert('Signed Out', 'You have been signed out successfully.');
      // Navigate to the login screen
      navigation.replace('Login');
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Image source={require('../images/profile3.png')} style={styles.img} />
        
        {/* User name and email wrapped inside Text components */}
        <Text style={styles.txt}>Name:</Text>
        <Text style={[styles.txt,{color:'green'}]}>{userName}</Text>
        <Text style={[styles.txt,{alignSelf:'center'}]}>Email:</Text>
        <Text style={[styles.txt,{color:'green'}]}>{userEmail}</Text>

        <TouchableOpacity onPress={handleLogout}>
          <Text style={{ color: 'red', fontSize: scale(20) }}>
            Logout!
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    width: scale(250),
    height: scale(250),
  },
  txt: {
    fontWeight: 'bold',
    fontSize: scale(25),
    color: TEXT_COLOR,
    justifyContent:'center'
  },
});
