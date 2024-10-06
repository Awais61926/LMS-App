import { View, Text, StyleSheet, TouchableOpacity, Image, Switch } from 'react-native'
import React, { useState } from 'react'
import CustomTextInput from '../../components/CustomTextInput';
import { useNavigation } from '@react-navigation/native'
import { moderateScale, moderateVerticalScale, scale, verticalScale } from 'react-native-size-matters';
import { ScrollView } from 'react-native-gesture-handler';
import BgButton from '../../components/BgButton';
import { WHITE } from '../../utils/Colors';

export default function AddCourse() {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [Disc, setDisc] = useState('');
    const [isActive, setIsActive] = useState(true);
    const navigation = useNavigation();

    return (
        <ScrollView style={styles.container}>
            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                <TouchableOpacity style={styles.banner}>
                    <Image source={require('../../images/plus2.png')} style={styles.img} />
                    <Text style={{ fontWeight: '800', color: 'black' }}>Select Banner</Text>
                </TouchableOpacity>
            </View>
            <CustomTextInput placeholder="Enter Course Title" onChangeText={(txt) => {
                setTitle(txt)
            }} />
            <CustomTextInput placeholder="Enter Description" multiline={true} onChangeText={(txt) => {
                setDisc(txt)
            }} />
            <CustomTextInput placeholder="Enter Price in PKR" keyboardType='numeric' onChangeText={(txt) => {
                setPrice(txt)
            }} />
            
            <View style={styles.switchContainer}>
                <Text style={styles.switchText}>Course is Active</Text>
                <Switch
                    value={isActive}
                    onValueChange={(value) => setIsActive(value)}
                />
            </View>
            <BgButton title='Upload Course' color={WHITE}/>
        </ScrollView>
    );
}

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
});
