import {View, Text, StyleSheet, Image, Button} from 'react-native';
import React from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {moderateVerticalScale, scale} from 'react-native-size-matters';
import {verticalScale} from 'react-native-size-matters';
import {TEXT_COLOR} from '../../utils/Colors';
import BorderButton from '../../components/BorderButton';

const CourseView = () => {
  const route = useRoute();
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image
        source={{uri: route.params.item.bannerImage}}
        style={{width: '100%', height: verticalScale(200)}}
      />
      <Text style={[styles.txt,{fontSize:scale(25), fontWeight:'800',textDecorationLine:'underline'}]}>{route.params.item.title}</Text>
      <Text style={[styles.txt,{fontSize:scale(15)}]}>{route.params.item.description}</Text>
      <BorderButton
        title={'Add Chapter'}
        onClick={() => navigation.navigate('AddChapter')}
      />
    </View>
  );
};
export default CourseView;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  txt: {
    fontSize: scale(15),
    color: TEXT_COLOR,
    padding: scale(2),marginLeft:scale(15)
  },
});
