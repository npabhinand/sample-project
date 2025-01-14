import React from 'react';
import { Image, Pressable, StyleSheet, Text } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { HEIGHT, WIDTH } from '../common/dimensions';
import { RootStackParamList } from '../navigation/AppNavigator';
import { selectColorTheme } from '../reducers/colorThemeSlice';
import { useSelector } from 'react-redux';


interface renderProps {
    item: {
        imgURL: any,
        name?: string,
        time?: number,
        price?: number,
        title: string,

    },
    navigate?: string
}


const RestaurantRenderItems: React.FC<renderProps> = (props) => {

    const { item, navigate } = props;
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const currentTheme = useSelector(selectColorTheme);

    return (
        <Pressable style={[styles.card, { backgroundColor: currentTheme.lightWhite }]} onPress={() => {
            navigation.navigate(navigate, {
                section: { item },
            });
        }}>
            <Image style={styles.image} source={item.imgURL} />
            <Text style={[styles.name, { color: currentTheme.defaultTextColor }]}>
                {item.name ? item.name : item.title}
            </Text>

            <Text style={styles.time}>
                {item.time ? `${item.time} Mins` : `${item.price}$`}
            </Text>
        </Pressable>

    );
}

export default RestaurantRenderItems;

const styles = StyleSheet.create({
    card: {
        width: WIDTH * 0.4,
        height: HEIGHT * 0.22,
        marginBottom: 15,
        backgroundColor: '#FFFFFF',
        padding: 10,
        borderRadius: 20,
        // alignSelf: 'center',
        // shadowColor: '#F6F7FE',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.02,
        shadowRadius: 4,
        elevation: 5,
        marginLeft: WIDTH * 0.06,
    },
    image: {
        // width: '100%',
        height: HEIGHT * 0.1,
        alignSelf: 'center',
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        marginVertical: 5,
        textAlign: 'center',
        marginTop: HEIGHT * 0.02,
    },
    time: {
        fontSize: 14,
        color: '#888',
        textAlign: 'center',
    },
});

