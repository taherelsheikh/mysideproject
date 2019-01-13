import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, ScrollView } from "react-native";
import NameList from "./NameList";
import UpperSearchBar from "./UpperSearchBar";
import ButtonPlus from "./ButtonPlus";
import * as Animatable from 'react-native-animatable';



export default class Main extends React.Component {
    constructor(props) {
    super(props)
     this.state = {
         animation: "zoomIn"
     }
     this.animationfadeOutDown = this.animationfadeOutDown.bind(this)
   }

   animationfadeOutDown() {
       this.setState({animation: "fadeOutUp"})
   }

   test() {
       console.log("pancakes")
   }

  render() {
    return (
      <Animatable.View style={styles.Container} animation={this.state.animation} duration={200}>
       <UpperSearchBar/>
        <View >
          <NameList data={this.props.data} handlePage={this.props.handlePage}
          updateDataWhenDelete={this.props.updateDataWhenDelete}
          handleEdit={this.props.handleEdit} />
          <ButtonPlus handlePage={this.props.handlePage} data={this.props.data}
          animationfadeOutDown={this.animationfadeOutDown}/>
        </View>
      </Animatable.View>

    );
  }
}


const styles = StyleSheet.create({
  Container: {
    flex: 1,
    flexDirection: "column",
    position: "relative",
    top: 45
  }
});
