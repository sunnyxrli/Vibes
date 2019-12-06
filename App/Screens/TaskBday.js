import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, ScrollView, ColorPropType, Alert } from 'react-native';
import { material } from 'react-native-typography';
// import Feed from '../Components/Feed';
import Home from '../Screens/HomeScreen';
import { Colors } from '../Themes';
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

export default class TaskBday extends React.Component {
  state = {
    joined: false,
    joinedText: "Join",
  }
    constructor(props){
      super(props);

      }

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Text style={TaskBdayStyle.heading}>Task</Text>
        </View>
      ),
      headerTintColor: 'black',
      headerStyle: {
        backgroundColor: homeScreenBackgroundColor(mood),
        borderBottomWidth: 0,
      }
    };
  };

  updateMood = () => {
    if(!this.props.navigation) {
      return;
    }
    this.setState({mood: this.props.navigation.state.params.mood});
  }

  async componentDidMount() {
    this._isMounted = true;
    try {
      const joinedValue = await AsyncStorage.getItem('JoinedBday');
      if (joinedValue === null){
        this.setState({ joined: false });
      }else {
        this.setState({ joined:  joinedValue=== "true" });
      }

      const joinedTextValue = await AsyncStorage.getItem('JoinedBdayText');
      if (joinedTextValue === null || joinedTextValue === ""){
        this.setState({ joinedText: "Join" });
      }else{
        this.setState({ joinedText: joinedTextValue});
      }


    } catch (error) {
      // Error retrieving data
      console.log("Async storage error in retreival");
    }
    this.colorTimer = setInterval(() => (
      this.props.navigation.state.params.mood != accentColor(mood) ?
        this.updateMood() : ""
    ), 500);
  }

  async componentWillUnmount() {
    this._isMounted = false;
    clearInterval(this.colorTimer);
    try {
      await AsyncStorage.setItem('JoinedBday', this.state.joined.toString());
      await AsyncStorage.setItem('JoinedBdayText', this.state.joinedText.toString());
    } catch (error) {
      // Error saving data
      console.warn("async storage had a problem storying the data on unmount");
    }
  }

  joinTheEvent() {
    this.setState({ joined: !this.state.joined }, function () {

      if (this.state.joined) {

        this.setState({joinedText: "Unjoin"});
        Alert.alert(
          'Joined Task',
          "Congratulations you've joined Misbah Bday Party!",
          [
            { text: "Vew Action Items", onPress: () => this.props.navigation.navigate('ActionItemsMisbahBday', { mood: mood }) },
          ],
          { cancelable: false },
        );
      } else {

        this.setState({joinedText: "Join"});
        Alert.alert(
          'UnJoined Task',
          "You've left Misbah Bday Party.",
          [
            { text: "Ok", onPress: () => this.props.navigation.navigate('TasksScreen', { mood: mood }) },
          ],
          { cancelable: false },
        );
      }
  });
  }

  render() {
    return (
      <View style={{ }}>
        <ScrollView>
        <View style={{ }}>
          <Text style={TaskBdayStyle.TaskTitle}>Misbah Bday Party</Text>
          <Text style={TaskBdayStyle.expirationDate}>Expires Dec 31st, 2019</Text>
          <Text style={TaskBdayStyle.taskDetails}>Let’s all join together to plan a birthday party for our favorite engineer!</Text>

        </View>

      <View  style={{flexDirection:'row', marginTop:50, flex:1, marginLeft:20}}>
      <TouchableOpacity
          style={{
            backgroundColor: accentColor(mood),
            opacity: 0.7,
            paddingTop: 18/817 * height,
            borderRadius: 100,
            width: 159.52/375 * width,
            height: 63/817 * height,
          }}
            onPress={() => {
              this.props.navigation.navigate('ActionItemsMisbahBday', {mood: mood});
            }}
          >
            <Text style={{
              fontFamily:'Lato-Bold',
              fontSize: 18/375 * width,
              alignSelf: 'center',
              color: '#FFFFFF'
            }}> Action Items </Text>
          </TouchableOpacity>
      <TouchableOpacity
            style={{
              borderColor: accentColor(mood),
              backgroundColor: '#FFFFFF',
              paddingTop: 18/817 * height,
              opacity: 0.7,
              borderRadius: 100,
              width: 159.52/375 * width,
              height: 63/817 * height,
              borderWidth: 1,
              marginLeft:'auto',
              marginRight: 20/375 * width
            }}
            onPress={this.joinTheEvent.bind(this)}
          >
            <Text style={{
              fontSize: 18/375 * width,
              textAlign: 'center',
              fontFamily: 'Lato-Bold',
              color: accentColor(mood)
            }}> {this.state.joinedText} </Text>
          </TouchableOpacity>

        </View>


        <View style={{ marginLeft: 20/375 * width, marginTop: 50/817 * height}}>
          <Text style={TaskBdayStyle.collab}>COLLABORATORS</Text>
        </View>
        <View style={{flex:1, alignItems:"center", justifyContent:"space-evenly"}}>
          <Image
              source={require("../Images/collabButton3.png")}
              resizeMode='contain'
              style={{height: height * 0.3, width: height * 0.4}}
          />
      </View>
      </ScrollView>
      </View>


    );
  }
}

const TaskBdayStyle = StyleSheet.create({
  TaskTitle: {
    fontFamily: 'Lato-Bold',
    fontSize: 50/375 * width,
    paddingTop: 25/817 * height,
    paddingLeft: 20/375 * width,
  },
  heading: {
    fontSize: height * 0.035,
    alignSelf: "center",
    marginLeft: "auto",
    marginRight: "auto",
    fontFamily: 'Lato-Black'
  },
  expirationDate: {
    fontSize: 20/375 * width,
    paddingTop: 10/817 * height,
    paddingLeft: 20/375 * width,
    fontFamily:'Lato-Italic'
  },
  taskDetails:{
    fontSize: 20/375 * width,
    fontFamily:'Lato-Regular',
    paddingRight: 90/375 * width,
    marginTop: 30/817 * height,
    paddingLeft: 20/375 * width,
  },
  collab:{
    fontSize: 25/375 * width,
    fontFamily:'Lato-Regular',
  }

});
