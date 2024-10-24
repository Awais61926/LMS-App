import { View, Text, Image } from 'react-native'
import React from 'react'
import { TEXT_COLOR } from '../utils/Colors'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LearnerProfile from './LearnerProfile';
import Home from './Home';
import ActiveCourses from './Search';
import Icon from 'react-native-vector-icons/FontAwesome';
import Search from './Search';
import Fav from './Fav';
import Cart from './Cart';
const LearnerHome=()=> {
  const Bottom = createBottomTabNavigator();
  return (
    <Bottom.Navigator screenOptions={{tabBarStyle:{height:60}}}>
      <Bottom.Screen name="Home" component={Home} options={{
        tabBarIcon:({size})=>{
          // return <Image source={require('../images/courses.png')} style={{width:size+15,height:size+15}}/>
          return <Icon name="home" size={30} color='black' />

 
        }
      }} />
      <Bottom.Screen name="Search" component={Search} options={{
      tabBarIcon:()=>{
        return <Icon name="search" size={30} color='black' />
      }
    }} />
          <Bottom.Screen name="Favourite" component={Fav} options={{
      tabBarIcon:()=>{
        return <Icon name="star" size={30} color='black' />
      },
      tabBarLabel:'Favourite'
      
    }} />
     <Bottom.Screen name="Cart" component={Cart} options={{
      tabBarIcon:()=>{
        return <Icon name="shopping-cart" size={30} color='black' />
      },
      tabBarLabel:'Cart'
      
    }} />



    <Bottom.Screen name="Profile" component={LearnerProfile} options={{
      tabBarIcon:()=>{
        return <Icon name="user" size={30} color='black' />
      },
      tabBarLabel:'Profile'
    }} />
   
  </Bottom.Navigator>
  )
}
export default LearnerHome


