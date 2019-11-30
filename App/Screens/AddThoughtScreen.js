import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, TouchableWithoutFeedback, Keyboard, Image, Dimensions, TextInput } from 'react-native';
import { material, human } from 'react-native-typography';
import { Entypo, FontAwesome } from '@expo/vector-icons';
import ThoughtsFeed from '../Components/ThoughtsFeed';
import { getFeedData } from '../Components/ThoughtsFeed';
import Home from '../Screens/HomeScreen';
import firestore from '../../firebase.js';
import firebase from 'firebase';

var { height, width } = Dimensions.get('window');

var homeScreenBackgroundColor = (mood) => {
  if (mood == 'EXCITED') {
    return '#F291C7'
  } else if (mood == 'CONTENT') {
    return '#FCE781'
  } else if (mood == 'BORED') {
    return '#FEBB58'
  } else if (mood == 'STRESSED') {
    return '#81CE63'
  } else {
    return '#95B3ED'
  }
}

var accentColor = (mood) => {
  if (mood == 'EXCITED') {
    return '#B5006C'
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
const styles = StyleSheet.create({
    heading: {
        fontFamily: 'Lato-Black',
        fontSize: 22,
        textAlign: "center"
    }
})

export default class ThoughtsScreen extends React.Component {

  onChangeText = text => {
    this.setState({thoughtText: text});
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: (
        <View style={{flexDirection: 'row', flex: 1, justifyContent: "center"}}>
          <Text style={material.title}>ADD THOUGHT</Text>
        </View>
      ),
      headerStyle: {
        backgroundColor: homeScreenBackgroundColor(mood),
        borderBottomWidth: 0,
        height: 35,
      }
    };
  };

  state = {
    thoughtText: "",
    anonymous: true,
  };

  postThought(){
    var date = new Date();
    console.log(date);
    firestore.collection("Thoughts").doc(date.toString()).set({
        action: "create",
        favs: "",
        profile: this.state.anonymous ? "anon" : "charlie",
        text: this.state.thoughtText,
    })
    this.props.navigation.navigate('ThoughtsScreen', {mood: true});
  }

  componentDidMount(){
  }

  toggleAnonymous = (value) => {
    this.setState({anonymous: value});
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress = {() => Keyboard.dismiss()}>
        <SafeAreaView style={thoughtsStyles.container}>
            <Text style={human.largeTitle}>Add a Thought</Text>
            <TextInput
                style={thoughtsStyles.textinput}
                onChangeText={text => this.onChangeText(text)}
                value={this.state.thoughtText}
                placeholder="I think ..."
                multiline={true}
            />
            <View style={{marginTop: 10, alignSelf: "center"}}>
              <Text style={human.title2}>Post as</Text>
            </View>
            <View>
              {this.getTabContent()}
            </View>
            <TouchableOpacity
            style={{
              backgroundColor: accentColor(mood),
              opacity: 0.9,
              paddingTop: 17,
              borderRadius: 100,
              width: 150,
              height: 56,
              alignSelf: "center",
              marginTop: 20,
            }}
              onPress={() => {
                this.postThought()
              }}
            >
              <Text style={{
                fontFamily:'Lato-Bold',
                fontSize: 18,
                alignSelf: 'center',
                color: '#FFFFFF'
              }}> POST </Text>
            </TouchableOpacity>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    );
  }

  getTabContent = () => {
    console.log(this.state.anonymous)
    return (
      <View style={{marginTop: 10, alignSelf: "center", flexDirection: "row"}}>
        <View style={{opacity: this.state.anonymous ? 1 : 0.2}}>
          <TouchableOpacity style ={{marginRight: height * 0.025}}
          onPress={() => this.toggleAnonymous(true)}>
            <Image
              source={require("../../App/Images/ProfileImages/anon-icon.png")}
              style={{height: 70, width: 70, alignSelf: "center", borderColor: this.state.anonymous ? accentColor(mood) : "white", borderWidth: 3, borderRadius: 35}}
            />
            <Text style={{color: this.state.anonymous ? accentColor(mood) : "#000", alignSelf: "center"}}>ANONYMOUS</Text>
          </TouchableOpacity>
        </View>
        <View style={{opacity: this.state.anonymous ? 0.2 : 1}}>
        <TouchableOpacity style={{marginLeft: height * 0.025}}
        onPress={() => this.toggleAnonymous(false)}>
            <Image
              source={require("../../App/Images/ProfileImages/charlie.png")}
              style={{height: 70,
              width: 70,
              alignSelf: "center",
              marginBottom: 1,
              borderColor: this.state.anonymous ? "white" : accentColor(mood),
              borderWidth: 3,
              borderRadius: 35}}
            />
            <Text style={{color: this.state.anonymous ? "#000" : accentColor(mood), alignSelf: "center"}}>CHARLIE</Text>
        </TouchableOpacity>
        </View>
      </View>
    );
  }

}

const thoughtsStyles = StyleSheet.create({
  container: {
    margin: 15,
    flex: 1,
  },
  SearchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    margin: 5,
    borderRadius: 10
  },
  textinput: {
    height: height * 0.4,
    borderRadius: 10,
    padding: 20,
    paddingTop: 10,
    marginTop: 10,
    borderColor: '#AAA',
    borderWidth: 1.5,
    fontSize: 20,
    color: '#555',
  },
  Image: {
    justifyContent: 'flex-end',
    marginEnd: 10,
    flex: 2,
  }
});
