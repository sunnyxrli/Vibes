import React from 'react';
import {
    Text,
    View,
  } from 'react-native';
import * as Font from 'expo-font';

import AppNavigation from './App/Navigation/AppNavigation';


export default class App extends React.Component {
    state = {
        fontLoaded: false,
    };

    async componentDidMount() {
        await Font.loadAsync({
          'vibes-nav-bar': require('./assets/fonts/vibes-nav-bar.ttf'),
        });
    
        this.setState({ fontLoaded: true });
    }

    render() {
        if (this.state.fontLoaded) {
            return <AppNavigation />
        } 
        return null;
      }
}