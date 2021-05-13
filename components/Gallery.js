import React from 'react';
import {  StyleSheet, Image } from 'react-native';

function Gallery({props}) {
    
    console.log('props', props)
    const styles = StyleSheet.create ({
        image: {
            flex: 1,
            width: 300,
            height: 300,
            margin: 10,
        }
    });

    return (
        <>
        {Object.values(props).map((pic, index) => {
            return (
                <Image
                    style={styles.image}
                    source={{uri: `${pic.url}`}}
                    key={pic.assetId}
                >
                </Image>
            
            
            )}
        )}
        </>
    )}
        

export default Gallery;