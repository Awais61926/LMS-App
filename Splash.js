import { View, Text, StyleSheet, Image, StatusBar } from 'react-native';
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Ensure you have this import
import { useNavigation } from '@react-navigation/native';
import { BG_COLOR, TEXT_COLOR, THEME_COLOR } from './utils/Colors';
import { SPLASH_TAGLINE } from './utils/Strings';
import ChooseUserType from './ChooseUserType';

function Splash() {
  const navigation = useNavigation();
  const [userEmail, setUserEmail] = useState(null);

  const checkUserEmail = async () => {
    try {
      const email = await AsyncStorage.getItem('userEmail');
      setUserEmail(email);
    } catch (error) {
      console.error('Failed to retrieve user email:', error);
    }
  };

  useEffect(() => {
    checkUserEmail();
    
    const timer = setTimeout(() => {
      if (userEmail) {
        navigation.navigate('TutorHome');
      } else {
        navigation.navigate('ChooseUserType');
      }
    }, 3000);
    

    return () => clearTimeout(timer); // Cleanup the timer when the component unmounts
  }, [userEmail, navigation]); // adding userEmail and navigation as dependencies

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={THEME_COLOR} />
      <Image source={require('./images/logo.png')} style={styles.logo} />
      <Text style={styles.txt}>{SPLASH_TAGLINE}</Text>
      {/* Display userEmail in uppercase if it exists */}
      <Text style={[styles.txt,{color:'green'}]}>Welcome! {userEmail ? userEmail.toUpperCase() : ''}</Text>
    </View>
  );
}

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: THEME_COLOR
  },
  logo: {
    width: 250,
    height: 250
  },
  txt: {
    fontSize: 25,
    fontWeight: 'bold',
    color: TEXT_COLOR
  }
});
