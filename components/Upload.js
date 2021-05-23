import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { useMutation } from "@apollo/client";
import { CREATE_IMAGE } from '../queries/content.queries.js';
import Button from './Button';


export default function Upload(props) {
   
    const uriData = props.localImage;
    const [Upload, {data}] = useMutation(CREATE_IMAGE)

    const styles = StyleSheet.create ({
        container: {
            flex: 1,
            width: '100%',
        },
        message: {
            flex: 1,
            backgroundColor: 'white',
            textAlign: 'center',
        },
    });

    console.log('propsUpload', uriData);

    return (
        <View style={styles.container}>
            <Text style={styles.message}>UPLOAD</Text>
            <Button onPress={ Upload({ variables:{image: "https://picsum.photos/200/300", folder: 'upload', publicId: 'testName2'}})}>Upload</Button>
        </View>
    )
}

