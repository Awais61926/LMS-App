import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { BG_COLOR, TEXT_COLOR, WHITE } from '../utils/Colors';
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function Login() {
    const route = useRoute();
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
        <Image
        source={require('../images/login.jpg')} 
        style={styles.banner}
        />
        <Text style={styles.txt}>
            Create User With 
        </Text>
        <TouchableOpacity style={styles.loginBtn}
        onPress={()=>{
            if (route.params.Screen==='tutor') {
                navigation.navigate('TutorHome');
            
            }
        }}
        >
            <Image source={require('../images/Google.png')} style={styles.loginImg}/>
            <Text style={styles.btnText}>Login With Google</Text>

        </TouchableOpacity>


    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:BG_COLOR
    },
    banner:{
        width:'100%',
        height:moderateVerticalScale(210)
    },
    txt:{
        fontSize:moderateScale(25),
        fontWeight:'700',
        color:TEXT_COLOR,
        alignSelf:'center',
        marginTop:moderateScale(5),
    },
    loginBtn:{
        width:'90%',
        height:moderateVerticalScale(50),
        backgroundColor:WHITE,
        elevation:moderateScale(25),
        alignSelf:'center',
        borderRadius:moderateScale(15),
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        paddingLeft:moderateScale(10),
        paddingRight:moderateScale(10)
    },
    loginImg:{
        width:'10%',
        height:moderateVerticalScale(45),
        
    },
    btnText:{
        marginLeft:moderateScale(10),
        color:TEXT_COLOR,
        fontSize:moderateScale(20)

    }


});