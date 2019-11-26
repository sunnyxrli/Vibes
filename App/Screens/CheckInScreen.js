import React from 'react';
import { StyleSheet, Text, View, AppRegistry, Alert, TouchableOpacity, Image, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import CircularSlider from '../Components/CircularSlider';


const homeScreenBackgroundColor = () => {
  return "#95B3ED";
}

const accentColor = () => {
  return "#003498";
}

export default class CheckInScreen extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return {
      headerStyle: {
        backgroundColor: homeScreenBackgroundColor(),
        borderBottomWidth: 0,
      }
    };
  };

  constructor(props) {
    super(props)
    this.state = {
      slider1: 110,
      mood: 'EXCITED'
    }
  }

  setMood(value) {
    this.setState({ slider1: value })
    if (value > 244 && value < 254) {
      this.setState({ mood: 'STRESSED' })
    } else if (value > 105 && value < 115) {
      this.setState({ mood: 'EXCITED' })
    } else if (value > 30 && value < 40) {
      this.setState({ mood: 'BORED' })
    } else if (value > 317 && value < 327) {
      this.setState({ mood: 'SAD' })
    } else if (value > 175 && value < 185) {
      this.setState({ mood: 'CONTENT' })
    }
  }

  getMoodColor() {
    if (this.state.mood == 'EXCITED') {
      return '#C50A7A'
    } else if (this.state.mood == 'CONTENT') {
      return '#E78B00'
    } else if (this.state.mood == 'BORED') {
      return '#DD5D00'
    } else if (this.state.mood == 'STRESSED') {
      return '#167904'
    } else {
      return '#003498'
    }
  }

  getMoodImage() {
    if (this.state.mood == 'EXCITED') {
      return excitedXml
    } else if (this.state.mood == 'CONTENT') {
      return contentXml
    } else if (this.state.mood == 'BORED') {
      return boredXml
    } else if (this.state.mood == 'STRESSED') {
      return stressedXml
    } else {
      return sadXml
    }
  }

  getBackgroundColor() {
    if (this.state.mood == 'EXCITED') {
      return excitedBackground
    } else if (this.state.mood == 'CONTENT') {
      return contentBackground
    } else if (this.state.mood == 'BORED') {
      return boredBackground
    } else if (this.state.mood == 'STRESSED') {
      return stressedBackground
    } else {
      return sadBackground
    }
  }

  getHoleColors() {
    if (this.state.mood == 'EXCITED') {
      return excitedHoleColors
    } else if (this.state.mood == 'CONTENT') {
      return contentHoleColors
    } else if (this.state.mood == 'BORED') {
      return boredHoleColors
    } else if (this.state.mood == 'STRESSED') {
      return stressedHoleColors
    } else {
      return sadHoleColors
    }
  }

  getMouthW() {
    if (this.state.mood == 'EXCITED') {
      return 161
    } else if (this.state.mood == 'CONTENT') {
      return 153
    } else if (this.state.mood == 'BORED') {
      return 160
    } else if (this.state.mood == 'STRESSED') {
      return 165
    } else {
      return 153
    }
  }

  getMouthHOffset() {
    if (this.state.mood == 'EXCITED') {
      return 10
    } else if (this.state.mood == 'CONTENT') {
      return 10
    } else if (this.state.mood == 'BORED') {
      return 10
    } else if (this.state.mood == 'STRESSED') {
      return 20
    } else {
      return 8
    }
  }

  render() {
    return (
      <LinearGradient
        colors={this.getBackgroundColor()}
        style={styles.root}
      >
        {/* //<View width={296} top={-30}> */}
          <Text style={{ width: 296, fontFamily: 'Lato-Regular', fontSize: 31.5, textAlign: 'center' }}>
            How have you been feeling this morning?
          </Text>
        {/* </View> */}
        <View style={styles.sliderAndButton}>
          <CircularSlider
            width={381}
            height={381}
            meterColor={this.getMoodColor()}
            textColor='black'
            value={this.state.slider1}
            moodFace={this.getMoodImage()}
            holeColors={this.getHoleColors()}
            mouthW={this.getMouthW()}
            mouthHOffset={this.getMouthHOffset()}
            onValueChange={(value) => this.setMood(value)}>
          </CircularSlider>
          <Text style={{ fontFamily: 'Lato-Black', fontSize: 45, textAlign: 'center', top: -20}}>
            {this.state.mood}
          </Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.navigate('HomeScreen', {mood: this.state.mood});

            }}
          >
            <Text style={styles.buttonText}> Check In </Text>
          </TouchableOpacity>
        </View>

      </LinearGradient>
    )
  };
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: homeScreenBackgroundColor(),
  },
  container: {
    position: 'relative',
    width: 286,
    height: 286
  },
  slider1: {
    position: 'absolute',
    top: 0,
    left: 0
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 68,
    paddingVertical: 21,
    opacity: 0.8,
    borderRadius: 214,
    width: 220,
    height: 63,
    alignSelf: "center",
    top: 25
  },
  buttonText: {
    fontFamily: 'Lato-Black',
    fontSize: 20,
    lineHeight: 22,
    textAlign: "center"
  },
  sliderAndButton: {
    flexDirection: "column",
    justifyContent: "center",
  },
})

