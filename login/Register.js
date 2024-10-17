import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import auth, { firebase } from '@react-native-firebase/auth';
import { Dropdown } from 'react-native-element-dropdown';
import { TEXT_COLOR } from '../utils/Colors';
import firestore from '@react-native-firebase/firestore'
import { scale } from 'react-native-size-matters';
import { useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Register = ({ navigation }) => {
  const route = useRoute();
  

  const data=[
    {label1: 'Tutor', value:'Tutor'},
    {label2:'Learner', value:'Learner'}
  ]
  const [username, setuserName] = useState('');
  const [useremail, setuserEmail] = useState('');
  // const [userRole, setuserRole] = useState('');
  const [password, setPassword] = useState('');
  // setuserRole=route.params.Screen;

   const handleSignUp = async () => {
    if (useremail === '' || password === '') {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    auth()
      .createUserWithEmailAndPassword(useremail, password)
      .then(async () => {
        Alert.alert('Success! User Account Created');
        firestore().collection('users').add({
          email:useremail,
          name:username,
          password:password,
        })
        
        navigation.navigate('Login');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          Alert.alert('Error', 'That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          Alert.alert('Error', 'That email address is invalid!');
        }

        Alert.alert('Error', error.message);
      });
  };

  return (
    <View style={styles.container}>
      {/* SignUp Title */}
      <Text style={styles.title}>Sign Up</Text>

      {/* Name Input */}
      <TextInput
        style={styles.input}
        placeholder="Enter Name"
        placeholderTextColor="#aaa"
        value={username}
        onChangeText={setuserName}
      />

      {/* Email Input */}
      <TextInput
        style={styles.input}
        placeholder="Enter Email"
        placeholderTextColor="#aaa"
        value={useremail}
        onChangeText={setuserEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      {/* Password Input */}
      <TextInput
        style={styles.input}
        placeholder="Enter Password"
        placeholderTextColor="#aaa"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      {/* <Dropdown data={data} maxHeight={300}
          placeholderStyle={{color:TEXT_COLOR}}
          search
          labelField="label"
          valueField="value" 
          inputSearchStyle={{color:TEXT_COLOR, fontSize:scale(15)}}/> */}

      {/* Sign Up Button */}
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      {/* Forgot Password Link */}

      {/* Navigate to Login */}
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.loginText}>Already have an account? Log In</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 30,
    color: '#333',
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
    fontSize: 16,
    color: '#333',
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#5DB075',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  loginText: {
    textAlign: 'center',
    color: '#333',
    marginTop: 30,
    fontSize: 16,
  },
});
