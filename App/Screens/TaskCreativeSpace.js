import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, ScrollView, ColorPropType , Alert} from 'react-native';
import { material } from 'react-native-typography';
// import Feed from '../Components/Feed';
import Home from '../Screens/HomeScreen';
import ActionItemsCreativeSpace from '../Screens/ActionItemsCreativeSpace';
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

export default class TaskCreativeSpace extends React.Component {
  state = {
    joined: false,
    joinedText: "Join",
  }
    constructor(props){
      super(props);
      console.log("got to team lunches");

      }

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Text style={TaskStyle.heading}>Task</Text>
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
      const joinedValue = await AsyncStorage.getItem('JoinedCreativeSpace');
      if (joinedValue === null){
        this.setState({ joined: false });
      }else {
        this.setState({ joined:  joinedValue=== "true" });
      }

      const joinedTextValue = await AsyncStorage.getItem('JoinedCreativeSpaceText');
      if (joinedTextValue === null || joinedTextValue === ""){
        this.setState({ joinedText: "Join" });
      }else{
        this.setState({ joinedText: joinedTextValue});
      }


    } catch (error) {
      // Error retrieving data
      console.log("Async storage error in retreival");
    }
    setInterval(() => (
      this.props.navigation.state.params.mood != accentColor(mood) ?
        this.updateMood() : ""
    ), 500);
  }

  async componentWillUnmount() {
    clearInterval(this.colorTimer);
    this._isMounted = false;
    try {
      await AsyncStorage.setItem('JoinedCreativeSpace', this.state.joined.toString());
      await AsyncStorage.setItem('JoinedCreativeSpaceText', this.state.joinedText.toString());
    } catch (error) {
      // Error saving data
      console.warn("async storage had a problem storying the data on unmount");
    }
  }

  joinTheEvent() {
    this.setState({ joined: !this.state.joined }, function () {
      console.log("new joined");
      console.log(this.state.joined);

      if (this.state.joined) {

        this.setState({joinedText: "Unjoin"});
        Alert.alert(
          'Joined Task',
          "Congratulations you've joined Creative Office Space!",
          [
            { text: "Vew Action Items", onPress: () => this.props.navigation.navigate('ActionItemsCreativeSpace', { mood: mood }) },
          ],
          { cancelable: false },
        );
      } else {

        this.setState({joinedText: "Join"});
        Alert.alert(
          'UnJoined Task',
          "You've left Creative Office Space.",
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
          <Text style={TaskStyle.TaskTitle}>Creative Office Space!</Text>
          <Text style={TaskStyle.expirationDate}>Expires Jan 1st, 2020</Text>
          <Text style={TaskStyle.taskDetails}>Let's make the office more welcoming!</Text>

        </View>

      <View  style={{flexDirection:'row', marginTop:50, flex:1, marginLeft:20}}>
      <TouchableOpacity
          style={{
            backgroundColor: accentColor(mood),
            opacity: 0.7,
            paddingTop: 18,
            borderRadius: 100,
            width: 159.52,
            height: 63,
          }}
            onPress={() => {
              this.props.navigation.navigate('ActionItemsCreativeSpace', {mood: mood});
            }}
          >
            <Text style={{
              fontFamily:'Lato-Bold',
              fontSize: 18,
              alignSelf: 'center',
              color: '#FFFFFF'
            }}> Action Items </Text>
          </TouchableOpacity>
      <TouchableOpacity
            style={{
              borderColor: accentColor(mood),
              backgroundColor: '#FFFFFF',
              paddingTop: 18,
              opacity: 0.7,
              borderRadius: 100,
              width: 159.52,
              height: 63,
              borderWidth: 1,
              marginLeft:'auto',
              marginRight:20
            }}
            onPress={this.joinTheEvent.bind(this)}
          >
            <Text style={{
              fontSize: 18,
              textAlign: 'center',
              fontFamily: 'Lato-Bold',
              color: accentColor(mood)
            }}> {this.state.joinedText} </Text>
          </TouchableOpacity>
        </View>

        <View style={{ marginLeft: 20, paddingTop: 50, marginTop:50}}>
          <Text style={TaskStyle.collab}>COLLABORATORS</Text>
        </View>
        <View style={{flex:1, alignItems:"center", justifyContent:"space-evenly"}}>
          <Image
              source={require("../Images/collabButton.png")}
              resizeMode='contain'
              style={{height: height * 0.3, width: height * 0.4}}
          />
      </View>
      </ScrollView>
      </View>


    );
  }
}

const TaskStyle = StyleSheet.create({







  // displayText: {
  //   flex: 1,
  //   fontSize: 40,
  //   fontStyle: 'italic',
  //   fontWeight: '200',
  //   color: 'black',
  //   padding: '15%',
  //   justifyContent: 'center',
  // },
  TaskTitle: {
    fontFamily: 'Lato-Bold',
    fontSize: 50,
    paddingTop: 25,
    paddingLeft: 20,
    paddingRight: 20
  },
  heading: {
    fontFamily: 'Lato-Black',
    fontSize: 22,
    textAlign: "center"
  },
  expirationDate: {
    fontSize: 20,
    paddingTop: 10,
    paddingLeft: 20,
    fontFamily:'Lato-Italic'
  },
  taskDetails:{
    fontSize: 20,
    fontFamily:'Lato-Regular',
    paddingRight: 90,
    marginTop: 30,
    paddingLeft: 20,
    lineHeight: 24
  },
  collab:{
    fontSize: 25,
    fontFamily:'Lato-Regular',
  }

});
