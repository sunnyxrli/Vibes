import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions } from 'react-native';
import { material } from 'react-native-typography';
import Feed from '../Components/Feed';

var { height, width } = Dimensions.get('window');

const homeScreenBackgroundColor = () => {
    return "#95B3ED";
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
                    <Text style={styles.heading}>Team Thoughts</Text>
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
