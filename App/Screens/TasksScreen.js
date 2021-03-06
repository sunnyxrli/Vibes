import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, ScrollView } from 'react-native';
import { material } from 'react-native-typography';
import Home from '../Screens/HomeScreen';
import TaskMiami from '../Screens/TaskMiami';
import { AsyncStorage } from 'react-native';

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
    return 'rgba(242, 145, 199, 0.5)'
  } else if (mood == 'CONTENT') {
    return 'rgba(252, 231, 129, 0.5)'
  } else if (mood == 'BORED') {
    return 'rgba(254, 187, 88, 0.5)'
  } else if (mood == 'STRESSED') {
    return 'rgba(142, 218, 128, 0.5)'
  } else {
    return 'rgba(149, 179, 237, 0.5)'
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
          <Text style={TasksStyles.headerText}>Team Tasks</Text>
        </View>
      ),
      headerTintColor: 'black',
      headerStyle: {
        backgroundColor: homeScreenBackgroundColor(mood),
        borderBottomWidth: 0,
        height: height * 0.07,
      },
    };
  };

  updateMood = () => {
    if (!this.props.navigation) {
      return;
    }
    this.props.navigation.setParams(mood)
  }

  componentDidMount(){
    try{
      AsyncStorage.clear();
    } catch (error) {
      console.warn("async");
    }

    this.colorTimer = this.colorTimer = setInterval(() => (
      this.props.navigation.state.params.mood != homeScreenBackgroundColor(mood) ?
        this.updateMood() : ""
    ), 500);

  }

  componentWillUnmount() {
    clearInterval(this.colorTimer);
  }


  render() {
    return (
      <View style={{ flex: 1}}>
        <ScrollView>
          <Text style={[TasksStyles.title, { paddingTop: height * 0.03, paddingLeft: 14.706/375 * width, paddingBottom: height * 0.023 }]}>Tasks You’ve Joined</Text>
          <View style={{ alignItems: 'center' }}>
            <TouchableOpacity
              style={[TasksStyles.task, { justifyContent: 'center' }]}
              onPress={() => { this.props.navigation.navigate('TaskMiami', { mood: mood }) }}
            >
              <Text style={{ left: width * 0.064, fontFamily: 'Lato-Regular', fontSize: width * 0.06 }}>Miami Trip</Text>
              <Text style={{ fontSize: width * 0.043, fontFamily: 'Lato-Italic', color: accentColor(mood), left: width * 0.065 }}>Expires Dec 12, 2019</Text>
            </TouchableOpacity>
          </View>

          <Text style={[TasksStyles.title, { paddingTop: height * 0.06, paddingLeft: 14.706/375 * width, paddingBottom: height * 0.01 }]}>All Tasks</Text>
          <View style={TasksStyles.categoryContainer}>
            <TouchableOpacity
              style={[TasksStyles.categoryItem, { backgroundColor: accentColorMuted(mood) }]}
              onPress={() => { this.props.navigation.navigate('OffsitesScreen', { mood: mood }) }}
            >
              <Image
                source={require("../Images/TaskCategories/offsites.png")}
                style={{
                  height: height * 0.115,
                  width: 91/375 * width, 
                  justifyContent: 'center'
                }} 
                resizeMode='contain'/>
            </TouchableOpacity>
            <TouchableOpacity
              style={[TasksStyles.categoryItem, { backgroundColor: accentColorMuted(mood) }]}
              onPress={() => { this.props.navigation.navigate('OfficeEventsScreen', { mood: mood }) }}
            >
              <Image
                source={require("../Images/TaskCategories/officeEvents.png")}
                style={{
                  height: height * 0.14,
                  width: 76/375 * width, 
                  justifyContent: 'center'
                }} 
                resizeMode='contain'/>
            </TouchableOpacity>
            <TouchableOpacity
              style={[TasksStyles.categoryItem, { backgroundColor: accentColorMuted(mood) }]}
              onPress={() => { this.props.navigation.navigate('OfficeSpaceScreen', { mood: mood }) }}
            >
              <Image
                source={require("../Images/TaskCategories/officeSpace.png")}
                style={{
                  height: height * 0.14,
                  width: 70/375 * width, 
                  justifyContent: 'center'
                }} 
                resizeMode='contain'/>
            </TouchableOpacity>
            <TouchableOpacity
              style={[TasksStyles.categoryItem, { backgroundColor: accentColorMuted(mood) }]}
              onPress={() => { this.props.navigation.navigate('InclusivityScreen', { mood: mood }) }}
            >
              <Image
                source={require("../Images/TaskCategories/inclusivity.png")}
                style={{
                  height: height * 0.115,
                  width: 122/375 * width, 
                  justifyContent: 'center'
                }} 
                resizeMode='contain'/>
            </TouchableOpacity>
            <TouchableOpacity
              style={[TasksStyles.categoryItem, { backgroundColor: accentColorMuted(mood) }]}
              onPress={() => { this.props.navigation.navigate('FoodScreen', { mood: mood }) }}
            >
              <Image
                source={require("../Images/TaskCategories/food.png")}
                style={{
                  height: height * 0.11,
                  width: 59/375 * width, 
                  justifyContent: 'center'
                }} 
                resizeMode='contain'/>
            </TouchableOpacity>
            <TouchableOpacity
              style={[TasksStyles.categoryItem, { backgroundColor: accentColorMuted(mood) }]}
              onPress={() => { this.props.navigation.navigate('OtherScreen', { mood: mood }) }}
            >
              <Image
                source={require("../Images/TaskCategories/other.png")}
                style={{
                  height: height * 0.088,
                  width: 86.89/375 * width, 
                  justifyContent: 'center'
                }} 
                resizeMode='contain'/>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const TasksStyles = StyleSheet.create({
  title: {
    fontFamily: 'Lato-Bold',
    fontSize: height * 0.025
  },
task: {
    width: width * 0.92,
    height: height * 0.109,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#BDBDBD',
    margin: width * 0.013
},
  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center'
  },
  categoryItem: {
    alignItems: 'center',
    height: 163/375 * width,
    width: 163/375 * width,
    margin: 10.5/375 * width,
    borderRadius: height * 0.012,
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerText: {
    fontSize: height * 0.035,
    alignSelf: "center",
    marginLeft: "auto",
    marginRight: "auto",
    fontFamily: 'Lato-Black'
  }
});
