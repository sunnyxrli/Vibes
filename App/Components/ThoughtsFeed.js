import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, FlatList, ActivityIndicator, SafeAreaView } from 'react-native';
import { getPopularPhotos } from '../API/Unsplash.js';
import { material } from 'react-native-typography';
import { Metrics } from '../Themes';
import ThoughtsFeedItem from '../Components/ThoughtsFeedItem';
import { Entypo } from '@expo/vector-icons';
import firestore from '../../firebase.js';
import firebase from 'firebase';

export default class ThoughtsFeed extends React.Component {

  static defaultProps = { content: null }

  state = {
    loading: true,
    feedEntries: [],
    moodColor: "",
    new: true,
  }

  componentDidMount(){
    if (this.props.content) {
      this.setState({feedEntries: this.props.content});
    } else {
      this.getFeedData();
    }
    setInterval(() => (
      this.state.moodColor != this.props.accentColor ?
        this.getFeedData() : ""
    ), 500);
  }

  getFeedData = async () => {
      this.setState({loading: true});
      try {
        let feedEntriesRef = firestore.collection('Thoughts');
        let allEntries = await feedEntriesRef.get();
        if(this.state.new) {
          allEntries.forEach((thought) => {
            this.state.feedEntries.push(thought.data());
          })
        }
      } catch (error) {
        console.log(error);
      }
      this.setState({loading: false});
      this.setState({moodColor: this.props.accentColor});
      this.setState({new: false})
      return ([]);
  }

  onProfilePressed = (username) => {
    if(username) {
      this.props.onProfileRequested(username);
    }
  }

  renderItem = ({item}) => {
    return (
      <ThoughtsFeedItem
        content={item}
        onProfilePressed={this.onProfilePressed}
        accentColor={this.props.accentColor}
      />
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this.getTabContent()}
      </View>
    );
  }

  getTabContent = () => {
    const { loading } = this.state;
    if (loading) {
      return (
        <ActivityIndicator />
      );
    } else {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
            data={this.state.feedEntries}
            renderItem={this.renderItem}
            keyExtractor={ (item, index) => index.toString()}
        />
      </SafeAreaView>
      );
    }

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
