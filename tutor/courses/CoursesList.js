import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { moderateScale, moderateVerticalScale, verticalScale } from 'react-native-size-matters';
import { TEXT_COLOR, WHITE } from '../../utils/Colors';

export default function CoursesList() {
  return (
    <View style={styles.container}>
      <Image source={require('../../images/placeholder.jpg')} style={{ width: '100%', height: '50%' }} />
      <Text style={{ fontWeight: 500, color: TEXT_COLOR, fontSize: moderateScale(17), margin: moderateScale(5) }}>React Native</Text>
      <Text style={{ color: TEXT_COLOR, fontSize: moderateScale(12), marginLeft:moderateScale(5), margin:moderateScale(2)}}>React Native ddssasas asasdsdsfdsf ffdffkskfeskgfseg Description   ................................................</Text>
      <Text style={{ color:'green', fontSize: moderateScale(15), marginLeft:moderateScale(5), margin:moderateScale(2)}}>2000 PKR</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    marginTop: moderateScale(8),
    width: '90%',
    height: verticalScale(200),
    backgroundColor: WHITE,
    elevation: 5,
    justifyContent: 'center'

  },

});