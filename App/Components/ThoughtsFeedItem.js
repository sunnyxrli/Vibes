import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, Image, ActivityIndicator, TouchableOpacity, Share, AsyncStorage } from 'react-native';
import { Metrics, Images, Colors } from '../Themes';
import { material } from 'react-native-typography';
import { Entypo, FontAwesome } from '@expo/vector-icons';
import styles from './Styles/FeedItem.styles';
import AppConfig from '../Config/AppConfig';
import ProfileImages from './ProfileImageCollection.js';


var textAccentColor = (color) => {
  if (color == '#F291C7') {
    return '#C50A7A'
  } else if (color == '#FCE781') {
    return '#E78B00'
  } else if (color == '#FEBB58') {
    return '#DD5D00'
  } else if (color == '#81CE63') {
    return '#167904'
  } else {
    return '#003498'
  }
}

export default class ThoughtsFeedItem extends React.Component {
  static defaultProps = { content: {} }

  static propTypes = {
    content: PropTypes.object.isRequired,
    onProfilePressed: PropTypes.func,
  }

  state = {
    loading: false,
    liked: false,
    favs: 0,
  }

  componentDidMount = async () => {
    const { content = {} } = this.props;
    this.setState({favs: content.favs});
    const { accentColor } = this.props;
  }

  likeThis = () => {
    const { content = {} } = this.props;
    this.setState({liked: !this.state.liked});
    if(this.state.liked) {
      this.setState({favs: content.favs});
    } else {
      this.setState({favs: content.favs + 1});
    }
  }

  render() {
    const { content = {} } = this.props;
    const actionText = content.action === "create" ? "CREATE TASK" : "VIEW TASK";
    const actionFontWeight = content.action === "create" ? "600" : "500";
    const actionFontColor = content.action === "create" ? textAccentColor(this.props.accentColor) : this.props.accentColor;

    return (
      <View style={{borderColor: this.props.accentColor, borderWidth: 1.5, margin: 5, marginTop: 3, padding: 2, borderRadius: 6}}>
        <View style={styles.upperRow}>
          <Image
            source={ProfileImages[content.profile]}
            style={{ width: 35, height: 35, marginTop: 5}}
          />
          <View style={styles.textContainer}>
            <Text style={{fontSize: 18}}>{content.text}</Text>
          </View>
        </View>
        <View style={styles.lowerRow}>
          <TouchableOpacity style={styles.textContainer}>
            <Text style={{fontSize: 18, fontWeight: actionFontWeight, color: actionFontColor}}>{actionText}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{flexDirection: 'row', justifyContent: 'space-between'}}
            onPress={this.likeThis}
          >
            <Entypo
            name={this.state.liked ? "heart" : "heart-outlined"}
            size={Metrics.icons.small}
            color={this.state.liked ? Colors.ember : Colors.coal} />
            <Text style={{fontSize: 18}}>{this.state.favs}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

}
