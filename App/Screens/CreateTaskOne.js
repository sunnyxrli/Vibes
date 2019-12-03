import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, ScrollView, Button } from 'react-native';
import { material } from 'react-native-typography';
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
	    // headerRight: () => (
	    //     <TouchableOpacity
	    //       style={{
	    //       	marginTop: 2,
	    //         marginRight: 16,
	    //       }}
	    //       onPress={() => {this.props.navigation.navigate('ThoughtsScreen', {mood: mood})}}
	    //     >
	    //       <Text style={{
	    //         fontFamily:'Lato-Regular',
	    //         fontSize: 17,
	    //         alignSelf: 'center',
	    //         color: '#007AFF',
	    //       }}>Cancel</Text>
	    //     </TouchableOpacity>
	    // ),
    	headerStyle: {
	        backgroundColor: 'white',
	        borderBottomWidth: 0,
      	}
    };
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text style={{
          fontFamily:'Lato-Bold',
          fontSize: height * 0.05,
          textAlign: 'left',
          marginTop: height * 0.01,
          marginBottom: height * 0.02,
          marginLeft: width * 0.053,
        }}>Create Task</Text>
        <Image
            source={require("../Images/taskTitle.png")}
            style={styles.taskTitle}
            resizeMode='contain'
        />
        <Image
            source={require("../Images/taskDescription.png")}
            style={styles.taskDes}
            resizeMode='contain'
        />
        <TouchableOpacity
          style={{
            backgroundColor: accentColor(mood),
            opacity: 0.8,
            borderRadius: 7,
            width: 196,
            height: 41,
            alignSelf: 'center',
            marginTop: 10,
		    flex: 1,
		    justifyContent: 'center',
		    alignItems: 'center'
          }}
          onPress={() => {this.props.navigation.navigate('CreateTaskTwo')}}
        >
          <Text style={{
            fontFamily:'Lato-Bold',
            fontSize: 20,
            alignSelf: 'center',
            textAlign: 'center',
            color: '#FFFFFF',
			lineHeight: 20,
          }}>NEXT</Text>
        </TouchableOpacity>
        <View style={styles.container}>
          <View style={{
            width: 12,
            height: 12,
            borderRadius: 12/2,
            marginLeft: 20,
            marginRight: 10,
            backgroundColor: accentColor(mood),
          }}>
          </View>
          <View style={styles.CircleShapeView}>
          </View>
          <View style={styles.CircleShapeView}>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10
  },
  CircleShapeView: {
    width: 12,
    height: 12,
    borderRadius: 12/2,
    backgroundColor: '#BDBDBD',
    marginLeft: 20,
    marginRight: 10,
  },
  taskTitle: {
    height: height * 0.25,
    width: width * 0.95,
    padding: 0,
    margin: 0,
    marginLeft: 10,
  },
  pageIndicator: {
    height: 20,
    width: '20%',
    alignSelf: 'center',
    marginTop: 40,
  },
  taskDes: {
    height: height * 0.30,
    width: width * 0.95,
    padding: 0,
    margin: 0,
    marginLeft: 10,
  },
});
