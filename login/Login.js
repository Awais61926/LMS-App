import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, Alert } from 'react-native';
import React, { useState } from 'react';
import { BG_COLOR, TEXT_COLOR, WHITE } from '../utils/Colors';
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';
import { ScrollView } from 'react-native-gesture-handler';
import firestore from '@react-native-firebase/firestore';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();

    const ForgotPass = () => {
        auth().sendPasswordResetEmail(email)
            .then(() => {
                Alert.alert('Password reset email sent!')
            }).catch((error) => {
                Alert.alert(error.message)
            });
    };

    const handleLogin = async () => {
        if (email === '' || password === '') {
            Alert.alert('Validation Error', 'Please enter both email and password');
            return;
        }

        auth()
            .signInWithEmailAndPassword(email, password)
            .then(async () => {
                console.log('User signed in!');

                // Store email in AsyncStorage
                await AsyncStorage.setItem('userEmail', email);
                
                // Fetch the user's role from Firestore
                const userQuerySnapshot = await firestore().collection('users')
                    .where("email", "==", email)
                    .get();

                // Extract the role from Firestore query result
                let userRole = null;
                userQuerySnapshot.forEach(doc => {
                    userRole = doc.data().role; // Assuming each document has a 'role' field
                });

                // Store the role in AsyncStorage
                await AsyncStorage.setItem('userRole', userRole);

                // Navigate based on user role
                if (userRole === 'Tutor') {
                    navigation.navigate('TutorHome');
                } else {
                    navigation.navigate('LearnerHome');
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
        <ScrollView style={styles.container}>
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

            <TouchableOpacity onPress={ForgotPass}>
                <Text style={styles.forgotPassword}>Forgot your password?</Text>
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
        </ScrollView>
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
    forgotPassword: {
        padding: scale(2),
        textAlign: 'center',
        color: '#5DB075',
        marginTop: scale(2),
        fontSize: 16,
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
        paddingVertical: moderateVerticalScale(10),
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
