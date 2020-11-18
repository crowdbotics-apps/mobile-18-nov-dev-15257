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

  state = {}

  render = () => (
    <View>
      <Button
        title="Press me!"
        style={styles.Button_2}
        onPress={() => alert("Pressed!")}
      />
      <Button
        title="Press me!"
        color="#ff33c9"
        style={styles.Button_3}
        onPress={() => alert("Pressed!")}
      />
      <Button
        title="Press me!"
        color="#33ff3a"
        style={styles.Button_4}
        onPress={() => alert("Pressed!")}
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
  Button_2: { width: 100, alignSelf: "center" },
  Button_3: {
    width: 100,
    textDecorationLine: "underline overline",
    textTransform: "capitalize"
  },
  Button_4: {
    width: 100,
    alignSelf: "flex-end",
    textDecorationLine: "line-through",
    textTransform: "uppercase"
  }
})
