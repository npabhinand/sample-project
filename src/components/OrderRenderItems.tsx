import React, { useState, useCallback } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, Pressable, Alert } from 'react-native';
import Swipeable from 'react-native-gesture-handler/ReanimatedSwipeable';
import { trashIcon } from '../assets/icons';
import { HEIGHT, WIDTH } from '../global/dimensions';

interface OrderProps {
    item?: any;
    onCardPress?: () => void;
    isSelected?: boolean;
    isButtonView?: boolean;
    handleDelete?: () => void;
}

const OrderRenderItems: React.FC<OrderProps> = ({ handleDelete, item, isSelected, isButtonView }) => {
    const [counter, setCounter] = useState(1);

    const handleIncrease = useCallback(() => {
        setCounter((prevCounter) => prevCounter + 1);
    }, []);

    const handleDecrease = useCallback(() => {
        setCounter((prevCounter) => (prevCounter > 1 ? prevCounter - 1 : prevCounter));
    }, []);

    const renderRightActions = () => {

        return (
            <View style={styles.rightActionWrapper} >
                <Pressable>
                    <Image source={trashIcon} />
                </Pressable>

            </View>
        );
    };

    const onSwipeableWillClose = () => {
        if (handleDelete) {
            handleDelete();
            Alert.alert('Item successfully removed');
        }
    };
    return (
        <Swipeable renderRightActions={renderRightActions} friction={1} rightThreshold={WIDTH * 0.8} onSwipeableWillClose={onSwipeableWillClose} >
            <TouchableOpacity
                style={[styles.orderItems, isSelected && styles.selectedCard]}
            // onPress={() => onCardPress && onCardPress()}
            >
                <Image source={item.imgURL} style={styles.image} />
                <View style={styles.textContainer}>
                    <Text style={styles.orderTitle}>{item.title}</Text>
                    <Text style={styles.orderName}>{item.restaurantName}</Text>
                    <Text style={styles.orderPrice}>$ {item.price}</Text>
                </View>

                {isButtonView ? (
                    <TouchableOpacity style={[styles.processButton, isSelected && styles.selectedButton]}>
                        <Text style={styles.processButtonText}>Process</Text>
                    </TouchableOpacity>
                ) : (
                    <View style={styles.counterContainer}>
                        <TouchableOpacity onPress={handleDecrease} style={styles.reduceButton}>
                            <Text style={styles.reduceText}>-</Text>
                        </TouchableOpacity>
                        <Text>{counter}</Text>
                        <TouchableOpacity onPress={handleIncrease} style={styles.addButton}>
                            <Text style={styles.addText}>+</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </TouchableOpacity>
        </Swipeable>
    );
};

export default OrderRenderItems;

const styles = StyleSheet.create({
    orderItems: {
        width: WIDTH * 0.90,
        height: HEIGHT * 0.12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: HEIGHT * 0.02,
        backgroundColor: '#FFFFFF',
        padding: 10,
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.04,
        shadowRadius: 4,
    },
    selectedCard: {
        backgroundColor: '#F1F1F1',
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 10,
    },
    textContainer: {
        marginLeft: 20,
        gap: 5,
        flex: 1,
    },
    orderTitle: {
        fontWeight: 'bold',
        fontSize: 15,
    },
    orderName: {
        color: '#888',
        fontWeight: '200',
        fontSize: 14,
    },
    orderPrice: {
        fontSize: 19,
        color: '#41CE7E',
        fontWeight: 'bold',
    },
    counterContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
    },
    addButton: {
        backgroundColor: '#41CE7E',
        width: 25,
        height: 25,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    },
    addText: {
        fontSize: 20,
        color: '#fff',
    },
    reduceText: {
        fontSize: 20,
        color: '#41CE7E',
    },
    reduceButton: {
        backgroundColor: '#ECFBF3',
        width: 25,
        height: 25,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    },
    processButton: {
        marginTop: 10,
        backgroundColor: '#41CE7E',
        padding: 10,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    processButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    selectedButton: {
        backgroundColor: '#D9D9D9',
    },
    rightActionWrapper: {
        width: WIDTH * 0.3,
        height: HEIGHT * 0.12,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        marginTop: HEIGHT * 0.02,
        backgroundColor: '#F8AD1E',
        flexDirection: 'row',
    },
});