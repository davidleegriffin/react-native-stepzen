import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Platform, ScrollView, ImageBackground, Image } from 'react-native';
import Button from '../components/Button';
import Gallery from '../components/Gallery';
import Upload from '../components/Upload';
import { useQuery } from "@apollo/react-hooks";
import { GET_IMAGES } from "../queries/content.queries.js";
import IMAGE from '../assets/Starsinthesky.jpeg';
import * as ImagePicker from 'expo-image-picker';

const styles = StyleSheet.create({
  contentContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  bgImage: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  image: {
    margin: 20,
    width: 300,
    height: 300,
  },
  picker: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center', 
  },
});

function Home({ signOut }) {

  const [image, setImage] = useState();

  
  const {
    data,
    loading,
    error
  } = useQuery(GET_IMAGES);
  
  // const {imageData} = useMutation(CREATE_IMAGE);

  const pics = data?.cloudinaryImages;

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
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        // allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

    
    if (!result.cancelled) {
      // console.log('result', result);
      setImage(result.uri);
      // console.log('local-image', image);
    } 
  
  };

  if (loading) return <Text>Almost there...</Text>
  if (error) return <Text>{error.message}</Text>

  return (
    <ImageBackground source={IMAGE} style={styles.bgImage} blurRadius={0}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.picker}>
          <Button onPress={() => pickImage()}>Select Image</Button>
          {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
        </View>
        <Upload props={image} />
        <Gallery props={pics} />
        <Button onPress={() => signOut()}>Sign Out</Button>
      </ScrollView>
    </ImageBackground>
  )
}

export default Home;
