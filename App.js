import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/Screens/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './src/Screens/WelcomeScreen';
import LoginScreen from './src/Screens/LoginScreen';
import RegisterScreen from './src/Screens/RegisterScreen';
import CartScreen from './src/Screens/CartScreen';
import Terms from './src/Screens/Terms';
import ForgotpasswordScreen from './src/Screens/ForgotpasswordScreen';
import ViewScreen from './src/Components/ViewScreen';



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator    
                     initialRouteName='welcome'
    
                        screenOptions={{
                                     headerShown:false
                                    }}>
      <Stack.Screen name="welcome" component={WelcomeScreen} />
      <Stack.Screen name="login" component={LoginScreen} />
      <Stack.Screen name="reg" component={RegisterScreen} />
      <Stack.Screen name="cart" component={CartScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="term" component={Terms} />
      <Stack.Screen name="pass" component={ForgotpasswordScreen} />
      <Stack.Screen name="ViewScreen" component={ViewScreen} />
    </Stack.Navigator>
  </NavigationContainer>

  );
}

const styles = StyleSheet.create({
 
});
