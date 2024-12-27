import { View, Text, StyleSheet, Dimensions, ImageBackground, TouchableOpacity } from 'react-native';
import React from 'react';
import { pattern } from '../assets/images';
import { useNavigation } from '@react-navigation/native';

const HEIGHT = Dimensions.get('screen').height;
const WIDTH = Dimensions.get('screen').width;

interface navigateProps {
    navigate?: string;
}

const PriceCard: React.FC<navigateProps> = ({ navigate }) => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            {/* Background image */}
            <ImageBackground source={pattern} style={styles.backgroundImage} resizeMode="cover">
                <View style={styles.subContainer}>
                    <View style={styles.leftContainer}>
                        <Text style={styles.subText}>Sub-Total</Text>
                        <Text style={styles.subText}>Delivery Charge</Text>
                        <Text style={styles.subText}>Discount</Text>
                        <Text style={styles.TotalSubText}>Total</Text>
                    </View>
                    <View style={styles.rightContainer}>
                        <Text style={styles.RightSubText}>120$</Text>
                        <Text style={styles.RightSubText}>10$</Text>
                        <Text style={styles.RightSubText}>20$</Text>
                        <Text style={styles.TotalSubText}>150$</Text>
                    </View>
                </View>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => { navigation.navigate(navigate) }}>
                    <Text style={styles.btnText}>Place My Order</Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    );
};

export default PriceCard;

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        alignSelf: 'center',
        width: WIDTH * 0.9,
        height: HEIGHT * 0.22,
        borderRadius: WIDTH * 0.04,
        // padding: HEIGHT * 0.03,
        // marginBottom: HEIGHT * 0.02,
        backgroundColor: '#43D380',
    },
    backgroundImage: {
        flex: 1,
        justifyContent: 'center',
        borderRadius: 20,
        padding: 10,
    },
    subContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    leftContainer: {

        // marginLeft: WIDTH * 0.0,
    },
    rightContainer: {
        justifyContent: 'flex-end',
    },
    RightSubText: {
        color: '#fff',
        fontSize: 14,
        textAlign: 'right',
    },
    subText: {
        color: '#fff',
        fontSize: 14,
    },
    TotalSubText: {
        marginTop: HEIGHT * 0.02,
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    btn: {
        backgroundColor: '#fff',
        alignSelf: 'center',
        width: WIDTH * 0.8,
        height: HEIGHT * 0.06,
        marginTop: HEIGHT * 0.02,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: HEIGHT * 0.015,
    },
    btnText: {
        color: '#47DD86',
        fontSize: 14,
        fontWeight: 'bold',
    },
});
