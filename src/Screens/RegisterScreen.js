import { Image, StyleSheet, Text, View,TextInput, Pressable,Button, TouchableOpacity, KeyboardAvoidingView, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { authentication, database } from '../../FirebaseConfig'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import ToastManager, { Toast } from 'toastify-react-native'
import { doc, setDoc } from 'firebase/firestore'
import uuid from 'react-native-uuid';



const RegisterScreen = () => {
    const navigation = useNavigation();
    const[userCredential,setUserCredential]=useState({
        username:"",
        email:"",
        password: ""
    })
   const{email,password,username}=userCredential
   

const uid =uuid.v4();
   const userAccount =()=>{
    createUserWithEmailAndPassword(authentication,email,password)
    .then(() => {
      Toast.success('Successfully Register');
      navigation.navigate("login")
      setDoc(doc(database,"users",uid),{
        username:username,
        email:email,
        id:authentication.currentUser.uid
      })
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        Toast.warn('already register email');
      }
  
      if (error.code === 'auth/invalid-email') {
        Toast.warn(' email is invalid!');
      }
  
      
    });
   }

  return (
    
     <SafeAreaView  style={{flex:1,backgroundColor:"white"}}>
             {/* alert message  */}
           <ToastManager />
          
        {/* Logo */}
    <Image source={require("../../assets/kumari.png") } style={ {
        height:100, 
        width:180,
         margin:30,
          marginLeft:97,
           padding:6
           }}/>
           {/* logo end */}

           {/* Headding */}
          
           <KeyboardAvoidingView>
      <View>
        <Text style={{
            fontSize:24,
             color:'black',
              textAlignVertical:'center',
               alignSelf:'center',
                fontWeight:'bold',
                 lineHeight:50,
                   letterSpacing:1,
                       marginTop:20
        }}>SignUp</Text>
        <Text style={{textAlign:"center"}}>Enter Your Credential to Continue</Text>

        {/* Headding End */}

         {/* Text Input and label */}
        <View  style={{flexDirection:"column", justifyContent:"center", alignItems:"center",textAlign:"center", padding:16}}>
        
         <TextInput
        
        value={username}
        onChangeText={(val)=>{
           setUserCredential({...userCredential,username: val})
        }}
         
         placeholder="    Username" style={{borderColor:"#E3E3E3",  width:280, height:40,  borderWidth:3, textAlign:"left", borderRadius:6, padding:6}}/>

        
         <TextInput
            value={email}
            onChangeText={(val)=>{
               setUserCredential({...userCredential,email: val})
            }}
            
          placeholder="    Enter your email"
         
                    
                                            style={{
                                            borderColor:"#E3E3E3",
                                              width:280, height:40,  
                                              borderWidth:3,
                                               textAlign:"left", 
                                               borderRadius:6, 
                                               margin:15,
                                               padding:6
                                               }}
                                               
                                               />
        

       
         <TextInput 
            value={password}
            onChangeText={(val)=>{
               setUserCredential({...userCredential,password: val})
            }}
            
         secureTextEntry={true} placeholder="    Enter your password" style={{borderColor:"#E3E3E3",  width:280, height:40,  borderWidth:3, textAlign:"left", borderRadius:6,padding:6}}/>

        </View>
       <TouchableOpacity  onPress={()=> navigation.navigate('term')}>
        <Text style={{margin:4,marginLeft:40}}>By contuning you agree to our <Text style={{color:"#32cd32",fontWeight:"bold"}}>Terms and condition</Text> </Text>
        </TouchableOpacity>
            <View>
            <TouchableOpacity style={[{backgroundColor:"#32cd32",marginLeft:53}
        ,{marginTop:10,padding:17,width:290,height:50,
         borderRadius:100,alignItems:'center', }]} 
         onPress={userAccount} >
        <Text style={{fontSize:16,color:'#fff', textAlign:"center", height:90, fontWeight:"bold",paddingBottom:10}}>Sign Up</Text>
    </TouchableOpacity>
            </View>
            <View>
            <TouchableOpacity 
        
         onPress={()=> navigation.navigate('login')}>
        <Text style={{fontSize:16,color:"#ff4500", textAlign:"center", height:90, fontWeight:"bold",paddingBottom:10, padding:8}}>Already you have account? <Text style={{color:"#32cd32",fontWeight:"bold"}}>Sign In</Text> </Text>
    </TouchableOpacity>
            </View>
      </View>
      <View style={{flexDirection:"row",textAlign: 'center', justifyContent:"center"}}>
      <Text style={{  fontSize: 12 ,color:"#ff4500",fontWeight:"bold"}}>
  Copyright @ 
</Text><Text style={{ fontSize: 12 ,color:"#32cd32", fontWeight:"bold"}}> Manikandan Uki 1997 - {new Date().getFullYear()}</Text>
</View>
      </KeyboardAvoidingView>
      </SafeAreaView>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({})