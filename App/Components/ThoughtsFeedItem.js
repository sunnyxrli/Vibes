import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, Image, ActivityIndicator, TouchableOpacity, Share, AsyncStorage } from 'react-native';
import { Metrics, Images, Colors } from '../Themes';
import { material } from 'react-native-typography';
import { Entypo, FontAwesome } from '@expo/vector-icons';
import styles from './Styles/FeedItem.styles';
import AppConfig from '../Config/AppConfig';

export default class ThoughtsFeedItem extends React.Component {
  static defaultProps = { content: {} }

  static propTypes = {
    content: PropTypes.object.isRequired,
    onProfilePressed: PropTypes.func,
  }

  state = {
    loading: false,
  }

  componentDidMount = async () => {
    const { content = {} } = this.props;
  }

  render() {
    const { content = {} } = this.props;
    console.log(content.text);

    return (
      <View style={styles.item}>
        <View style={styles.upperRow}>
          <Text style={material.headline}>{content.text}</Text>
        </View>
        <View style={styles.lowerRow}>
          <Entypo
            name="heart"
            size={Metrics.icons.small}
            color={Colors.ember} />
        </View>
      </View>
    );
  }

}
