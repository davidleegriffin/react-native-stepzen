import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Platform, ScrollView, ImageBackground, Image } from 'react-native';
import Button from '../components/Button';
import Gallery from '../components/Gallery';
import { useQuery } from "@apollo/react-hooks";
import { GET_IMAGES } from "../queries/content.queries.js";
import IMAGE from '../assets/Starsinthesky.jpeg';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as ImagePicker from 'expo-image-picker';
import Upload from '../components/Upload';

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

function Home({ signOut }) {

  const [localImage, setLocalImage] = useState();

  
  const {
    data,
    loading,
    error
  } = useQuery(GET_IMAGES);
  
  // const {imageData} = useMutation(CREATE_IMAGE);

const pics = data?.cloudinaryImages

useEffect(() => {
  (async () => {
    if (Platform.OS !== 'web') {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  })();
}, []);

const pickImage = async () => {
  try {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setLocalImage(result.uri);
    } 
  } catch (error) {
    showImageUploadError();
  }
};
console.log('local-image', localImage);

if (loading) return <Text>Almost there...</Text>
if (error) return <Text>{error.message}</Text>

  return (
    <ImageBackground source={IMAGE} style={styles.bgImage} blurRadius={0}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Button onPress={pickImage}>Select Image</Button>
          {localImage && <Image source={{ uri: localImage }} style={{ width: 200, height: 200 }} />}
        </View>
        <Upload props={localImage} />
        <Gallery props={pics} />
        <Button onPress={() => signOut()}>Sign Out</Button>
      </ScrollView>
    </ImageBackground>
  )
}

export default Home;
