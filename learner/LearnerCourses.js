import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {moderateScale, moderateVerticalScale, scale, verticalScale} from 'react-native-size-matters';
import {TEXT_COLOR, WHITE} from '../utils/Colors';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {firebase} from '@react-native-firebase/auth';

const LearnerCourses = ({item}) => {
  const [liked, setliked] = useState(false);
  const navigation = useNavigation();
  //   const addlike=()=>{
  //     firebase().collection('usercourses').add(
  //         {

  //         }
  //     )

  //   }

  return (
    <>
      <View style={styles.iconContainer}>
        
         <View style={styles.optionsBackgroundWhite}>        
        <Icon name="ellipsis-v" size={27} color='black' style={{zIndex: 1}} />
                </View>
      </View>

      <TouchableOpacity
        style={styles.container}
        onPress={() => navigation.navigate('CourseView', {item})}>
        <Image source={{uri: item.bannerImage}} style={styles.image} />

        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.price}>{item.price} PKR</Text>
      </TouchableOpacity>
    </>
  );
};

export default LearnerCourses;

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
    borderRadius: 10, // Add slight rounding to the card
  },
  image: {
    width: '100%',
    height: '65%',
    borderRadius: 10, // Apply rounding to match the container
  },
  iconContainer: {
    position: 'absolute',
    zIndex: 1,
    top: scale(10),
    right: scale(15),
  },
  optionsBackgroundWhite: {
    justifyContent:'center',
    alignItems:'center',
    width:moderateScale(30),
    height:moderateVerticalScale(30),

    backgroundColor: WHITE, 
    top:scale(8),
    right:scale(7), 
    borderRadius: scale(20),
    elevation: 5, 
  },
  hearticon: {
    // You can remove additional styling here; it's managed by the background view.
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
