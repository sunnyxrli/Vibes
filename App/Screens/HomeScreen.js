import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TouchableWithoutFeedback, Image, Dimensions } from 'react-native';
import { material } from 'react-native-typography';
import { Metrics } from '../Themes';
import { Entypo } from '@expo/vector-icons';
import firestore from '../../firebase.js';
import firebase from 'firebase';
import { Overlay } from "react-native-elements";

var { height, width } = Dimensions.get('window');

var homeScreenBackgroundColor = (mood) => {
  if (mood == 'EXCITED') {
    return '#F291C7'
  } else if (mood == 'CONTENT') {
    return '#FCE781'
  } else if (mood == 'BORED') {
    return '#FEBB58'
  } else if (mood == 'STRESSED') {
    return '#8EDA80'
  } else {
    return '#95B3ED'
  }
}

var accentColor = (mood) => {
  if (mood == 'EXCITED') {
    return '#C50A7A'
  } else if (mood == 'CONTENT') {
    return '#E78B00'
  } else if (mood == 'BORED') {
    return '#DD5D00'
  } else if (mood == 'STRESSED') {
    return '#167904'
  } else {
    return '#003498'
  }
}


export default class HomeScreen extends React.Component {

  state = {
    moodsOverlayVisible: false,
  };

  static navigationOptions = ({ navigation }) => {

    return {
      headerTitle: (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Text style={material.title}>YOUR TEAM FEELS</Text>
        </View>
      ),
      headerStyle: {
        backgroundColor: homeScreenBackgroundColor(navigation.getParam('mood')),
        borderBottomWidth: 0,
        height: 35,
      }
    };
  };

  setMoodsOverlayVisible(visible) {
    this.setState({ moodsOverlayVisible: visible });
  }

  getMoodImage(mood) {
    if (mood == 'EXCITED') {
      return require('../Images/excitedface.png')
    } else if (mood == 'CONTENT') {
      return require('../Images/happyface.png')
    } else if (mood == 'BORED') {
      return require('../Images/boredface.png')
    } else if (mood == 'STRESSED') {
      return require('../Images/stressedface.png')
    } else {
      return require('../Images/sadface.png')
    }
  }

  render() {
    const { navigation } = this.props;
    mood = navigation.getParam('mood');
    return (
      <View style={{ flex: 1, backgroundColor: homeScreenBackgroundColor(mood) }}>
        <View style={styles.faceimage}>
          <Text style={{ fontSize: 34, fontWeight: '800', color: accentColor(mood) }}>{mood}</Text>
          <Text style={styles.checkintext}> Last team check-in a few seconds ago</Text>
          <Image
            source={this.getMoodImage(mood)}
            style={{ marginTop: 50, marginBottom: 20, height: 150 }}
            resizeMode='contain'
          />
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={{
              backgroundColor: '#FFFFFF',
              paddingTop: 18,
              opacity: 0.7,
              borderRadius: 100,
              width: 160,
              height: 56,
              alignSelf: "center",
            }}
            onPress={() => this.setMoodsOverlayVisible(true)}
          >
            <Text style={{
              fontFamily:'Lato-Bold',
              fontSize: 16,
              textAlign: 'center'
            }}> MORE DATA </Text>
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
              style={{ width: width, height: height * 0.90 }}
              resizeMode='contain'
            />
          </Overlay>
          <TouchableOpacity
          style={{
            backgroundColor: accentColor(mood),
            opacity: 0.7,
            paddingTop: 18,
            borderRadius: 100,
            width: 150,
            height: 56,
          }}
            onPress={() => {
              this.props.navigation.navigate('ThoughtsScreen', {mood: mood});
            }}
          >
            <Text style={{
              fontFamily:'Lato-Bold',
              fontSize: 16,
              alignSelf: 'center',
              color: '#FFFFFF'
            }}> WHY? </Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.taskstext}>Tasks Expiring Soon</Text>
        </View>
        <View style={styles.tasksColumn}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('TasksScreen', {mood: mood});
            }}
          >
            <Image
              source={require("../Images/task1.png")}
              style={styles.tasks}
              resizeMode='contain'
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('TasksScreen', {mood: mood});
            }}
          >
            <Image
              source={require("../Images/task2.png")}
              style={styles.tasks}
              resizeMode='contain'
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('TasksScreen', {mood: mood});
            }}
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
    justifyContent: "space-between",
    margin: 25,
    marginBottom: 15,
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
