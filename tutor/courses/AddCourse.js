import { View, Text, StyleSheet, TouchableOpacity, Image, Switch } from 'react-native'; 
import React, { useState } from 'react';
import CustomTextInput from '../../components/CustomTextInput';
import { useNavigation } from '@react-navigation/native';
import { moderateScale, moderateVerticalScale, scale, verticalScale } from 'react-native-size-matters';
import { ScrollView } from 'react-native-gesture-handler';
import BgButton from '../../components/BgButton';
import { TEXT_COLOR, THEME_COLOR, WHITE } from '../../utils/Colors';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Add AsyncStorage import
import { launchCamera } from 'react-native-image-picker';
import Loader from '../../components/Loader';

const AddCourse = () => {

    const[Loading,setLoading]= useState(false);
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [Disc, setDisc] = useState('');
    const [isActive, setIsActive] = useState(true);
    const [bannerImage, setBannerImage] = useState(null);
    const navigation = useNavigation();

    const addBanner = async () => {
        const res = await launchCamera({ mediaType: 'photo' });
        if (!res.didCancel) {
            setBannerImage(res);
        }
    };
    const uploadCourse = async () => {
        try {
            setLoading(true)
            // Generate random user ID
            const userID = parseInt(Math.random() * 10000); 
            console.log("Generated user ID is:", userID);
    
            // Store userID in AsyncStorage
            await AsyncStorage.setItem('userID', userID.toString());
    
            // Retrieve user email from AsyncStorage
            const userEmail = await AsyncStorage.getItem('userEmail');
    
            if (!userEmail) {
                console.log("User email not found in AsyncStorage");
                return;
            }
    
            // Upload the banner image to Firebase Storage
            const reference = storage().ref(bannerImage.assets[0].fileName);
            const pathToFile = bannerImage.assets[0].uri;
            await reference.putFile(pathToFile);
    
            // Get the download URL
            const url = await storage().ref(bannerImage.assets[0].fileName).getDownloadURL();
    
            // Store the course data in Firestore, directly using `userID`
            await firestore().collection('courses').add({
                title: title,
                description: Disc,
                price: price,
                active: isActive,
                email: userEmail,  // Upload email with course data
                bannerImage: url,
                userID: userID.toString(), // Using the generated userID directly
            });
    
            console.log('Course data stored successfully');
            setLoading(false)
            navigation.goBack();
        } catch (error) {
            console.error('Error uploading course:', error);
        }
    };
    
    return (
        <ScrollView style={styles.container}>
            <View></View>
            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                <TouchableOpacity style={styles.banner} onPress={addBanner}>
                    {bannerImage != null ? (
                        <Image source={{ uri: bannerImage.assets[0].uri }} style={{ width: moderateScale(300), height: moderateVerticalScale(200) }} />
                    ) : (
                        <>
                            <Image source={require('../../images/plus2.png')} style={styles.img} />
                            <Text style={{ fontWeight: '800', color: 'black' }}>Select Banner</Text>
                        </>
                    )}
                </TouchableOpacity>
            </View>
            <CustomTextInput placeholder="Enter Course Title" onChangeText={(txt) => setTitle(txt)} />
            <CustomTextInput placeholder="Enter Description" multiline={true} onChangeText={(txt) => setDisc(txt)} />
            <CustomTextInput placeholder="Enter Price in PKR" keyboardType="numeric" onChangeText={(txt) => setPrice(txt)} />

            <View style={styles.switchContainer}>
                <Text style={styles.switchText}>Course is Active</Text>
                <Switch value={isActive} onValueChange={(value) => setIsActive(value)} />
            </View>

            <TouchableOpacity style={styles.btn} onPress={uploadCourse}>
                <Text style={styles.title}>Upload</Text>
            </TouchableOpacity>
            <Loader visible={Loading}/>
        </ScrollView>
    );
};

export default AddCourse;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    banner: {
        width: '90%',
        height: verticalScale(180),
        borderColor: '#9e9e9e',
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    img: {
        width: scale(30),
        height: scale(30),
    },
    switchContainer: {
        alignSelf: 'center',
        width: '90%',
        height: moderateVerticalScale(40),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: moderateScale(10),
    },
    switchText: {
        fontSize: 16,
        fontWeight: '600',
        color: 'black',
    },
    btn: {
        width: '90%',
        height: moderateVerticalScale(50),
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        margin: moderateScale(10),
        borderRadius: moderateScale(10),
        backgroundColor: THEME_COLOR
    },
    title: {
        fontSize: moderateScale(16),
        fontWeight: '700',
        color: TEXT_COLOR
    }
});
