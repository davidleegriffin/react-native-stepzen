import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import IMAGE from '../assets/star-wars.gif';

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    // objectFit: 'center',
  },
});

export default function BackgroundImage({ children }) {
  return (
    <ImageBackground source={IMAGE} style={styles.image}>
      {children}
    </ImageBackground>
  );
}
