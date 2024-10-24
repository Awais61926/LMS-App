import {View, Text, StyleSheet, Image, Button, FlatList} from 'react-native';
import React, { useEffect, useState } from 'react';
import {useNavigation, useRoute,useIsFocused} from '@react-navigation/native';
import {moderateVerticalScale, scale} from 'react-native-size-matters';
import {verticalScale} from 'react-native-size-matters';
import {TEXT_COLOR} from '../../utils/Colors';
import BorderButton from '../../components/BorderButton';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CourseView = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [Chapter,setChapter]=useState([]);
  const Coursetitle=route.params.item.title;
  const userEmail = AsyncStorage.getItem('userEmail')
  const isFocused = useIsFocused();

  const getChapters=async ()=>{
    const data = await firestore()
    .collection('Chapters')
    .where('email', '==', userEmail)
    .where('Coursetitle', '==', Coursetitle)
    .get();
    console.log(data)
  
      const temp=[];
      (await data).docs.forEach(item=>{
          temp.push({...item.data()});
        });
        setChapter(temp);
        
    }
    useEffect(()=>{
      getChapters();
  
  
  },[isFocused])
  
  
  return (
    <View style={styles.container}>
    <View>
    <Image
        source={{uri: route.params.item.bannerImage}}
        style={{width: '100%', height: verticalScale(200)}}
      />
      <Text style={[styles.txt,{fontSize:scale(25), fontWeight:'800',textDecorationLine:'underline'}]}>{route.params.item.title}</Text>
      <Text style={[styles.txt,{fontSize:scale(15)}]}>{route.params.item.description}</Text>
      <BorderButton
        title={'Add Chapter'}
        onClick={() => navigation.navigate('AddChapter',{Coursetitle})}
      />
    </View>
    <FlatList data={Chapter}
     renderItem={({ item, index }) => {
        return (
            <View style={{backgroundColor:'red', width:'90%', height:moderateVerticalScale(40)}}>
                <Text style={{color:TEXT_COLOR, fontSize:scale(25)}}>
                    {item.title}
                </Text>

            </View>
        );
    }}
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
