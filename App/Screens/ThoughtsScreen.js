import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions } from 'react-native';
import { material } from 'react-native-typography';
import Feed from '../Components/Feed';
import GLOBAL from './../global.js';

var { height, width } = Dimensions.get('window');

var homeScreenBackgroundColor = () => {
    console.log(GLOBAL.mood=='EXCITED');
    if (GLOBAL.mood == 'BORED') {
        return "#FAC474";
    } else if (GLOBAL.mood == 'EXICTED') {
        return '#F291C7';
    } else if (GLOBAL.mood == 'CONTENT') {
        return '#F8DD53';
    } else if (GLOBAL.mood == 'STRESSED') {
        return '#8EDA80';
    } else {
        return '#79A2F1';
    }
}

const accentColor = () => {
    return "#003498";
}

const styles = StyleSheet.create({
    heading: {
        fontFamily: 'Lato-Black',
        fontSize: 22,
        textAlign: "center"
    }
})

export default class HomeScreen extends React.Component {

    static navigationOptions = ({ navigation }) => {
        const params = navigation.state.params || {};

        return {
            headerTitle: (
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={styles.heading}>Team Thoughts {GLOBAL.mood}</Text>
                </View>
            ),
            headerStyle: {
                backgroundColor: homeScreenBackgroundColor(),
                borderBottomWidth: 0,
                height: 55,
            }
        };
    };


    render() {
        return (null);
    }
}
