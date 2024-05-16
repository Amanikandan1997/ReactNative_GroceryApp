import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { responsiveScreenWidth } from 'react-native-responsive-dimensions'

const HomeBanner = () => {
  return (
    <View style={{  flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E3E3E3',
    borderRadius: 40,
    margin:12,
    paddingHorizontal: -133,
    marginHorizontal: -35,
    marginTop: 20,
    width: responsiveScreenWidth(80),}}>
     <Image source={require("../../assets/banner.png") } style={{width:350, borderRadius:12}}/>
    </View>
  )
}

export default HomeBanner

const styles = StyleSheet.create({})