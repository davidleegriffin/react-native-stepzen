import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, ImageBackground } from 'react-native';
import Button from '../components/Button';
import Gallery from '../components/Gallery';
import { useQuery } from "@apollo/react-hooks"
import { GET_IMAGES } from "../queries/content.queries.js"
import IMAGE from '../assets/Starsinthesky.jpeg';

const styles = StyleSheet.create({
  contentContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    // scrollEnabled: true,
  },
  bgImage: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    // objectFit: 'center',
  },
  image: {
    margin: 20,
    width: 300,
    height: 300,
  },
});

export default function Home({ signOut }) {

  const {
    data,
    loading,
    error
  } = useQuery(GET_IMAGES)

const pics = data?.cloudinaryImages
pics?.map((pic) => {
  // console.log('datastuff', pic.url);
});

if (loading) return <Text>Almost there...</Text>
if (error) return <Text>{error.message}</Text>

  return (
    <ImageBackground source={IMAGE} style={styles.bgImage} blurRadius={0}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Gallery props={pics}/>
        <Button onPress={() => signOut()}>Sign Out</Button>
      </ScrollView>
    </ImageBackground>
  )
}


