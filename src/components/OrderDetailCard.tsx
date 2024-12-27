import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import React, { useState } from 'react';
import { locationIcon } from '../assets/icons';
import { useNavigation } from '@react-navigation/native';

const HEIGHT = Dimensions.get('screen').height;
const WIDTH = Dimensions.get('screen').width;

interface navigateProps {
    navigate?: string;
    isEdit?: boolean;
}

const OrderDetailCard: React.FC<navigateProps> = ({ navigate, isEdit }) => {
    const [location, setLocation] = useState('4517 Washington Ave. Manchester, Kentucky 39495');
    const navigation = useNavigation();
    const address = [
        {
            name: '4517 Washington Ave. Manchester, Kentucky 39495',
        },
        {
            name: '8502 Preston Rd. Inglewood, Maine 98380',
        },

    ]
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Text style={styles.orderName}>Deliver To</Text>
                <Text onPress={() => { navigation.navigate('EditLocationScreen') }} style={styles.editTxt}>Edit</Text>
            </View>
            <View style={[styles.row, styles.textContainer]}>
                <Image source={locationIcon} />
                {/* <Text style={styles.menuTitle} onPress={() => { navigation.navigate('ChatList') }}>{item.title}</Text> */}
                <Text style={styles.orderTitle}>{location}</Text>
            </View>

        </View>
    );
};


export default OrderDetailCard;

const styles = StyleSheet.create({
    container: {
        width: WIDTH * 0.9,
        height: HEIGHT * 0.15,
        marginBottom: 10,
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        alignSelf: 'center',
        padding: 15,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 10,
        // width: WIDTH * 0.9,
        // height: HEIGHT * 0.1,
    }, editTxt: {
        color: '#47DD86',
        fontSize: 15,
    },
    textContainer: {
        // marginLeft: 20,
        flex: 1,
    },
    orderTitle: {
        fontWeight: '600',
        fontSize: 15,
        margin: 10,
    },
    orderName: {
        color: '#888',
        fontWeight: '200',
        fontSize: 16,
    },
    orderText: {
        fontSize: 22,
        color: '#FEAD1D',
        fontWeight: 'bold',
        right: 15,
    },
});
