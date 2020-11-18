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

  state = {
    TextInput_5: "",
    TextInput_6: "",
    DateTimePicker_7: new Date(""),
    Switch_8: true
  }

  render = () => (
    <View>
      <Button title="Press me!" onPress={() => alert("Pressed!")} />
      <Text>Sample text content</Text>
      <Text>Sample text content</Text>
      <TextInput
        placeholder="Sample text input placeholder"
        value={this.state.TextInput_5}
        onChangeText={nextValue => this.setState({ TextInput_5: nextValue })}
      />
      <TextInput
        placeholder="Number Input Placeholder"
        keyboardType="numeric"
        value={this.state.TextInput_6}
        onChangeText={nextValue => this.setState({ TextInput_6: nextValue })}
      />
      <DateTimePicker
        showIcon={false}
        date={this.state.DateTimePicker_7}
        onDateChange={selectedDate =>
          this.setState({ DateTimePicker_7: selectedDate })
        }
      />
      <Switch
        activeColor="#409EFF"
        inactiveColor="#C0CCDA"
        disabled={false}
        trackColor={{ false: "#C0CCDA", true: "#409EFF" }}
        style={styles.Switch_8}
        value={this.state.Switch_8}
        onValueChange={nextChecked => this.setState({ Switch_8: nextChecked })}
      />
      <Slider
        value={50}
        minimumValue={0}
        maximumValue={100}
        style={styles.Slider_9}
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
  Button_2: {},
  Text_3: {},
  View_1: {},
  Button_2: {},
  Text_3: {},
  Text_4: {},
  TextInput_5: {},
  TextInput_6: {},
  DateTimePicker_7: {},
  Switch_8: { alignSelf: "flex-start" },
  Slider_9: { width: 100 }
})
