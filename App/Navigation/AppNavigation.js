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
import OffsitesScreen from '../Screens/TaskCategoryScreens/OffsitesScreen'
import OfficeEventsScreen from '../Screens/TaskCategoryScreens/OfficeEventsScreen'
import OfficeSpaceScreen from '../Screens/TaskCategoryScreens/OfficeSpaceScreen'
import InclusivityScreen from '../Screens/TaskCategoryScreens/InclusivityScreen'
import OtherScreen from '../Screens/TaskCategoryScreens/OtherScreen'
import FoodScreen from '../Screens/TaskCategoryScreens/FoodScreen'
import CreateTaskOne from '../Screens/CreateTaskOne'
import CreateTaskTwo from '../Screens/CreateTaskTwo'
import CreateTaskThree from '../Screens/CreateTaskThree'

import { createIconSetFromIcoMoon } from '@expo/vector-icons';
import icoMoonConfig from '../../selection.json';
const expoAssetId = require("../../assets/fonts/icomoon.ttf");
const CustomIcon = createIconSetFromIcoMoon(icoMoonConfig, 'icomoon', expoAssetId);

const activeColor = () => {
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
  CreateTaskOne: { screen: CreateTaskOne },
  CreateTaskTwo: { screen: CreateTaskTwo },
  CreateTaskThree: { screen: CreateTaskThree },
}, {
  initialRouteName: 'ThoughtsScreen',
  headerMode: 'float',
  tabBarOptions: {
    activeTintColor: activeColor(),
    inactiveTintColor: '#DADADA',
  },
})

const TasksNav = createStackNavigator({
  TasksScreen: {screen: TasksScreen},
  OffsitesScreen: {screen: OffsitesScreen},
  OfficeEventsScreen: {screen: OfficeEventsScreen},
  OfficeSpaceScreen: {screen: OfficeSpaceScreen},
  InclusivityScreen: {screen: InclusivityScreen},
  FoodScreen: {screen: FoodScreen},
  OtherScreen: {screen: OtherScreen}
}, {
  initialRouteName: 'TasksScreen',
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

// export default class AppNavigation extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {mood: 'EXCITED'};
//   }
//   componentDidMount() {
//     this.onLoadMood().then((mood) => this.setState({ mood: mood }));
//   }
//   render() {
//     return(<AppContainer screenProps={{ mood: this.state.mood}} />)
//   }
// }
