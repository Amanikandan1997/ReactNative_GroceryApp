import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

const WelcomeScreen = () => {
     const navigate=useNavigation()
    useEffect (()=>{
       setTimeout(()=>{
       navigate.replace("login")
       },3000)
    },[])
  return (
    <View style={{backgroundColor:"white", padding:50, flex:1,justifyContent:"center", alignItems:"center"}}>
   
        <Image source={require("../../assets/kumari.png") } style={{height:120, width:197}}/>

 
    </View>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({})