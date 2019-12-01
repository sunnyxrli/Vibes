import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import React from 'react';
import { Images, Colors, Metrics } from '../Themes'
import { StyleSheet, Image, Dimensions, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import HomeScreen from '../Screens/HomeScreen'
import ThoughtsScreen from '../Screens/ThoughtsScreen'
import AddThoughtScreen from '../Screens/AddThoughtScreen.js'
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

var { height, width } = Dimensions.get('window');

const MajMoodNav = createStackNavigator({
  HomeScreen: { screen: HomeScreen },
}, {
  initialRouteName: 'HomeScreen',
  headerMode: 'float',
  tabBarOptions: {
    activeTintColor: '',
    inactiveTintColor: '#DADADA',
  },
})

const ThoughtsNav = createStackNavigator({
  ThoughtsScreen: { screen: ThoughtsScreen },
  CreateTaskOne: { screen: CreateTaskOne },
  CreateTaskTwo: { screen: CreateTaskTwo },
  CreateTaskThree: { screen: CreateTaskThree },
  AddThoughtScreen: { screen: AddThoughtScreen}
}, {
  initialRouteName: 'ThoughtsScreen',
  initialRouteParams: {mood: ""},
  headerMode: 'float',
  lazy: false,
  tabBarOptions: {
    activeTintColor: '',
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
  initialRouteParams: {mood: ""},
  lazy: false,
  headerMode: 'float',
  tabBarOptions: {
    activeTintColor: 'green',
    inactiveTintColor: '#DADADA',
  },
})

const TabNav = createBottomTabNavigator({
    CheckInScreen: { screen: CheckInScreen },
    MajMoodScreen: { screen: MajMoodNav },
    ThoughtsScreen: { screen: ThoughtsNav },
    TasksScreen: { screen: TasksNav },
  }, {
    initialRouteName: 'CheckInScreen',
    tabBarOptions: {
      activeTintColor: '#222',
      inactiveTintColor: '#DADADA',
      showLabel: false,
    },
  })

MajMoodNav.navigationOptions = ({ navigation }) => {
  return {
    tabBarIcon: ({ tintColor }) => (
      <View style={{width: height * 0.05}}>
        <CustomIcon name="moods" size={height * 0.03} color={tintColor} />
      </View>
    ),
  };
};

ThoughtsNav.navigationOptions = ({ navigation }) => {
  return {
    tabBarIcon: ({ tintColor }) => (
      <View style={{width: height * 0.05}}>
        <CustomIcon name="thoughts" size={height * 0.03} color={tintColor} />
      </View>
    ),
    tabBarOnPress: ({navigation, defaultHandler }) => {
        if(navigation.state.params == undefined) {
          navigation.navigate("TasksScreen")
        }
        defaultHandler();
      }
  };
};

TasksNav.navigationOptions = ({ navigation }) => {
  return {
    tabBarIcon: ({ tintColor }) => (
      <View style={{width: height * 0.05}}>
        <CustomIcon name="taskList" size={height * 0.03} color={tintColor} />
      </View>
    ),
  };
};

CheckInScreen.navigationOptions = ({ navigation }) => {
  return {
    tabBarIcon: ({ tintColor }) => (
      <View style={{width: height * 0.05}}>
        <CustomIcon name="checkIn" size={height * 0.03} color={tintColor} />
      </View>
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
