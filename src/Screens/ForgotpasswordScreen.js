import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { auth } from '../../FirebaseConfig'; // Import Firebase authentication module
import { useNavigation } from '@react-navigation/native';

const ForgotPasswordScreen = ({ navigation }) => {
  const usenavigation = useNavigation();
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const sendOTP = () => {
    // Clear previous error message
    setErrorMessage('');

    // Send OTP logic
    auth.sendPasswordResetEmail(email)
      .then(() => {
        // Navigate to success or confirmation screen
        // You may want to inform the user that an email has been sent
        // and navigate them back to the login screen or another appropriate screen
        navigation.navigate('Login');
      })
      .catch(error => {
        // Handle error
        setErrorMessage(error.message);
      });
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor:"white"}}>
          {/* Logo */}
<Image source={require("../../assets/kumari.png") } style={ {
    height:100, 
    width:180,
     
 alignItems:"center",
       justifyContent:"center"
       }}/>
       {/* logo end */}
      <Text>Enter your email to reset password</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Enter your email"
        style={{ borderColor: "#E3E3E3", width: 280, height: 40, borderWidth: 1, borderRadius: 6, marginVertical: 10, paddingHorizontal: 10 }}
      />
      {errorMessage ? <Text style={{ color: 'red' }}>{errorMessage}</Text> : null}
      <TouchableOpacity onPress={sendOTP} style={{ backgroundColor: "#32cd32", padding: 10, borderRadius: 6, marginTop: 10 }}>
        <Text style={{ color: "#fff", fontWeight: "bold" }}>Send OTP</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=> usenavigation.navigate('login')} style={{ backgroundColor: "#32cd32", padding: 10, borderRadius: 6, marginTop: 10 }}>
        <Text style={{ color: "#fff", fontWeight: "bold" }}>Back To Login</Text>
      </TouchableOpacity>
    </View>
  );
}

export default ForgotPasswordScreen;
