import React from "react";
import { StyleSheet, View, TextInput, Image, Text, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback } from "react-native";
import DoneButton from "./DoneButton";
// import TestingRotate from "./TestingRotate";
import * as Animatable from 'react-native-animatable';
// import TestingRotate from "./TestingRotate";

export default class AddName extends React.Component {
 constructor(props) {
 super(props)
  this.state = {
      nameInput: "",
      assoicateInput: "",
      animation: "zoomIn",
      editObject: this.props.editObject,
      editIndex: this.props.editIndex
  }
  this.animationfadeOutDown = this.animationfadeOutDown.bind(this)
  this.editFired = this.editFired.bind(this)
}

  ChangeDoneButton() {
      if (this.state.nameInput.length > 0) {
          this.refs.DoneButton.rotateAndColor(true)
      } else {
          this.refs.DoneButton.rotateAndColor(false)
      }

  }

  animationfadeOutDown() {
      this.setState({animation: "fadeOutUp"})
  }

  editFired() {
      console.log("itemNo")
  }

  inputMustBeCharacter(text) {
      if (/[^a-zA-Z]/.test(text)){
          // emojis
          // numbers
          console.log(true)
      } else {
          // letters
          console.log(false)
      }
   }


  render() {
    return (
        <Animatable.View style={styles.NameMainAgain} animation={this.state.animation} duration={100}>
         <View style={styles.NameBackgroundBar1}>
           {/* circle */}
         <View style={styles.NameIconCircle}>
         <View style={styles.NameIconCircleAgain}>
         <View>
        <TextInput
        style={styles.circleFont}
        maxLength = {10}
        textAlign={'center'}
        autoCapitalize={'none'}
        onChangeText={(text)=> {this.inputMustBeCharacter(text)}}/>
        </View>
            </View>
            </View>

         </View>
         <View style={styles.NameBackgroundBar2}>
         {/* inputs */}
         <View style={styles.NameTextView}>
           <TextInput
             style={styles.NameFontMain}
             autoFocus={true}
             selectionColor={"rgba(104,157,220,0.78)"}
             placeholder="Name..."
             placeholderTextColor="rgba(155,155,155,0.30)"
             onChangeText={(text)=>this.setState({nameInput:text}, () => {this.ChangeDoneButton()})}
             // value={this.state.nameInput}
             value={this.state.editObject.name}
           />
           <TextInput
             style={styles.NameFontSub}
             selectionColor={"rgba(104,157,220,0.28)"}
             placeholder="Mnemonic device..."
             placeholderTextColor="rgba(155,155,155,0.50)"
             onChangeText={(text)=> this.setState({assoicateInput:text})}
             // value={this.state.assoicateInput}
             value={this.state.editObject.associate}

           />
           </View>
           <DoneButton ref="DoneButton" nameInput={this.state.nameInput}
           assoicateInput={this.state.assoicateInput} data={this.props.data}
           updateDataWhenRowAdded= {this.props.updateDataWhenRowAdded}
           animationfadeOutDown={this.animationfadeOutDown} />

           <TouchableOpacity style={styles.NameCloseView}
             onPress={() => {
              this.animationfadeOutDown();
              setTimeout(()=>{this.props.handlePage("Main")}, 100)
             }} >

           <Image style={styles.NameCloseIcon}
             source={require("./Icons/closeIconLight.png")}
           />
           </TouchableOpacity>
         </View>
        </Animatable.View>


    );
  }
}

const styles = StyleSheet.create({
  NameCloseView: {
    position: "absolute",
    top:60,
    left: 220
  },
  NameCloseIcon: {
  height: 30,
  width: 30
  },
  NameBackgroundBar1: {
   flex: 0.8,
   height: "100%",
   // flexDirection: "column",
   backgroundColor: "rgba(155,155,155,0.08)",
   alignItems: "center",
   justifyContent: "center"

  },
  NameBackgroundBar2: {
    flex: 2,
    // width: 40,
    height: "100%"
  },
  NameButtonTest : {
    position: "relative",
    top: -170
  },
  // NameContainer: {
  //   flex: 1,
  //   position: "relative",
  //   top: -215,
  //   height: "100%"
  // },
  NameFontMain: {
    fontSize: 25,
    fontWeight: "400",
    fontFamily: "PingFangSC-Thin",
    color: "rgba(0,0,0,0.6)"
  },
  NameFontSub: {
    fontSize: 19,
    fontWeight: "200",
    fontFamily: "PingFangSC-Thin",
    color: "rgba(0,0,0,0.6)"
  },
  NameMain: {
    flex: 1,
    padding: 0
  },
  NameIconCircle: {
    // width: 60,
    // height: 60,
    // borderRadius: 60 / 2,
    // backgroundColor: "white",
    // borderColor: "#9B9B9B",
    // borderWidth: 0.5,
    // marginLeft: 10,
    position: "relative",
    top: -185,
    // justifyContent: "center",
    // alignItems:"center",
    // flexDirection: 'column',


    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',


},
NameIconCircleAgain: {
    width: 60,
          height: 60,
          borderRadius: 60 / 2,
          backgroundColor:"#9B9B9B",
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'

},
  NameMainAgain: {
    flex: 1,
    flexDirection: "row",
    height: 900
  },
  NameIconView: {
    // backgroundColor: "rgba(155,155,155,0.08)",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  NameTextView: {
    // backgroundColor: "rgba(155,155,155,0.14)",
    flex: 1,
    flexDirection: "column",
    padding: 10,
    justifyContent: "center",
    position: "relative",
    top: -170

} ,
  // circleTextView: {
  //         height:40,
  //         width:35,
  //         backgroundColor: "rgba(155,155,155,0.08)",
  //         alignItems: 'center',
  //         justifyContent: 'center',
  //         flexDirection: 'column'
  //     },
      circleFont: {
          fontSize: 30,
          fontWeight: "300",
          fontFamily: "PingFangSC-Thin",
          color: "rgba(0,0,0,0.6)",
          width: 60, height: 60,
          borderRadius: 60 / 2,
          backgroundColor:"white",

      }

});
