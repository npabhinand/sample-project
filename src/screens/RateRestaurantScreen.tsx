import React from 'react';
import ChatBackgroundImage from '../components/ChatBackgroundImage';
import { rateFood } from '../assets/images';

import RatingComponent from '../components/RatingComponent';
import { StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import { selectColorTheme } from '../reducers/colorThemeSlice';

const RateRestaurantScreen = () => {
    const currentTheme = useSelector(selectColorTheme);
    return (
        <View style={[styles.container, { backgroundColor: currentTheme.themeColor }]}>
            <ChatBackgroundImage />
            <RatingComponent description1="Enjoy Your Meal" description2="Please rate your Restaurant" navigate="VoucherPromoScreen" image={rateFood} />
        </View>
    );
};

export default RateRestaurantScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
