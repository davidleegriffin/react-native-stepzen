import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { useMutation } from "@apollo/client";
import { CREATE_IMAGE } from '../queries/content.queries.js';
import Button from './Button';


function Upload(props) {
   
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

    console.log('propsUpload', props.localImage);

    return (
        <View style={styles.container}>
            <Text style={styles.message}>UPLOAD</Text>
            <Button>Upload</Button>
        </View>
    )
}

export default Upload;