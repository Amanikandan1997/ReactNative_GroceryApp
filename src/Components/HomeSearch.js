import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; // Importing AntDesign icon library
import { responsiveScreenWidth } from 'react-native-responsive-dimensions';

const HomeSearch = () => {
  return (
    <View style={styles.searchContainer}>
      <AntDesign name="search1" size={24} color="black" style={styles.searchIcon} />
      <TextInput
        placeholder='Search Products'
        style={styles.input}
        placeholderTextColor="#A9A9A9"
      />
    </View>
  );
}

export default HomeSearch;

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E3E3E3',
    borderRadius: 8,
    margin:12,
    paddingHorizontal: 12,
    marginHorizontal: -30,
    marginTop: 20,
    width: responsiveScreenWidth(80),
  },
  searchIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 16,
    color: '#000',
    paddingHorizontal:12
  },
});
