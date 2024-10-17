import { View, Text, Modal, ActivityIndicator } from 'react-native'
import React from 'react'
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters'
import { WHITE } from '../utils/Colors'

export default function Loader({visible}) {
  return (
    <Modal transparent visible={visible}>
        <View style={{flex:1, backgroundColor:'rgba(0,0,0,0.5)', justifyContent:'center', alignItems:'center'}}>
            <View style={{width:moderateScale(50), height:moderateVerticalScale(50),  justifyContent:'center', alignItems:'center'}}>
                <ActivityIndicator size={'xxlarge'}/>

            </View>

        </View>

    </Modal>
  )
}