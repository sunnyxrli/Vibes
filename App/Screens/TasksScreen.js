import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, ScrollView } from 'react-native';
import { material } from 'react-native-typography';
import Home from '../Screens/HomeScreen';
import TaskMiami from '../Screens/TaskMiami';

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
    console.log(navigation)
    return {
      headerTitle: (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Text style={TasksStyles.headerText}>Team Tasks</Text>
        </View>
      ),
      headerStyle: {
        backgroundColor: homeScreenBackgroundColor(mood),
        borderBottomWidth: 0,
        height: height * 0.05,
      },
    };
  };


  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          <Text style={[TasksStyles.title, { paddingTop: 25, paddingLeft: 15, paddingBottom: 19 }]}>Tasks You’ve Joined</Text>
          <TouchableOpacity
            style={[TasksStyles.task, {justifyContent: 'center'}]}
            
            onPress={() => { this.props.navigation.navigate('TaskMiami', {mood: mood});}}
          >
            <Text style={{ left: 24, fontFamily: 'Lato-Regular', fontSize: 23 }}>Miami Trip</Text>
            <Text style={{ fontSize: 16, fontFamily: 'Lato-Italic', color: accentColor(mood), left: 22 }}> Expires in 1 day </Text>
          </TouchableOpacity>
          <Text style={[TasksStyles.title, { paddingTop: 48, paddingLeft: 15, paddingBottom: 8.5 }]}>All Tasks</Text>
          <View style={TasksStyles.categoryContainer}>
            <TouchableOpacity
              style={[TasksStyles.categoryItem, { backgroundColor: accentColorMuted(mood) }]}
              onPress={() => {this.props.navigation.navigate('OffsitesScreen')}}
            >
              <Image
                source={require("../Images/TaskCategories/offsites.png")}
                style={{
                  height: 93.65,
                  width: 91, justifyContent: 'center'
                }} />
            </TouchableOpacity>
            <TouchableOpacity
              style={[TasksStyles.categoryItem, { backgroundColor: accentColorMuted(mood) }]}
              onPress={() => {this.props.navigation.navigate('OfficeEventsScreen')}}
            >
              <Image
                source={require("../Images/TaskCategories/officeEvents.png")}
                style={{
                  height: 113.82,
                  width: 76, justifyContent: 'center'
                }} />
            </TouchableOpacity>
            <TouchableOpacity
              style={[TasksStyles.categoryItem, { backgroundColor: accentColorMuted(mood) }]}
              onPress={() => {this.props.navigation.navigate('OfficeSpaceScreen')}}
            >
              <Image
                source={require("../Images/TaskCategories/officeSpace.png")}
                style={{
                  height: 114.82,
                  width: 70, justifyContent: 'center'
                }} />
            </TouchableOpacity>
            <TouchableOpacity
              style={[TasksStyles.categoryItem, { backgroundColor: accentColorMuted(mood) }]}
              onPress={() => {this.props.navigation.navigate('InclusivityScreen')}}
            >
              <Image
                source={require("../Images/TaskCategories/inclusivity.png")}
                style={{
                  height: 91.06,
                  width: 122, justifyContent: 'center'
                }} />
            </TouchableOpacity>
            <TouchableOpacity
              style={[TasksStyles.categoryItem, { backgroundColor: accentColorMuted(mood) }]}
              onPress={() => {this.props.navigation.navigate('FoodScreen')}}
            >
              <Image
                source={require("../Images/TaskCategories/food.png")}
                style={{
                  height: 90.06,
                  width: 59, justifyContent: 'center'
                }} />
            </TouchableOpacity>
            <TouchableOpacity
              style={[TasksStyles.categoryItem, { backgroundColor: accentColorMuted(mood) }]}
              onPress={() => {this.props.navigation.navigate('OtherScreen')}}
            >
              <Image
                source={require("../Images/TaskCategories/other.png")}
                style={{
                  height: 72.06,
                  width: 86.82, justifyContent: 'center'
                }} />
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
  title: {
    fontFamily: 'Lato-Bold',
    fontSize: height * 0.025
  },
  task: {
    width: 345,
    height: 89,
    left: 15,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#BDBDBD'
  },
  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    // left: 4.5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  categoryItem: {
    alignItems: 'center',
    height: 162,
    width: 162,
    margin: 10.5,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerText: {
    fontSize: height * 0.025,
    alignSelf: "center",
    marginLeft: "auto",
    marginRight: "auto",
    fontFamily: 'Lato-Black'
  }
});
