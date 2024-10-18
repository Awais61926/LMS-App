import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { moderateScale, moderateVerticalScale, verticalScale } from 'react-native-size-matters';
import { TEXT_COLOR, WHITE } from '../../utils/Colors';
import { useNavigation } from '@react-navigation/native';
import CourseView from './CourseView';

const CoursesList = ({ item }) => {
  const navigation=useNavigation();
  return (
    <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('CourseView',{
      item:item
    })}>
      <Image source={{uri:item.bannerImage}} style={{ width: '100%', height: '65%' }} />
 
      <Text style={{ fontWeight: 500, color: TEXT_COLOR, fontSize: moderateScale(17), margin: moderateScale(5) }}>
        {item.title}
      </Text>
      <Text style={{ color: TEXT_COLOR, fontSize: moderateScale(12), marginLeft: moderateScale(5), margin: moderateScale(2) }}>
        {item.description} 
      </Text>
      <Text style={{ color: 'green', fontSize: moderateScale(15), marginLeft: moderateScale(5), margin: moderateScale(2) }}>
        {item.price} PKR
      </Text>
    </TouchableOpacity>
  );
};

export default CoursesList;

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    marginTop: moderateScale(8),
    paddingBottom:moderateScale(5),
    width: '90%',
    height: verticalScale(250),
    backgroundColor: WHITE,
    elevation: 5,
    justifyContent: 'center',
  },
});
