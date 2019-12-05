
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions } from 'react-native';
import { material } from 'react-native-typography';
import ThoughtsFeed from '../Components/ThoughtsFeed';
import Home from '../Screens/HomeScreen';

var { height, width } = Dimensions.get('window');

export default class LogInScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = { showPassword: false };
    }

    setShowPassword() {
        this.setState({ showPassword: true });
    }

    static navigationOptions = ({ navigation }) => {
        return {
            headerStyle: {
                borderBottomWidth: 0,
                height: 0,
            },
            headerTitleStyle: {
                flex: 1,
                alignSelf: "center",
                marginLeft: "auto",
                marginRight: "auto"
            },
        };
    };

    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
                <Image
                    source={require('../Images/ProfileImages/charlie.png')}
                    style={{ height: width * 0.285, width: width * 0.285, alignContent: 'center', marginTop: height * 0.2 }}
                    resizeMode='contain'
                />
                <Image
                    source={require('../Images/loginUsername.png')}
                    style={{ height: height * 0.064, width: width * 0.776, alignContent: 'center', marginTop: height * 0.0575 }}
                    resizeMode='contain'
                />
                <TouchableOpacity
                    activeOpacity={1.0}
                    onPress={() => this.setShowPassword()}
                >
                    <Image
                        source={this.state.showPassword ? require('../Images/filledPassword.png') : require('../Images/password.png')}
                        style={{ height: height * 0.064, width: width * 0.776, alignContent: 'center', margin: height * 0.011 }}
                        resizeMode='contain'
                    />
                </TouchableOpacity>


                <TouchableOpacity
                    style={{
                        backgroundColor: '#828282',
                        borderRadius: 7,
                        width: width * 0.52,
                        height: height * 0.064,
                        justifyContent: 'center',
                        marginTop: height * 0.069,
                    }}
                    onPress={() => { if (this.state.showPassword) { this.props.navigation.replace('CheckInScreen')} } }
                >
                    <Text style={{
                        fontFamily: 'Lato-Bold',
                        fontSize: width * 0.067,
                        textAlign: 'center',
                        color: 'white'
                    }}>LOGIN</Text>
                </TouchableOpacity>

                <Image
                    source={require('../Images/vibesLogo.png')}
                    style={{ height: height * 0.073, width: width * 0.22, alignContent: 'center', marginTop: height * 0.15 }}
                    resizeMode='contain'
                />
            </View>
        );
    }
}

