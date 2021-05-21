import React, { useState }  from 'react';
import {View, Text, StyleSheet} from 'react-native';

function Upload(props) {
    const styles = StyleSheet.create ({
        container: {
            flex: 1,
        },
        message: {
            flex: 1,
        },
    });

    const [localImage, setLocalImage] = useState();

    console.log('propsGallery', props.localImage);

    return (
        <View style={styles.container}>
            <Text>UPLOAD</Text>
        </View>
    )
}

export default Upload;