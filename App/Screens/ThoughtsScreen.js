import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions } from 'react-native';
import { material } from 'react-native-typography';
import ThoughtsFeed from '../Components/ThoughtsFeed';
import Home from '../Screens/HomeScreen';

var { height, width } = Dimensions.get('window');

var homeScreenBackgroundColor = (mood) => {
  if (mood == 'EXCITED') {
    return '#F291C7'
  } else if (mood == 'CONTENT') {
    return '#FCE781'
  } else if (mood == 'BORED') {
    return '#FEBB58'
  } else if (mood == 'STRESSED') {
    return '#81CE63'
  } else {
    return '#95B3ED'
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
    return {
      headerTitle: (
        <View style={{flexDirection: 'row', flex: 1, justifyContent: "space-evenly", alignItems: "center"}}>
          <Image
            source={require("../Images/write.png")}
            style={{ width: 25, height: 25, opacity: 0}}
          />
          <Image
            source={require("../Images/write.png")}
            style={{ width: 25, height: 25, opacity: 0}}
          />
          <Text style={material.title}>TEAM THOUGHTS</Text>
          <Image
            source={require("../Images/write.png")}
            style={{ width: 25, height: 25, opacity: 0}}
          />
          <TouchableOpacity
          style={{marginRight: 0}}
          onPress={() => {
            this.props.navigation.navigate('ThoughtsScreen', {mood: mood});
          }}>
            <Image
              source={require("../Images/write.png")}
              style={{ width: 25, height: 25, justifyContent: "center"}}
            />
          </TouchableOpacity>
        </View>
      ),
      headerStyle: {
        backgroundColor: homeScreenBackgroundColor(mood),
        borderBottomWidth: 0,
        height: 35,
      }
    };
  };

  state = {
    moodColor: homeScreenBackgroundColor(mood),
  };



  componentDidMount(){
    setInterval(() => (
      this.state.moodColor != homeScreenBackgroundColor(mood) ?
        this.setState(moodColor => (
          { moodColor: homeScreenBackgroundColor(mood) }
        )) : ""
    ), 500);
  }


  onProfileRequested = (username) => {
    let {navigate} = this.props.navigation;
    if(username == "create") {
      navigate('UserProfileScreen', {username: username});
    }
    else {
      navigate('UserProfileScreen', {username: username});
    }
  }

  render() {
    return (
      <View style={thoughtsStyles.container}>
        <ThoughtsFeed onProfileRequested={this.onProfileRequested} accentColor={this.state.moodColor}/>
      </View>
    );
  }
}

const thoughtsStyles = StyleSheet.create({
  container: {
    marginTop: 10,
    flex: 1,
  },
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