const boredBackground = ['#FAC474', '#FAC474', '#DD5D00']
const excitedBackground = ['#F291C7', '#EB4EA5', '#B5006C']
const sadBackground = ['#95B3ED', '#95B3ED', '#003498']
const stressedBackground = ['#8EDA80', '#8EDA80', '#167904']
const contentBackground = ['#FCE781', '#FFD813', '#E78B00']

const sadHoleColors = ['#95B3ED', '#9AB3E8', '#708DCF']
const boredHoleColors = ['#FAC474', '#FAC474', '#F4AF5C']
const excitedHoleColors = ['#DE75B1', '#DB65A8', '#CF4E97']
const stressedHoleColors = ['#7AD259', '#63CB3D', '#48BE1C']
const contentHoleColors = ['#FCB92E', '#FDE04D', '#FCAB2E']

const sadXml = `<svg width="153" height="73" viewBox="0 0 153 73" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d)">
<path d="M143 58C138.482 39.2936 118.603 2.48757 75.2293 4.91434C31.856 7.34111 13.6709 41.3159 10 58" stroke="black" stroke-width="9" stroke-linecap="round"/>
</g>
<defs>
<filter id="filter0_d" x="0.499054" y="0.299866" width="152.002" height="72.2012" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset dy="5"/>
<feGaussianBlur stdDeviation="2.5"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.203922 0 0 0 0 0.596078 0 0 0 1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
</defs>
</svg>`

const contentXml = `<svg width="153" height="73" viewBox="0 0 153 73" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d)">
<path d="M10 4.79999C14.518 23.5064 34.3975 60.3124 77.7707 57.8857C121.144 55.4589 139.329 21.4841 143 4.79999" stroke="black" stroke-width="9" stroke-linecap="round"/>
</g>
<defs>
<filter id="filter0_d" x="0.498962" y="0.29895" width="152.002" height="72.2012" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset dy="5"/>
<feGaussianBlur stdDeviation="2.5"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.905882 0 0 0 0 0.545098 0 0 0 0 0 0 0 0 1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
</defs>
</svg>
`

const excitedXml = `<svg width="161" height="85" viewBox="0 0 161 85" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d)">
<path d="M78.9293 70C30.9502 70 4.85637 28.3924 10.8475 5H149.734C157.36 26.7537 130.127 70 78.9293 70Z" fill="#E96EB1" fill-opacity="0.71"/>
<path d="M78.9293 70C30.9502 70 4.85637 28.3924 10.8475 5H149.734C157.36 26.7537 130.127 70 78.9293 70Z" stroke="black" stroke-width="9" stroke-linejoin="round"/>
</g>
<defs>
<filter id="filter0_d" x="0.496399" y="0.5" width="160.011" height="84" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset dy="5"/>
<feGaussianBlur stdDeviation="2.5"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.709804 0 0 0 0 0 0 0 0 0 0.423529 0 0 0 1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
</defs>
</svg>
`

const stressedXml = `<svg width="165" height="46" viewBox="0 0 165 46" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d)">
<path d="M39.0001 19.0103C38.015 14.1175 33.6804 4.49061 24.223 5.12535C14.7656 5.76009 10.8005 14.6465 10 19.0103" stroke="black" stroke-width="9" stroke-linecap="round"/>
<path d="M97.0005 19.0103C96.0154 14.1175 91.6808 4.49061 82.2234 5.12535C72.7661 5.76009 68.8009 14.6465 68.0004 19.0103" stroke="black" stroke-width="9" stroke-linecap="round"/>
<path d="M97.0005 19.0103C97.9857 23.2915 102.32 31.7151 111.778 31.1597C121.235 30.6043 125.2 22.8287 126.001 19.0103" stroke="black" stroke-width="9" stroke-linecap="round"/>
<path d="M155 19.0103C154.015 14.1175 149.68 4.49061 140.223 5.12535C130.766 5.76009 126.8 14.6465 126 19.0103" stroke="black" stroke-width="9" stroke-linecap="round"/>
<path d="M39.0001 19.0103C39.9853 23.2915 44.3199 31.7151 53.7772 31.1597C63.2346 30.6043 67.1998 22.8287 68.0002 19.0103" stroke="black" stroke-width="9" stroke-linecap="round"/>
</g>
<defs>
<filter id="filter0_d" x="0.499237" y="0.594971" width="164.002" height="45.0911" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset dy="5"/>
<feGaussianBlur stdDeviation="2.5"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.0862745 0 0 0 0 0.47451 0 0 0 0 0.0156863 0 0 0 1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
</defs>
</svg>
`

const boredXml = `<svg width="160" height="71" viewBox="0 0 160 71" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d)">
<path d="M14 9.36365L146 51.9091" stroke="black" stroke-width="13.5149" stroke-linecap="round"/>
</g>
<defs>
<filter id="filter0_d" x="0.495361" y="0.859009" width="159.009" height="69.5547" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset dy="5"/>
<feGaussianBlur stdDeviation="2.5"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.3 0 0 0 0 0 0 0 0 0.5 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
</defs>
</svg>
`
