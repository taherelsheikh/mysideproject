import React from "react";
import { StyleSheet, View, TextInput, Image, Text } from "react-native";

export default class UpperSearchBar extends React.Component {
  render() {
    return (
      <View>
      <View style={styles.searchMain}>
        <View style={styles.searchView}>
          <Image
            style={styles.searchIcon}
            source={require("./Icons/Search.png")}
          />
          <TextInput style={styles.searchInput}  placeholder="Search" />
        </View>
      </View>
      <View style={styles.searchBottomLine} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  searchMain: {
    height: 40
    },
  searchBottomLine: {
    borderBottomColor: "rgba(151,151,151,0.40)",
    borderBottomWidth: 1,
    marginTop: 10

},
  searchView: {
    backgroundColor: "rgba(155,155,155,0.09)",
    borderRadius: 11,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginLeft: "5%", // Replace by 20
    marginRight: "5%"// Replace by 20

  },
  searchInput: {
    position: "relative",
    left: 12
  },
  searchIcon: {
    width: 20,
    height: 20,
    position: "relative",
    left: 7
  }
});
