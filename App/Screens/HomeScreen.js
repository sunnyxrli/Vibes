import React from 'react';
import { FlatList, StyleSheet, Text, View, TouchableOpacity, TouchableWithoutFeedback, Image, Dimensions } from 'react-native';
import { material } from 'react-native-typography';
import { Metrics } from '../Themes';
import { Entypo } from '@expo/vector-icons';
import firestore from '../../firebase.js';
import firebase from 'firebase';
import { Overlay } from "react-native-elements";
import TaskImages from '../../App/Components/TaskImageCollection.js';
import OverlayImages from '../../App/Components/OverlayImageCollection.js';

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
    return '#E7A600'
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
        <Text style={{fontSize: 20, fontWeight: "500", alignSelf: "center",
          marginLeft: "auto",
          marginRight: "auto"}}>YOUR TEAM FEELS</Text>
      ),
      headerStyle: {
        backgroundColor: homeScreenBackgroundColor(navigation.getParam('mood')),
        borderBottomWidth: 0,
        height: 35,
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
              paddingTop: 19,
              opacity: 0.7,
              borderRadius: 100,
              width: 150,
              height: 60,
              alignSelf: "center",
            }}
            onPress={() => this.setMoodsOverlayVisible(true)}
          >
            <Text style={{
              fontFamily:'Lato-Bold',
              fontSize: 17,
              textAlign: 'center'
            }}> MORE DATA </Text>
          </TouchableOpacity>
          <Overlay
            isVisible={this.state.moodsOverlayVisible}
            height="88%"
            width="auto"
            overlayStyle={styles.moodsOverlay}
            animationType="slide"
            windowBackgroundColor="rgba(0, 0, 0, 0)"
            onBackdropPress={() => this.setMoodsOverlayVisible(false)}
          >
            <Image
              source={OverlayImages[mood]}
              style={{ width: width, height: height * 0.95}}
              resizeMode='contain'
            />
          </Overlay>
          <TouchableOpacity
          style={{
            backgroundColor: accentColor(mood),
            opacity: 0.9,
            paddingTop: 19,
            borderRadius: 100,
            width: 150,
            height: 60,
          }}
            onPress={() => {
              this.props.navigation.navigate('ThoughtsScreen', {mood: mood});
            }}
          >
            <Text style={{
              fontFamily:'Lato-Bold',
              fontSize: 17,
              alignSelf: 'center',
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
            {key: '1', link: "TasksScreen"},
            {key: '2', link: "TasksScreen"},
            {key: '3', link: "TasksScreen"}
          ]}
         renderItem={({item}) => <TouchableOpacity
           onPress={() => {
             this.props.navigation.navigate(item.link, {mood: mood});
           }}>
           <Image
             source={TaskImages[item.key]}
             style={styles.tasks}
             resizeMode='contain'
           />
         </TouchableOpacity>}
         keyExtractor={ (item, index) => index.toString()}
         />
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
    marginLeft: (height<800 && height>700) ? 45 : 25,
    marginRight: (height<800 && height>700)? 45 : 25,
    marginBottom: 15,
  },
  tasksColumn: {
    flex: 1,
    alignItems: "center"
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
    height: height * 0.1,
    width: width * 0.95,
    margin: (height<800) ? 1: 0,
  },
  displayText: {
    fontSize: 40,
    fontStyle: 'italic',
    fontWeight: '200',
    color: 'black',
  },
});
