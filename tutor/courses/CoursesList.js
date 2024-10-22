import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { moderateScale, verticalScale } from 'react-native-size-matters';
import { TEXT_COLOR, WHITE } from '../../utils/Colors';
import { useNavigation } from '@react-navigation/native';

const CoursesList = ({ item, role }) => {
  const navigation = useNavigation();
  const nav = role;

  return (
    nav === 'tutor' ? (
      <TouchableOpacity
        style={styles.container}
        onPress={() => navigation.navigate('CourseView', { item })}
      >
        <Image source={{ uri: item.bannerImage }} style={{ width: '100%', height: '65%' }} />

        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.price}>{item.price} PKR</Text>
      </TouchableOpacity>
    ) : (
      <View style={styles.container}>
        <Image source={{ uri: item.bannerImage }} style={{ width: '100%', height: '65%' }} />

        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.price}>{item.price} PKR</Text>
      </View>
    )
  );
};

export default CoursesList;

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    marginTop: moderateScale(8),
    paddingBottom: moderateScale(5),
    width: '90%',
    height: verticalScale(250),
    backgroundColor: WHITE,
    elevation: 5,
    justifyContent: 'center',
  },
  title: {
    fontWeight: '500',
    color: TEXT_COLOR,
    fontSize: moderateScale(17),
    margin: moderateScale(5),
  },
  description: {
    color: TEXT_COLOR,
    fontSize: moderateScale(12),
    marginLeft: moderateScale(5),
    margin: moderateScale(2),
  },
  price: {
    color: 'green',
    fontSize: moderateScale(15),
    marginLeft: moderateScale(5),
    margin: moderateScale(2),
  },
});
