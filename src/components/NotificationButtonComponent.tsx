import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { notificationIcon } from '../assets/icons';

const NotificationButtonComponent = () => {
    return (
        <View>
            <TouchableOpacity style={styles.notificationButton}>
                <Image source={notificationIcon} />
            </TouchableOpacity>
        </View>
    );
};

export default NotificationButtonComponent;

const styles = StyleSheet.create({
    notificationButton: {
        borderRadius: 10,
        backgroundColor: '#fff',
        padding: 10,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        right: 20,
    },
});
