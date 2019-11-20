import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions } from 'react-native';
import { material } from 'react-native-typography';
import Feed from '../Components/Feed';
import Home from '../Screens/HomeScreen';

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
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={material.title}>TASKS</Text>
        </View>
      ),
      headerStyle: {
        backgroundColor: homeScreenBackgroundColor(),
        borderBottomWidth: 0,
        height: 35,
      }
    };
  };


    render() {
        return (
          <Text style={TasksStyles.displayText}>Check back soon.</Text>
        );
    }
}

const TasksStyles = StyleSheet.create({
  displayText: {
    flex: 1,
    fontSize: 40,
    fontStyle: 'italic',
    fontWeight: '200',
    color: 'black',
    padding: '15%',
    justifyContent: 'center',
  },
});
