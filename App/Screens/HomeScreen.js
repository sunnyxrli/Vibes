import React from 'react';
import { FlatList, StyleSheet, Text, ScrollView, View, TouchableOpacity, TouchableWithoutFeedback, Image, Dimensions } from 'react-native';
import { material } from 'react-native-typography';
import { Metrics } from '../Themes';
import { Entypo } from '@expo/vector-icons';
import firestore from '../../firebase.js';
import firebase from 'firebase';
import { Overlay } from "react-native-elements";
import TaskImages from '../../App/Components/TaskImageCollection.js';
import OverlayImages from '../../App/Components/OverlayImageCollection.js';
import FaceImages from '../../App/Components/FaceImageCollection.js';

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
      headerStyle: {
        backgroundColor: homeScreenBackgroundColor(navigation.getParam('mood')),
        borderBottomWidth: 0,
        height: 0,
      },
      headerTitleStyle: {
        flex: 1,
        alignSelf: "center",
        marginLeft: "auto",
        marginRight: "auto"
      },
    };
  };

  setMoodsOverlayVisible(visible) {
    this.setState({ moodsOverlayVisible: visible });
  }

  render() {
    const { navigation } = this.props;
    mood = navigation.getParam('mood');
    if (mood == undefined) {
      mood = "SAD";
    }
    return (
      <ScrollView style={{ flex: 1, backgroundColor: homeScreenBackgroundColor(mood) }}>
        <TouchableOpacity
          style={{
          }}
          onPress={() => this.setMoodsOverlayVisible(true)}
        >
          <Image
            source={require('../Images/ProfileImages/charlie.png')}
            style={{ height: width * 0.08, width: width * 0.08, alignSelf: 'flex-end', marginRight: width * 0.029}}
            resizeMode='contain'
          />
        </TouchableOpacity>

        <View style={styles.faceimage}>
          <Text style={{ fontSize: height * 0.03, fontFamily: 'Lato-Regular' }}>Your team feels</Text>
          <Text style={{ fontSize: width * 0.11, fontFamily: 'Lato-Black', color: accentColor(mood) }}>{mood}</Text>
          <Text style={styles.checkintext}>Last team check-in a few seconds ago</Text>
          <Image
            source={FaceImages[mood]}
            style={{ marginTop: height * 0.037, height: height * 0.2, width: width * 0.365 }}
            resizeMode='contain'
          />
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={{
              backgroundColor: '#FFFFFF',
              opacity: 0.8,
              borderRadius: 100,
              width: width * 0.427,
              height: height * 0.077,
              justifyContent: 'center',
              margin: height * 0.01,
              marginTop: height * 0.012,
            }}
            onPress={() => this.setMoodsOverlayVisible(true)}
          >
            <Text style={{
              fontFamily: 'Lato-Bold',
              fontSize: width * 0.048,
              textAlign: 'center'
            }}> MORE DATA </Text>
          </TouchableOpacity>
          <Overlay
            isVisible={this.state.moodsOverlayVisible}
            fullScreen={true}
            overlayStyle={[styles.moodsOverlay, {justifyContent: 'center'}]}
            animationType="slide"
            windowBackgroundColor="rgba(0, 0, 0, 0)"
            onBackdropPress={() => this.setMoodsOverlayVisible(false)}
          >
            <TouchableOpacity
              style={{justifyContent: 'center', alignItems: 'center'}}
              onPress={() => this.setMoodsOverlayVisible(false)}>
              <Image
                source={OverlayImages[mood]}
                style={{width: width * 0.88, height: height * 0.8}}
                resizeMode='contain'
              />
            </TouchableOpacity>
          </Overlay>
          <TouchableOpacity
            style={{
              backgroundColor: accentColor(mood),
              opacity: 0.9,
              borderRadius: 100,
              width: width * 0.427,
              height: height * 0.08,
              justifyContent: 'center',
              margin: height * 0.01,
              marginTop: height * 0.012
            }}
            onPress={() => {
              this.props.navigation.navigate('ThoughtsScreen', { mood: mood });
            }}
          >
            <Text style={{
              fontFamily: 'Lato-Bold',
              fontSize: width * 0.048,
              textAlign: 'center',
              color: '#FFFFFF'
            }}> WHY? </Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.taskstext}>Tasks Expiring Soon</Text>
        </View>
        <View style={styles.tasksColumn}>
          <FlatList
            data={[
              { key: '1', link: "TaskCreativeSpace" },
              { key: '2', link: "TaskMiami" },
              { key: '3', link: "TaskBday" }
            ]}
            renderItem={({ item }) => <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate(item.link, { mood: mood });
              }}>
              <View style={{ backgroundColor: 'white', width: width * 0.95, height: height * 0.1, borderRadius: height * 0.01, marginBottom: height * 0.01, alignItems: "center", justifyContent: "center" }}>
                <Image
                  source={TaskImages[item.key]}
                  style={styles.tasks}
                  resizeMode="contain"
                />
              </View>
            </TouchableOpacity>}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </ScrollView>
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
    margin: 25,
    marginLeft: (height < 800 && height > 700) ? 45 : 25,
    marginRight: (height < 800 && height > 700) ? 45 : 25,
    marginBottom: 15,
  },
  tasksColumn: {
    flex: 1,
    alignItems: "center",
  },
  faceimage: {
    alignItems: "center",
    justifyContent: 'center'
  },
  checkintext: {
    fontSize: width * 0.053,
    fontFamily: 'Lato-LightItalic',
    marginTop: height * 0.008,
  },
  taskstext: {
    fontSize: width * 0.055,
    padding: height * 0.02,
    paddingLeft: width * 0.032,
    fontFamily: 'Lato-Bold'
  },
  tasks: {
    width: width * 0.82,
    alignContent: "center"
  },
  headerText: {
    fontSize: width * 0.053,
    fontFamily: 'Lato-Bold',
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: height * -0.031
  }
});
