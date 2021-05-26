import React, { useState } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { useMutation } from "@apollo/client";
import { CREATE_IMAGE } from '../queries/content.queries.js';
import Button from './Button';

export default function Upload(props) {
    const [image, setImage] = useState();
    const uriData = props.props;
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
    if(props.props) {
    console.log('propsUpload', uriData);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.message}>UPLOAD</Text>
            <Button onPress={() => Upload({ variables: {image: `${uriData}`, folder: 'upload', publicId: 'testName3'}})}>Upload</Button>
        </View>
    )
}

