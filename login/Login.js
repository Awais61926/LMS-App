import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, Alert } from 'react-native';
import React, { useState } from 'react';
import { BG_COLOR, TEXT_COLOR, WHITE } from '../utils/Colors';
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters';
import { useNavigation, useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth'; // Firebase Authentication import

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const route = useRoute();
  const navigation = useNavigation();

  const handleLogin = () => {
    if (email === '' || password === '') {
      Alert.alert('Validation Error', 'Please enter both email and password');
      return;
    }

    auth()
      .signInWithEmailAndPassword(email, password)
      .then(async() => {
        console.log('User signed in!');
        // Store email string directly
        await AsyncStorage.setItem('userEmail', email);

        if (route.params?.Screen === 'tutor') {
          navigation.navigate('TutorHome');
        } else {
          navigation.navigate('TutorHome');
        }
      })
      .catch(error => {
        if (error.code === 'auth/user-not-found') {
          Alert.alert('Error', 'No user found with this email');
        } else if (error.code === 'auth/wrong-password') {
          Alert.alert('Error', 'Incorrect password');
        } else {
          Alert.alert('Error', error.message);
        }
      });
  };

  return (
    <View style={styles.container}>
      <Image source={require('../images/login.jpg')} style={styles.banner} />
      <Text style={styles.txt}>Login</Text>

      {/* Email TextInput */}
      <TextInput
        style={styles.input}
        placeholder="Enter Email"
        placeholderTextColor="#999"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      {/* Password TextInput */}
      <TextInput
        style={styles.input}
        placeholder="Enter Password"
        placeholderTextColor="#999"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />

      {/* Login Button */}
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      {/* Register Link */}
      <TouchableOpacity
        style={{ justifyContent: 'center', alignItems: 'center' }}
        onPress={() => {
          navigation.navigate('Register');
        }}
      >
        <Text style={{ color: 'red' }}>Don't have an account? Register</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: BG_COLOR,
        paddingHorizontal: scale(20),
      },
      banner: {
        width: '100%',
        height: moderateVerticalScale(210),
      },
      txt: {
        fontSize: moderateScale(25),
        fontWeight: '700',
        color: TEXT_COLOR,
        alignSelf: 'center',
        marginTop: moderateScale(5),
      },
      input: {
        width: '100%',
        height: moderateVerticalScale(50),
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: moderateScale(10),
        paddingHorizontal: moderateScale(10),
        marginVertical: moderateScale(10),
        color: TEXT_COLOR,
        fontSize: moderateScale(16),
      },
      loginButton: {
        backgroundColor: '#4CAF50',
        paddingVertical: moderateVerticalScale(12),
        borderRadius: moderateScale(10),
        alignItems: 'center',
        marginVertical: moderateScale(10),
      },
      loginButtonText: {
        color: WHITE,
        fontSize: moderateScale(18),
        fontWeight: '600',
      },
});
