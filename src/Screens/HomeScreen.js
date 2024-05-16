import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, KeyboardAvoidingView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import HomeSearch from '../Components/HomeSearch';
import HomeBanner from '../Components/HomeBanner';
import ProductCard from '../Components/ProductScreen'; 
import ProductCard1 from '../Components/GroceryScreen';
import ProductCard2 from '../Components/VegScreen';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = ({ route }) => {
  const { email } = route.params;
  const navigation = useNavigation();
  const [cartCount, setCartCount] = useState(0);

 
  return (
    <ScrollView>
      <KeyboardAvoidingView>
        <View style={{ flex: 1, backgroundColor: "white", padding: 20, paddingTop:60}}>
          <TouchableOpacity  onPress={()=> navigation.navigate('login')} style={{ backgroundColor: 'red', borderRadius: 5, width: 80, height: 30, marginLeft: 240, width: 70 }}>
            <Text style={{ color: 'white', textAlign: "center",padding:4}}>Logout<AntDesign name="logout" size={14} color="white" /></Text>
          </TouchableOpacity>
          <Image source={require("../../assets/kumari.png")} style={{ height: 80, width: 130, marginLeft: 100 }} />
          <View style={{ padding: 0, marginLeft:48 }}>
            <HomeSearch />
          </View>
          <Text style={{ fontWeight: "bold", fontSize: 18, textAlign: "center" }}>Hello, {email}</Text>
          <View style={{ paddingRight: 96 ,marginLeft:38}}>
            <HomeBanner />
          </View>
          <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
            <TouchableOpacity onPress={() => { /* Handle category press */ }}>
              <Image source={{ uri: 'https://w7.pngwing.com/pngs/397/656/png-transparent-shopping-cart-computer-icons-online-shopping-the-grocery-store-name-card-supermarket-vehicle-objects-thumbnail.png' }} style={{ width: 60, height: 60, borderRadius: 30 }} />
              <Text>Grocery</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { /* Handle category press */ }}>
              <Image source={{ uri: 'https://w7.pngwing.com/pngs/102/117/png-transparent-assorted-fruits-display-fruit-fruit-natural-foods-frutti-di-bosco-image-file-formats-thumbnail.png' }} style={{ width: 60, height: 60, borderRadius: 30 }} />
              <Text>Fruits</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { /* Handle category press */ }}>
              <Image source={{ uri: 'https://w7.pngwing.com/pngs/104/656/png-transparent-multicolored-vegetables-with-basket-illustration-vegetable-basket-fruit-vegitable-basket-natural-foods-leaf-vegetable-food-thumbnail.png' }} style={{ width: 60, height: 60, borderRadius: 30 }} />
              <Text>Vegetables</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { /* Handle category press */ }}>
              <Image source={{ uri: 'https://w7.pngwing.com/pngs/471/230/png-transparent-orange-juice-smoothie-apple-juice-hd-juice-three-fruit-shakes-food-strawberries-health-shake-thumbnail.png' }} style={{ width: 60, height: 60, borderRadius: 30 }} />
              <Text>Juice</Text>
            </TouchableOpacity>
          </View>

          {/* Product Cards */}
          <View style={{flexDirection:"row", justifyContent:"space-evenly"}}>
            <Text style={{fontWeight:"bold",fontSize:20, paddingRight:200}}>Grocery</Text>
            <Text style={{color:"limegreen"}}>See all</Text>
          </View>
          <ProductCard1/>
          <View style={{flexDirection:"row", justifyContent:"space-evenly"}}>
            <Text style={{fontWeight:"bold",fontSize:20, paddingRight:200}}>Fruits</Text>
            <Text style={{color:"limegreen"}}>See all</Text>
          </View>
          <ProductCard/>
          <View style={{flexDirection:"row", justifyContent:"space-evenly"}}>
            <Text style={{fontWeight:"bold",fontSize:20, paddingRight:200}}>Vegetables</Text>
            <Text style={{color:"limegreen"}}>See all</Text>
          </View>
          <ProductCard2/>
          {/* Circular category images */}
          
          {/* GIF banner */}
          <Image source={{ uri: 'https://amanikandan1997.github.io/mini-e-commerce/static/media/banner23.65ae92ef3a224da5dbb0.gif' }} style={{ width: '100%', height: 138, marginTop: 20  }} />
          <View style={{flexDirection:"row",textAlign: 'center', justifyContent:"center"}}>
      <Text style={{  fontSize: 12 ,color:"#ff4500",fontWeight:"bold"}}>
  Copyright @ 
</Text><Text style={{ fontSize: 12 ,color:"#32cd32", fontWeight:"bold"}}> Manikandan Uki 1997 - {new Date().getFullYear()}</Text>
</View>
        </View>
      </KeyboardAvoidingView>
      <StatusBar style='dark' />
    </ScrollView>
  );
}

export default HomeScreen;
