import React from "react";
import { StyleSheet, View, TextInput, Image, Text, TouchableOpacity, FlatList, RefreshControl,TouchableWithoutFeedback, Alert} from "react-native";
import Swiper from 'react-native-swiper';
import * as Animatable from 'react-native-animatable';
// import FileListData from '../../data/FileListData';


export default class NameList extends React.Component {
  constructor(props) {
  super(props)
  this.state= {
    indexState: 0,
    data : this.props.data,
    animate: "bounce",
    isFetching: false
    }
    this.removeRow = this.removeRow.bind(this);
    this.renderRow = this.renderRow.bind(this);
  }

  removeRow(item, index, test) {
      test.scrollBy(1)

      setTimeout(() => {
          let key = item.key
          let data = this.state.data
          data.splice(index, 1)
          this.props.updateDataWhenDelete(data)

          // this.setState({data: data})
      } , 200)
  }


showAlert(test,itemNo,indexNo, viewRefDelete) {
  let Index = test.state.index
  if (Index === 1) {
  Alert.alert(
    '',
    'Do you want to delete this name?',
    [
      {text: 'Delete', onPress: () =>  {this.removeRow(itemNo,indexNo, test)}, style: 'destructive', color: "red"},

      {text: 'No', onPress: () => {test.scrollBy(); }}
    ],
    { cancelable: false }
  )
}
}


bounce = (view) => view.bounceOut(400).then(endState => console.log(endState.finished ? 'bounce finished' : 'bounce canceled'));
// <TouchableWithoutFeedback onPress={() => this.bounce(viewRef)}>
// <Animatable.View style={{height: 95}} ref={(ref) => viewRef = ref}>

// onMomentumScrollEnd={()=>{this.showAlert(swiper)}}
// onMomentumScrollEnd={()=>{this.showAlert(swiper)}}

passOneEditObject(itemNo,indexNo) {
    this.props.handleEdit(itemNo,indexNo)
}

renderRow(itemNo, indexNo) {
  var viewRef;
  var swiper;
  return (

      <Animatable.View style={{ height: 70 }}>
        <Swiper
          style={styles.wrapper}
          showsButtons={false}
          showsPagination={false}
          loop={false}
          index={this.state.indexState}
          onMomentumScrollEnd={() => this.showAlert(swiper, itemNo, indexNo, viewRefDelete)}
          ref={ref => (swiper = ref)}
        >
          {/*<TouchableOpacity onPress={() => viewRef.bounceOut(400)}>*/}
          <TouchableOpacity onPress={() => {this.passOneEditObject(itemNo,indexNo)}}>
            <Animatable.View
              style={this.backgroundNameColor(indexNo)}
              ref={ref => (viewRef = ref)}
            >
              {/*<Animatable.View animation="bounce">*/}
                <View style={styles.NameMain}>
                  <View style={styles.NameMainAgain}>
                    <View style={styles.NameIconView}>
                      <View style={styles.NameIconCircle} />
                    </View>
                    <View style={styles.NameTextView}>
                      <Text style={styles.NameFontMain}>{itemNo.name}</Text>
                      <Text style={styles.NameFontSub}>{itemNo.associate}</Text>
                    </View>
                  </View>
                </View>
              {/*</Animatable.View>*/}
            </Animatable.View>
          </TouchableOpacity>

          <Animatable.View
            style={{
              flex: 1,
              alignItems: "flex-start",
              justifyContent: "center",
              flexDirection: "column",
              backgroundColor: "rgba(242,4,4,0.61)"
            }}
            ref={ref => (viewRefDelete = ref)}
          >
            <View
              style={{
                flex: 1,
                marginLeft: 30,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Image
                style={{ height: 25, width: 25, marginBottom: 4 }}
                source={require("./Icons/Trash.png")}
                resizeMode="contain"
              />
            </View>

          </Animatable.View>


        </Swiper>
        <View style={styles.nameBottomLine} />


      </Animatable.View>


  );
}


  backgroundNameColor(number) {
    if (number & 1)
    {
        return { backgroundColor: "#F9F9F9"}
    }
    else
    {
      return { backgroundColor: "white"}
    }
}

  TestingRow(item, index) {
      return (
          <View>
          <Text>lashinda</Text>
          <Text>lashinda</Text>
          </View>

      )
  }

  onRefresh() {
   this.props.handlePage("addName");
}


    render() {
      return (
         <View style={{height: 700
              // borderWidth: 1
          }}>
          <View
            style={{position:'absolute', backgroundColor: "#fafafa",
              width:"100%", height:50, alignItems:'center', justifyContent:'center'}}>
              <Image
                style={{ height: 20, width: 20, marginBottom: 4 }}
                source={require("./Icons/arrowDown.png")}
                resizeMode="contain"
              />
       </View>
          <FlatList
          refreshControl={
            <RefreshControl
            refreshing={false}
            tintColor='transparent'
                onRefresh={() => this.onRefresh()}
            />
          }
          data = {this.state.data}
          renderItem={({item, index})=> this.renderRow(item, index)}
          >
          </FlatList>
        </View>

      );
    }
  }


  const styles = StyleSheet.create({
    NameMainColor: {
      // backgroundColor: "rgba(155,155,155,0.03)"
      backgroundColor: "white"

    },

    NameMain: {
      // backgroundColor: "rgba(155,155,155,0.09)",
      height: 70,
      marginLeft: "5%", // Replace by 20
      marginRight: "5%", // Replace by 20,
      // marginBottom: 1, // Replace by 20,
      padding: 0

    },
    nameBottomLine: {
      borderBottomColor: "rgba(151,151,151,0.40)",
      borderBottomWidth: 0.5,
      // marginTop: 10,
      // marginBottom: 10,
      marginLeft: "10%"// Replace by 20
  },
    NameIconCircle: {
      width: 50,
      height: 50,
      borderRadius: 50 / 2,
      backgroundColor: "white",
      borderColor: "#9B9B9B",
      borderWidth: 0.5
    },
    NameMainAgain: {
      flex: 1,
      flexDirection: "row",
      height: "100%",
      width: "100%",
      paddingLeft: "6%"
    },
    NameIconView: {
      // backgroundColor: "rgba(155,155,155,0.10)",
      flex: 1,
      alignItems: "center",
      justifyContent: "center"
    },
    NameTextView: {
      // backgroundColor: "rgba(155,155,155,0.14)",
      flex:4,
      flexDirection: "column",
      padding: 10,
      justifyContent: "center"
    },
    NameFontMain: {
      fontSize: 20,
      fontWeight: "400",
      fontFamily: "PingFangSC-Thin",
      color:"rgba(0,0,0,0.6)"

    },
    NameFontSub: {
      fontSize: 16,
      fontWeight: "200",
      fontFamily: "PingFangSC-Thin",
      color:"rgba(0,0,0,0.6)"

    } ,
    Container: {
      flex: 1,
      flexDirection: "column",
      position: "relative",
      top: 90
       },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    }
  });
