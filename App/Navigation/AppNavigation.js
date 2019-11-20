import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import React from 'react';
import { Images, Colors, Metrics } from '../Themes'
import { StyleSheet, Image } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import HomeScreen from '../Screens/HomeScreen'
import ThoughtsScreen from '../Screens/ThoughtsScreen'
import CheckInScreen from '../Screens/CheckInScreen'
import GLOBAL from './../global.js'

import { createIconSetFromIcoMoon } from '@expo/vector-icons';
import icoMoonConfig from '../../selection.json';
const expoAssetId = require("../../assets/fonts/icomoon.ttf");
const CustomIcon = createIconSetFromIcoMoon(icoMoonConfig, 'icomoon', expoAssetId);


/* PART 1: Create a StackNavigator that contains the HomeScreen, and the UserProfileScreen */
/* initialRouteName should be your HomeScreen. Set headerMode to 'float'  */

/* PART 2: Create a StackNavigator that contains the BookmarkScreen, and the BookmarkViewerScreen */
/* initialRouteName should be your BookmarkScreen. Set headerMode to 'float'  */

/* PART 3: nest both StackNavigators in the TabNavigator below */
/* Your FeedScreen should point to the StackNavigator that you created in Part 1 */
/* Your BookmarkScreen should point to the StackNavigator that you created in Part 2 */

/* OPTIONAL: Add icons for both tabs using navigationOptions as shown in lecture

BookmarkNav.navigationOptions = ({ navigation }) => {
  return {
    tabBarLabel: 'Bookmarks',
    tabBarIcon: ({ tintColor }) => (
      <Entypo name="bookmark"
        size={Metrics.icons.medium}
        color={tintColor} />
    ),
  };
};

*/

const activeColor = () => {
  console.log ("in nav bar")
  console.log(GLOBAL.mood)
  if (GLOBAL.mood == 'BORED') {
    return "#FAC474";
  } else if (GLOBAL.mood == 'EXICTED') {
    return '#F291C7'
  } else if (GLOBAL.mood == 'CONTENT') {
    return '#F8DD53'
  } else if (GLOBAL.mood == 'STRESSED') {
    return '#8EDA80'
  } else {
    return '#79A2F1'
  }
}

// Manifest of possible screens
const MajMoodNav = createStackNavigator({
  HomeScreen: { screen: HomeScreen },
}, {
  initialRouteName: 'HomeScreen',
  headerMode: 'float',
  tabBarOptions: {
    activeTintColor: activeColor(),
    inactiveTintColor: '#DADADA',
  },
})

const ThoughtsNav = createStackNavigator({
  ThoughtsScreen: { screen: ThoughtsScreen },
}, {
  initialRouteName: 'ThoughtsScreen',
  headerMode: 'float',
  tabBarOptions: {
    activeTintColor: activeColor(),
    inactiveTintColor: '#DADADA',
  },
})

const TasksNav = createStackNavigator({
  HomeScreen: { screen: HomeScreen },
}, {
  initialRouteName: 'HomeScreen',
  headerMode: 'float',
  tabBarOptions: {
    activeTintColor: activeColor(),
    inactiveTintColor: '#DADADA',
  },
})

const TabNav = createBottomTabNavigator({
  CheckInScreen: { screen: CheckInScreen },
  MajMoodScreen: { screen: MajMoodNav },
  ThoughtsScreen: { screen: ThoughtsNav },
  TasksScreen: { screen: TasksNav },
}, {
  // Default config for all screens
  initialRouteName: 'CheckInScreen',
  tabBarOptions: {
    activeTintColor: activeColor(),
    inactiveTintColor: '#DADADA',
    showLabel: false,
  },
})

MajMoodNav.navigationOptions = ({ navigation }) => {
  return {
    tabBarIcon: ({ tintColor }) => (
      <CustomIcon name="moods" size={27} color={tintColor} />
    ),
  };
};

ThoughtsNav.navigationOptions = ({ navigation }) => {
  return {
    tabBarIcon: ({ tintColor }) => (
      <CustomIcon name="thoughts" size={27} color={tintColor} />
    ),
  };
};

TasksNav.navigationOptions = ({ navigation }) => {
  return {
    tabBarIcon: ({ tintColor }) => (
      <CustomIcon name="taskList" size={27} color={tintColor} />
    ),
  };
};

CheckInScreen.navigationOptions = ({ navigation }) => {
  return {
    tabBarIcon: ({ tintColor }) => (
      <CustomIcon name="checkIn" size={27} color={tintColor} />
    ),
  };
};


const AppContainer = createAppContainer(TabNav);
export default AppContainer;
