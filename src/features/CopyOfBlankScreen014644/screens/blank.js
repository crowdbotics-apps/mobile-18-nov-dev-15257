import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export default class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = { TextInput_5: "" }

  render = () => (
    <View>
      <Text style={styles.Text_2}>Sample text content</Text>
      <Button
        title="Press me!"
        style={styles.Button_3}
        onPress={() => alert("Pressed!")}
      />
      <Text>Sample text content</Text>
      <TextInput
        placeholder="Sample text input placeholder"
        multiline={true}
        value={this.state.TextInput_5}
        onChangeText={nextValue => this.setState({ TextInput_5: nextValue })}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16
  },
  View_1: {},
  Text_2: {
    width: 100,
    height: 100,
    alignSelf: "center",
    backgroundColor: "#d5b9b9",
    fontFamily: "Merriweather-Bold",
    textAlign: "center",
    textAlignVertical: "top",
    textDecorationLine: "underline overline",
    textTransform: "capitalize",
    lineHeight: 27,
    letterSpacing: 38
  },
  Button_3: { width: 100, height: 30, lineHeight: 29, letterSpacing: 23 },
  Text_4: {},
  TextInput_5: {}
})
