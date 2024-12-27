import { View, Image, StyleSheet, Text, Dimensions, TouchableOpacity, FlatList } from 'react-native';
import React from 'react';
import { bagIcon, locationIcon2, loveIcon, mapPin, starPin } from '../assets/icons';
import { popularMenu } from '../data/commonArray';
import RestaurantRenderItems from './RestaurantRenderItems';
import Testimonials from './Testimonials';

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

const DetailComponent = ({ sectionData }: any) => {

    const renderItem = ({ item }: any) => {
        if (item.type === 'image') {
            return <Image source={item.content} style={styles.imageContainer} />;
        }

        if (item.type === 'details') {
            return (
                <View style={styles.cardContainer}>
                    <View style={styles.row}>
                        <Text style={styles.txt}>Popular</Text>
                        <View style={styles.icons}>
                            <TouchableOpacity style={styles.right}>
                                <Image source={locationIcon2} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image source={loveIcon} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Text style={styles.title}>{item.title}</Text>
                    {(item.description) ? <>
                        <View style={styles.ratings}>
                            <Image source={mapPin} />
                            <Text style={styles.rating}>{item.location}</Text>
                            <Image source={starPin} />
                            <Text style={styles.rating}>{item.rating}</Text>
                        </View>
                        <Text style={styles.description}>{item.description}</Text>
                        <View style={styles.ViewMoreContainer}>
                            <Text style={styles.heading2}>Popular Menu</Text>
                            <TouchableOpacity>
                                <Text style={styles.viewMoreColor}>
                                    View All
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </> : <>
                        <View>
                            <View style={styles.ratings}>
                                <Image source={starPin} />
                                <Text style={styles.rating}>{item.rating}</Text>
                                <Image source={bagIcon} />
                                <Text style={styles.rating}>{item.orders}</Text>
                            </View>
                            <Text style={styles.description}>{item.description1}</Text>

                            {item.recipe.map((list1: any, index: any) => (
                                <View key={index} style={styles.ratings}>
                                    <Text style={{ marginRight: 10 }}>•</Text>
                                    <Text>{list1}</Text>
                                </View>
                            ))}


                            <Text style={styles.description}>{item.description2}</Text>
                        </View>
                    </>
                    }
                </View>

            );
        }

        if (item.type === 'popularMenu') {
            return (
                <FlatList
                    data={popularMenu}
                    horizontal
                    renderItem={({ item }) => <RestaurantRenderItems item={item} />}
                    keyExtractor={(item, index) => index.toString()}
                    showsHorizontalScrollIndicator={false}
                    style={{ backgroundColor: 'white' }}
                />
            );
        }

        if (item.type === 'testimonials') {
            return <Testimonials />;
        }

        return null;
    };

    return (
        <FlatList
            data={sectionData}
            renderItem={renderItem}
            keyExtractor={(item) => item.key}
            showsVerticalScrollIndicator={false}
        />
    );
};

export default DetailComponent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageContainer: {
        width: WIDTH,
        height: HEIGHT * 0.5,
        resizeMode: 'cover',
    },
    cardContainer: {
        backgroundColor: '#fff',
        marginTop: HEIGHT * -0.15,
        borderTopRightRadius: WIDTH * 0.1,
        borderTopLeftRadius: WIDTH * 0.1,
        padding: 25,
        zIndex: 1,
    },
    right: {
        marginRight: WIDTH * 0.02
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    ratings: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: HEIGHT * 0.01,
    },
    txt: {
        marginTop: 10,
        color: '#3FC87C',
        backgroundColor: '#EBFAF2',
        padding: 12,
        borderRadius: 20,
    },
    icons: {
        right: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 31,
        marginTop: HEIGHT * 0.02,
        marginBottom: HEIGHT * 0.02,
    },
    rating: {
        color: '#C8C8C8',
        marginLeft: WIDTH * 0.02,
        marginRight: WIDTH * 0.05,
    },
    description: {
        marginTop: HEIGHT * 0.02,
        fontWeight: '300',
    },
    ViewMoreContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: HEIGHT * 0.03,
    },
    heading2: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    viewMoreColor: {
        color: '#FF7C32',
    },
});
