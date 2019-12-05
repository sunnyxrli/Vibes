import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, ScrollView } from 'react-native';
import { material } from 'react-native-typography';
import Home from '../Screens/HomeScreen';
import CalendarPicker from 'react-native-calendar-picker';
import { StackActions, NavigationActions } from 'react-navigation';

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
  constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: null,
    };
    this.onDateChange = this.onDateChange.bind(this);
  }

  onDateChange(date) {
    this.setState({
      selectedStartDate: date,
    });
  }

  disableDates(date) {
  	wanted_date = new Date(2019, 11, 19);
  	format_wanted_date = wanted_date.getFullYear() + "-" + (wanted_date.getMonth()+1) + "-" + wanted_date.getDate()
  	format_curr_date = date.utc().format('YYYY-MM-DD');
  	if (format_curr_date === format_wanted_date) {
  		return false;
  	} else {
  		return true;
  	}
  }

  updateMood = () => {
    if(!this.props.navigation) {
      return;
    }
    this.setState({mood: this.props.navigation.state.params.mood});
  }

  componentDidMount(){
    setInterval(() => (
      this.props.navigation.state.params.mood != accentColor(mood) ?
      this.updateMood() : ""
    ), 500);
  }

  static navigationOptions = ({ navigation }) => {
    return {
	    headerRight: () => (
	        <TouchableOpacity
	          style={{
	          	marginTop: 2,
	            marginRight: 10,
	          }}
            onPress={() => {
              const resetAction = StackActions.reset({
                index: 0,
                actions: [NavigationActions.navigate({ routeName: 'ThoughtsScreen' })],
              });
              navigation.dispatch(resetAction);
            }}
	        >
	          <Text style={{
	            fontFamily:'Lato-Regular',
	            fontSize: 17,
	            alignSelf: 'center',
	            color: '#007AFF',
	          }}>Cancel</Text>
	        </TouchableOpacity>
	    ),
      	headerTintColor: 'black',
        headerStyle: {
	        backgroundColor: 'white',
	        borderBottomWidth: 0,
      	}
    };
  };

  render() {
    const { selectedStartDate } = this.state;
    const startDate = selectedStartDate ? selectedStartDate.toString() : '';
    return (
      <View style={{ flex: 1 }}>
        <Text style={{
          fontFamily:'Lato-Bold',
          fontSize: 40,
          textAlign: 'left',
          marginTop: 10,
          marginBottom: 10,
          marginLeft: 20,
        }}>Create Task</Text>
        <Text style={{
          fontFamily:'Lato-Italic',
          fontSize: 20,
          textAlign: 'left',
          marginTop: 0,
          marginBottom: 60,
          marginLeft: 20,
        }}>Finish task by</Text>
        <CalendarPicker
          onDateChange={this.onDateChange}
          disabledDates={this.disableDates}
          selectedDayColor={accentColor(mood)}
          selectedDayTextColor='white'
        />
        <TouchableOpacity
          style={{
            backgroundColor: accentColor(mood),
            opacity: 0.8,
            borderRadius: 7,
            width: 196,
            height: 41,
            alignSelf: 'center',
            marginTop: 50,
            flex: 1,
		    justifyContent: 'center',
		    alignItems: 'center'
          }}
          onPress={() => {this.props.navigation.navigate('CreateTaskThree', {mood: mood})}}
        >
          <Text style={{
            fontFamily:'Lato-Bold',
            fontSize: 20,
            alignSelf: 'center',
            color: '#FFFFFF',
            textAlign: 'center',
            lineHeight: 20,
          }}>NEXT</Text>
        </TouchableOpacity>
        <View style={styles.container}>
          <View style={styles.CircleShapeView}>
          </View>
          <View style={{
            width: 12,
            height: 12,
            borderRadius: 12/2,
            opacity: 0.8,
            marginLeft: 20,
            marginRight: 10,
            backgroundColor: accentColor(mood),
          }}>
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
    height: 200,
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
    height: 250,
    width: width * 0.95,
    padding: 0,
    margin: 0,
    marginLeft: 10,
  },
});
