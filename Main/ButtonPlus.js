import React from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Image,
  Text,
  TouchableHighlight,
  TouchableOpacity
} from "react-native";

export default class ButtonPlus extends React.Component {
  render() {
    return (
      <View style={styles.buttonView}>
        <TouchableOpacity
          onPress={() => {
              this.props.animationfadeOutDown();
              setTimeout(()=>{this.props.handlePage("addName")}, 100)
                   }} style={styles.buttonTouch}>
              <Image style={styles.buttonImage}
                source={require("./Icons/Plussign.png")}
              />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonImage: {
    width: 30,
    height: 30
  },
  buttonView: {
    // marginRight: 40,
    position: "absolute",
    alignSelf: "flex-end",
    bottom: 30
    },
    buttonTouch : {
      width: 65,
      height: 65,
      borderRadius: 65 / 2,
      backgroundColor: "rgba(104,157,220,1)",
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      marginRight: 40

    }
});
