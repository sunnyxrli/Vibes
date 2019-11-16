import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions } from 'react-native';
import { material } from 'react-native-typography';
import { Metrics } from '../Themes';
import { Entypo } from '@expo/vector-icons';
import Feed from '../Components/Feed';
import firestore from '../../firebase.js';
import firebase from 'firebase';

var { height, width } = Dimensions.get('window');

const homeScreenBackgroundColor = () => {
  return "#95B3ED";
}

const accentColor = () => {
  return "#003498";
}


export default class HomeScreen extends React.Component {

  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};

    return {
      headerTitle: (
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={material.title}>YOUR TEAM FEELS</Text>
        </View>
      ),
      headerStyle: {
        backgroundColor: homeScreenBackgroundColor(),
        borderBottomWidth: 0,
        height: 35,
      }
    };
  };

  onProfileRequested = (username) => {
    console.log("Requested: " + username);
    let {navigate} = this.props.navigation;
    navigate('UserProfileScreen', {username: username});

    /* PART 1: you will want to call the navigate function here */
    /* this function will be inside of this.props.navigation */
    /* think of destructing the function "navigate" from inside of your navigation props*/

    /* We can only call the navigate function from here because AppNavigation only explicitly defines this as a screen (under the stack that you created). */
    /* The Feed.js and FeedItem.js are invisible to the app's navigation, therefore they cannot be used to navigate. We must pass everything back to here. */

    /* PART 2: Navigate to your UserProfileScreen.js file */
    /* Go to AppNavigation.js and see how you declared your UserProfileScreen, then navigate to it by passing it */
    /* as the first parameter of the navigate function */

    /* PART 3: pass the username on this function as a parameter to the navigate function, below is a prototype*/
    //navigate('UserProfileScreen' /* make sure name matches what is inside of AppNavigation*/, { username: username });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.faceimage}>
          <Text style={styles.emotiontext}>SAD</Text>
          <Text style={styles.checkintext}> Last team check-in 4 hours ago</Text>
          <Image
            source={require("../Images/sadface.png")}
            style={{margin: 50}}
          />
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity
          //onPress={() => Alert.alert('Minority Moods')}
          >
            <Image
              source={require("../Images/group45.png")}
              style={styles.buttons}
              resizeMode='contain'
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require("../Images/group87.png")}
              style={styles.buttons}
              resizeMode='contain'
            />
          </TouchableOpacity>
        </View>
        <View style={styles.tasks}>
          <Text>Tasks Expiring Soon</Text>
        </View>
        <Feed/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: homeScreenBackgroundColor(),
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "center",
  },
  buttons: {
    height: 75,
    width: 150,
    margin: 5,
  },
  faceimage: {
    alignItems: "center",
  },
  emotiontext: {
    fontSize: 34,
    fontWeight: '800',
    color: accentColor(),
  },
  checkintext: {
    fontSize: 20,
    fontStyle: 'italic',
    fontWeight: '200',
    color: 'black',
  },
  tasks: {
    padding: 10,
  }
});
