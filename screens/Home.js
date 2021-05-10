import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Button from '../components/Button';
import { useQuery } from "@apollo/react-hooks"
import { GET_IMAGES } from "../queries/content.queries.js"

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center'
  },
  image: {
    flex: 1,
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

const pics = data?.cloudinaryImages[0].publicId
console.log('data', data);

if (loading) return <Text>Almost there...</Text>
if (error) return <Text>{error.message}</Text>

  return (
    <View style={styles.container}>
      <Text style={styles.text}>pics</Text>
      <Image
        style={styles.image}
        source={{
          uri: 'https://res.cloudinary.com/davidleegriffin/image/upload/v1620666779/Luke_f2bpxu.jpg',
        }}
      >
      </Image>
      <Image
        style={styles.image}
        source={{
          uri: 'https://res.cloudinary.com/davidleegriffin/image/upload/v1620666766/C-3PO_sxnzpr.jpg',
        }}
      >
      </Image>
      <Button onPress={() => signOut()}>Sign Out</Button>
    </View>
  )
}
