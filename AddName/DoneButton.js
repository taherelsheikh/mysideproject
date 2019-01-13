/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  // previously imported modules
  Animated, // provides methods for animating components
  Easing, // for implementing easing functions
  TouchableWithoutFeedback,
  StyleSheet,
  View,
  Text,
  Content,
  TouchableOpacity,
  TouchableHighlight
} from "react-native";



export default class DoneButton extends Component {
        constructor(props) {
      super(props)

      this.state = {
         viewValue : new Animated.Value(0),
         textValue : new Animated.Value(0),
         // viewColor: new Animated.Value(0)
         color: "rgba(155,155,155,0.40)",
         TextColor: "black"

  }
  this.generateKey = this.generateKey.bind(this)
  this.newRowInput = this.newRowInput.bind(this)

}

generateKey(newName, newAssociate) {
   this.props.animationfadeOutDown()

   var randomString = require('random-string');
   var newKey = randomString({
  length: 7,
  numeric: true,
  letters: true,
  special: false})

  setTimeout(()=>{this.newRowInput(newName, newName, newAssociate )}, 100)

}

newRowInput(newKey, newName, newAssociate) {
    let newData = {
        key: newKey, name: newName, associate: newAssociate
    }
    // console.log(newData)

    this.props.updateDataWhenRowAdded(newData)

    // let data = this.props.data
    // data.push(newData)
    // this.props.updateDataWhenRowAdded(newData)


}


rotateAndColor(rotate) {
    if (rotate && this.state.color === 'rgba(155,155,155,0.40)') {
        this.state.viewValue.setValue(0);
        this.state.textValue.setValue(0);

        Animated.parallel([
            Animated.timing(
              this.state.viewValue,
              {
                toValue: 1,
                duration: 200,
                easing: Easing.linear,
                useNativeDriver: true//<---Add this
            }),
            Animated.timing(
              this.state.textValue,
              {
                toValue: 1,
                duration: 200,
                easing: Easing.linear,
                useNativeDriver: true//<---Add this
            })
        ]).start()
        this.setState({
        color: 'rgba(104,157,220,1)' ,
        TextColor: 'white'
        // color: this.state.color == 'rgba(155,155,155,0.40)' ? 'rgba(104,157,220,1)' : 'rgba(155,155,155,0.40)',
        // TextColor: this.state.TextColor == 'black' ? 'white' : 'black',
    })
    }
    if (rotate ===false && this.state.color === 'rgba(104,157,220,1)') {
        this.state.viewValue.setValue(0);
        this.state.textValue.setValue(0);

        Animated.parallel([
            Animated.timing(
              this.state.viewValue,
              {
                toValue: 1,
                duration: 200,
                easing: Easing.linear,
                useNativeDriver: true//<---Add this
            }),
            Animated.timing(
              this.state.textValue,
              {
                toValue: 1,
                duration: 200,
                easing: Easing.linear,
                useNativeDriver: true//<---Add this
            })
        ]).start()
        this.setState({
        color: 'rgba(155,155,155,0.40)' ,
        TextColor: 'black'
        // color: this.state.color == 'rgba(155,155,155,0.40)' ? 'rgba(104,157,220,1)' : 'rgba(155,155,155,0.40)',
        // TextColor: this.state.TextColor == 'black' ? 'white' : 'black',
    })
    }
}




    render() {

    return (
            <View style={{ alignSelf: "flex-end", bottom: 350, marginRight: 20}}>
            <TouchableOpacity onPress={()=>{this.generateKey(this.props.nameInput, this.props.assoicateInput)}}>
                 <Animated.View style={{
                     width:65,
                     height: 30,
                     borderRadius: 5,
                     alignItems: "center",
                     justifyContent: 'center',
                     transform: [{
                       rotateX: this.state.viewValue.interpolate({
                           inputRange: [0, 1],
                           outputRange: ['0deg', '180deg']
                         })
                     }],
                     backgroundColor: this.state.color
                  }} >
                  <Animated.Text style={{color: this.state.TextColor,
                  transform: [{
                    rotateX: this.state.textValue.interpolate({
                        inputRange: [0, 1],
                        outputRange: ['0deg', '180deg']
                      })
                  }]
                  }}>
                  Done
                  </Animated.Text>
                 </Animated.View>
                 </TouchableOpacity>


        </View>
    );


  }
}
