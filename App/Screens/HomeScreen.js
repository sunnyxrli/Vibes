import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TouchableWithoutFeedback, Image, Dimensions } from 'react-native';
import { material } from 'react-native-typography';
import { Metrics } from '../Themes';
import { Entypo } from '@expo/vector-icons';
import Feed from '../Components/Feed';
import firestore from '../../firebase.js';
import firebase from 'firebase';
import {Overlay} from "react-native-elements";

var { height, width } = Dimensions.get('window');

const homeScreenBackgroundColor = () => {
  return "#95B3ED";
}

const accentColor = () => {
  return "#003498";
}


export default class HomeScreen extends React.Component {

  state = {
    moodsOverlayVisible: false,
  };

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
  }

  setMoodsOverlayVisible(visible: boolean) {
    this.setState({moodsOverlayVisible: visible});
  }

  render() {
    return (
        <View style={styles.container}>
          <View style={styles.faceimage}>
            <Text style={styles.emotiontext}>SAD</Text>
            <Text style={styles.checkintext}> Last team check-in 4 hours ago</Text>
            <Image
              source={require("../Images/sadface.png")}
              style={{marginTop: 50, marginBottom: 40, width: width * 0.4, height: 150}}
            />
          </View>
          <View style={styles.buttonRow}>
            <TouchableOpacity
              onPress={() => this.setMoodsOverlayVisible(true)}
            >
              <Image
                source={require("../Images/group45.png")}
                style={styles.buttons}
                resizeMode='contain'
              />
            </TouchableOpacity>
              <Overlay
                  isVisible={this.state.moodsOverlayVisible}
                  height="75%"
                  width="auto"
                  overlayStyle={styles.moodsOverlay}
                  animationType="slide"
                  windowBackgroundColor="rgba(0, 0, 0, 0)"
                  onBackdropPress={() => this.setMoodsOverlayVisible(false)}
              >
                  <Image
                    source={require("../Images/moredatapopup.png")}
                    style={{width: width, height: height * 0.90}}
                    resizeMode='contain'
                  />
              </Overlay>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('ThoughtsScreen')}
            >
              <Image
                source={require("../Images/group87.png")}
                style={styles.buttons}
                resizeMode='contain'
              />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.taskstext}>Tasks Expiring Soon</Text>
          </View>
          <View
            style={styles.tasksColumn}
          >
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('TasksScreen')}
            >
              <Image
                source={require("../Images/task1.png")}
                style={styles.tasks}
                resizeMode='contain'
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('TasksScreen')}
            >
              <Image
                source={require("../Images/task2.png")}
                style={styles.tasks}
                resizeMode='contain'
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('TasksScreen')}
            >
              <Image
                source={require("../Images/task3.png")}
                style={styles.tasks}
                resizeMode='contain'
              />
            </TouchableOpacity>
          </View>
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
  tasksColumn: {
    flexDirection: "column",
    alignItems: "center",
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
  taskstext: {
    fontSize: 20,
    padding: 10,
  },
  tasks: {
    height: 70,
    width: width * 0.95,
  },
  displayText: {
    fontSize: 40,
    fontStyle: 'italic',
    fontWeight: '200',
    color: 'black',
  },
});
