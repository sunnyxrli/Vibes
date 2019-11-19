import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import React from 'react';
import { Images, Colors, Metrics } from '../Themes'
import { StyleSheet, Image } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import HomeScreen from '../Screens/HomeScreen'
import BookmarkScreen from '../Screens/BookmarkScreen'
import BookmarkViewerScreen from '../Screens/BookmarkViewerScreen'
import UserProfileScreen from '../Screens/UserProfileScreen'

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

// Manifest of possible screens
const MajMoodNav = createStackNavigator({
  HomeScreen: {screen: HomeScreen},
  UserProfileScreen: {screen: UserProfileScreen},
}, {
  initialRouteName: 'HomeScreen',
  headerMode: 'float',
  tabBarOptions: {
    activeTintColor: '#79A2F1',
    inactiveTintColor: '#DADADA',
  },
})

const ThoughtsNav = createStackNavigator({
  BookmarkScreen: {screen: BookmarkScreen},
  BookmarkViewerScreen: {screen: BookmarkViewerScreen},
}, {
  initialRouteName: 'BookmarkScreen',
  headerMode: 'float',
  tabBarOptions: {
    activeTintColor: '#79A2F1',
    inactiveTintColor: '#DADADA',
  },
})

const TasksNav = createStackNavigator({
  HomeScreen: {screen: HomeScreen},
}, {
  initialRouteName: 'HomeScreen',
  headerMode: 'float',
  tabBarOptions: {
    activeTintColor: '#79A2F1',
    inactiveTintColor: '#DADADA',
  },
})

const CheckInNav = createStackNavigator({
  HomeScreen: {screen: HomeScreen},
}, {
  initialRouteName: 'HomeScreen',
  headerMode: 'float',
  tabBarOptions: {
    activeTintColor: '#79A2F1',
    inactiveTintColor: '#DADADA',
  },
})

const TabNav = createBottomTabNavigator({
  MajMoodScreen: { screen: MajMoodNav },
  ThoughtsScreen:   { screen: ThoughtsNav },
  TasksScreen: { screen: TasksNav },
  CheckInScreen: { screen: CheckInNav},
}, {
  // Default config for all screens
  initialRouteName: 'MajMoodScreen',
  tabBarOptions: {
    activeTintColor: '#79A2F1',
    inactiveTintColor: '#DADADA',
    showLabel: false,
  },
})

MajMoodNav.navigationOptions = ({ navigation }) => {
  return {
    tabBarIcon: ({tintColor}) => (
      <CustomIcon name="moods" size={27} color={tintColor}/>
    ),
  };
};

ThoughtsNav.navigationOptions = ({ navigation }) => {
  return {
    tabBarIcon: ({ tintColor }) => (
      <CustomIcon name="thoughts" size={27} color={tintColor}/>
    ),
  };
};

TasksNav.navigationOptions = ({ navigation }) => {
  return {
    tabBarIcon: ({ tintColor }) => (
      <CustomIcon name="taskList" size={27} color={tintColor}/>
    ),
  };
};

CheckInNav.navigationOptions = ({ navigation }) => {
  return {
    tabBarIcon: ({tintColor}) => (
      <CustomIcon name="checkIn" size={27} color={tintColor}/>
    ),
  };
};


const AppContainer = createAppContainer(TabNav);
export default AppContainer;
