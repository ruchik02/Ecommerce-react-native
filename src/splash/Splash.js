import {ImageBackground, Platform, StyleSheet, Text} from 'react-native';
import React from 'react';
import Image1 from '../assets/1.jpg';

const Splash = () => {
  return (
    <ImageBackground
      source={Image1}
      resizeMode="cover"
      style={styles.container}>
      <Text style={styles.imageText}>Ecommerce App </Text>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  imageText: {
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold',
    marginTop: Platform.OS === 'ios' ? 10 : 0,
  },
});

export default Splash;
