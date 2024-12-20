import { StyleSheet, Dimensions, Image } from 'react-native';
import React from 'react';
import { backgroundImage2 } from '../assets/images';

const ChatBackgroundImage = () => {
    return (

        <Image
            source={backgroundImage2}
            style={styles.backgroundImage}
        />
    );
};

export default ChatBackgroundImage;

const HEIGHT = Dimensions.get('screen').height;
const WIDTH = Dimensions.get('screen').width;

const styles = StyleSheet.create({
    backgroundImage: {
        height: HEIGHT * 0.4,
        width: WIDTH,
        opacity: 0.7,
        position: 'absolute',
        resizeMode: 'cover',
        top: 0,
        // Debugging zIndex
        zIndex: -1,
    },
});
