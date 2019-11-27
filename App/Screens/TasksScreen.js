import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, ScrollView } from 'react-native';
import { material } from 'react-native-typography';
import Feed from '../Components/Feed';
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
    return '#8EDA80'
  } else {
    return '#95B3ED'
  }
}

var accentColorMuted = (mood) => {
  if (mood == 'EXCITED') {
    return 'rgba(181, 0, 108, 0.5)'
  } else if (mood == 'CONTENT') {
    return 'rgba(231, 139, 0, 0.5)'
  } else if (mood == 'BORED') {
    return 'rgba(221, 93, 0, 0.5)'
  } else if (mood == 'STRESSED') {
    return 'rgba(22, 121, 4, 0.5)'
  } else {
    return 'rgba(0, 52, 152, 0.5)'
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

export default class TasksScreen extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Text style={TasksStyles.heading}>Team Tasks</Text>
        </View>
      ),
      headerStyle: {
        backgroundColor: homeScreenBackgroundColor(mood),
        borderBottomWidth: 1,
        borderBottomColor: accentColorMuted(mood),
      }
    };
  };


  render() {
    return (
      <View style={{ flex: 1, backgroundColor: homeScreenBackgroundColor(mood) }}>
        <ScrollView>
          <Text style={[TasksStyles.title, { paddingTop: 25, paddingLeft: 15, paddingBottom: 19 }]}>Tasks You’ve Joined</Text>
          <TouchableOpacity
            style={TasksStyles.button}
            onPress={() => { }}
          >
            <Text style={{ top: 20, left: 24, fontFamily: 'Lato-Regular', fontSize: 23 }}>Miami Trip</Text>
            <Text style={{ fontSize: 16, fontFamily: 'Lato-Italic', color: accentColor(mood), left: 22, top: 23 }}> Expires in 1 day </Text>
          </TouchableOpacity>
          <Text style={[TasksStyles.title, { paddingTop: 48, paddingLeft: 15, paddingBottom: 8.5 }]}>All Tasks</Text>
          <View style={TasksStyles.categoryContainer}>
            <TouchableOpacity
              onPress={() => { }}
            >
              <Image
                source={require("../Images/TaskCategories/offsites.png")}
                style={TasksStyles.categoryItem} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => { }}
            >
              <Image
                source={require("../Images/TaskCategories/officeEvents.png")}
                style={TasksStyles.categoryItem} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => { }}
            >
              <Image
                source={require("../Images/TaskCategories/officeSpace.png")}
                style={TasksStyles.categoryItem} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => { }}
            >
              <Image
                source={require("../Images/TaskCategories/inclusivity.png")}
                style={TasksStyles.categoryItem} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => { }}
            >
              <Image
                source={require("../Images/TaskCategories/food.png")}
                style={TasksStyles.categoryItem} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => { }}
            >
              <Image
                source={require("../Images/TaskCategories/other.png")}
                style={TasksStyles.categoryItem} />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
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
  heading: {
    fontFamily: 'Lato-Black',
    fontSize: 22,
    textAlign: "center"
  },
  title: {
    fontFamily: 'Lato-Bold',
    fontSize: 20
  },
  button: {
    width: 345,
    height: 89,
    left: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
  },
  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    left: 4.5,
  },
  categoryItem: {
    alignItems: 'center',
    height: 162,
    width: 162,
    margin: 10.5
    // flex: 1,
    // margin: 1,
  }
});
