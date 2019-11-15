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
    activeTintColor: Colors.black,
  },
})

const ThoughtsNav = createStackNavigator({
  BookmarkScreen: {screen: BookmarkScreen},
  BookmarkViewerScreen: {screen: BookmarkViewerScreen},
}, {
  initialRouteName: 'BookmarkScreen',
  headerMode: 'float',
  tabBarOptions: {
    activeTintColor: Colors.black,
  },
})

const TasksNav = createStackNavigator({
  HomeScreen: {screen: HomeScreen},
}, {
  initialRouteName: 'HomeScreen',
  headerMode: 'float',
  tabBarOptions: {
    activeTintColor: Colors.black,
  },
})

const CheckInNav = createStackNavigator({
  HomeScreen: {screen: HomeScreen},
}, {
  initialRouteName: 'HomeScreen',
  headerMode: 'float',
  tabBarOptions: {
    activeTintColor: Colors.black,
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
    activeTintColor: Colors.black,
    showLabel: false,
  },
})

MajMoodNav.navigationOptions = ({ navigation }) => {
  return {
    tabBarIcon: ({}) => (
      <Image source={require('../Images/moodsIcon2x.png')}
        style={{width: 30, height: 27.07}}
      />
    ),
  };
};

ThoughtsNav.navigationOptions = ({ navigation }) => {
  return {
    tabBarIcon: ({ tintColor }) => (
      <Image source={require('../Images/thoughtsIcon2x.png')}
        style={{width: 23.56, height: 27}}
        color={tintColor}
      />
    ),
  };
};

TasksNav.navigationOptions = ({ navigation }) => {
  return {
    tabBarIcon: ({}) => (
      <Image source={require('../Images/tasksIcon2x.png')}
        style={{width: 22.27, height: 27}}
      />
    ),
  };
};

CheckInNav.navigationOptions = ({ navigation }) => {
  return {
    tabBarIcon: ({}) => (
      <Image source={require('../Images/checkInIcon2x.png')}
        style={{width: 21.71, height: 26.63}}
      />
    ),
  };
};


const AppContainer = createAppContainer(TabNav);

export default AppContainer
