import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, ScrollView, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const Terms = () => {
  const navigation = useNavigation();
  return (
    <ScrollView contentContainerStyle={styles.container}>
       <Image source={require("../../assets/kumari.png")} style={{ height: 80, width: 130, marginLeft: 100 }} />
      <Text style={styles.heading}>Terms and Conditions</Text>
      <Text style={{fontWeight:"bold"}}>
        Welcome to kumari PazhamuthirNilayam!
      </Text>
      <Text style={styles.paragraph}>
        These terms and conditions outline the rules and regulations for the
        use of Manikandan UKI's mobile application, [ kumari PazhamuthirNilayam
        App], located at [App Store/Google Play Store ].
      </Text>
      <Text style={styles.paragraph}>
        By accessing this mobile application, we assume you accept these terms
        and conditions. Do not continue to use kumari PazhamuthirNilayam if you
        do not agree to take all of the terms and conditions stated on this
        page.
      </Text>

      <TouchableOpacity  onPress={()=> navigation.navigate('login')}style={{ backgroundColor: "#32cd32", padding: 10, borderRadius: 6, marginTop: 10 }}>
        <Text style={{ color: "#fff", fontWeight: "bold", textAlign:"center"}}>I Have accept the term and conditions</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor:"white",
    height:"100%",
    paddingHorizontal: 20,
    paddingVertical: 30,
    paddingTop:200
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign:"center"
  },
  paragraph: {
    marginBottom: 15,
  },
});

export default Terms;
