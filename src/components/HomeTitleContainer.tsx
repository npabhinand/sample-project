import { View, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';
import React, { useEffect, useState } from 'react';
import BackgroundImage from './BackgroundImage';
import TitleComponent from './TitleComponent';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { filterIcon, notificationIcon, searchIcon } from '../assets/icons';
import { HEIGHT, WIDTH } from '../global/dimensions';
import { RootStackParamList } from '../navigation/AppNavigator';

interface filterProps {
    isFilterButton?: boolean;
    data?: any[];
    sendSearchData: (filteredData: any[]) => void;
}

const HomeTitleContainer: React.FC<filterProps> = ({ isFilterButton, data, sendSearchData }) => {
    const navigation = useNavigation<NavigationProp<RootStackParamList, 'NotificationScreen', 'FilterScreen'>>();
    const [searchText, onChangeSearch] = useState('');
    const [filteredData, setFilteredData] = useState(data || []);

    useEffect(() => {
        if (data) {
            const filtered = data.filter(item =>
                item.title.toLowerCase().includes(searchText.toLowerCase()),
            );
            setFilteredData(filtered);
        }
    }, [searchText, data]);

    useEffect(() => {
        if (sendSearchData) {
            sendSearchData(filteredData);
        }
    }, [filteredData, sendSearchData]);
    return (
        <View>
            <BackgroundImage />
            <View style={styles.titleRow}>
                <TitleComponent title1="Find Your" title2="Favorite Food" size={31} />
                <TouchableOpacity style={styles.notificationButton} onPress={() => { navigation.navigate('NotificationScreen'); }}>
                    <Image source={notificationIcon} />
                </TouchableOpacity>
            </View>

            <View style={styles.searchRow}>
                {!(isFilterButton) ? <>
                    <View style={styles.updatedContainer}>
                        <Image style={styles.searchIcon} source={searchIcon} />
                        <TextInput
                            style={isFilterButton ? styles.input : styles.inputUpdated}
                            placeholder="What do you want to order?"
                            placeholderTextColor={'#F2C3A1'}
                        />
                    </View>
                </> : <>
                    <View style={styles.searchContainer}>
                        <Image style={styles.searchIcon} source={searchIcon} />
                        <TextInput
                            style={styles.input}
                            placeholder=" What do you want to order?"
                            placeholderTextColor={'#F2C3A1'}
                            onChangeText={newText => onChangeSearch(newText)}
                        />
                    </View>
                    <TouchableOpacity style={styles.filterButton} onPress={() => navigation.navigate('FilterScreen')}>
                        <Image source={filterIcon} />
                    </TouchableOpacity>
                </>}

            </View>
        </View>
    );
};

export default HomeTitleContainer;

const styles = StyleSheet.create({
    notificationButton: {
        borderRadius: WIDTH * 0.04,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width: WIDTH * 0.12,
        height: WIDTH * 0.12,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.02,
        shadowRadius: 4,
        marginRight: WIDTH * 0.05,
    },
    titleRow: {
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: HEIGHT * 0.01,
    },
    searchRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: WIDTH * 0.03,
        marginBottom: HEIGHT * 0.01,
        zIndex: 1,
        gap: WIDTH * 0.03,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
        backgroundColor: '#FEF6ED',
        borderRadius: 15,
    },
    updatedContainer: {
        alignItems: 'center',
        backgroundColor: '#FEF6ED',
        borderRadius: 15,
        justifyContent: 'center',
    },
    inputUpdated: {
        width: WIDTH * 0.72,
        height: HEIGHT * 0.07,
        marginLeft: WIDTH * 0.15,
        marginRight: WIDTH * 0.01,
    },
    input: {
        width: WIDTH * 0.55,
        height: HEIGHT * 0.07,
        marginLeft: WIDTH * 0.15,
    },
    searchIcon: {
        position: 'absolute',
        left: 20,
        top: '50%',
        transform: [{ translateY: -12 }],
        width: 24,
        height: 24,
    },
    filterButton: {
        backgroundColor: '#FDF5EB',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: HEIGHT * 0.02,
        height: HEIGHT * 0.07,
        width: HEIGHT * 0.065,
    },
});
