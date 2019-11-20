import React from 'react';
import { StyleSheet, Text, View, Alert, TouchableOpacity, Image, Dimensions } from 'react-native';
import CircularSlider from 'react-circular-slider-bar';

const homeScreenBackgroundColor = () => {
  return "#95B3ED";
}

const accentColor = () => {
  return "#003498";
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 68,
    paddingVertical: 21,
    opacity: 0.8,
    borderRadius: 214,
    width: 220,
    height: 63,
  },
  buttonText: {
    fontFamily: 'Lato-Black',
    fontSize: 20,
    lineHeight: 24,
    textAlign: "center"
  }
})

export default class CheckInScreen extends React.Component {

  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};

    return {
      headerStyle: {
        backgroundColor: homeScreenBackgroundColor(),
        borderBottomWidth: 0,
      }
    };
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: homeScreenBackgroundColor() }}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('HomeScreen')}
        >
          <Text style={styles.buttonText}> Check In </Text>
        </TouchableOpacity>
      </View>
    )
  };
}

