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
import TasksScreen from '../Screens/TasksScreen'

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
    // return '#F291C7'
    return '#000000'
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
  HomeScreen: {screen: TasksScreen},
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
