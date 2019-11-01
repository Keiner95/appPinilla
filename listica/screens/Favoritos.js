import React, { Component } from 'react'
import { Dimensions, Image, StyleSheet, ScrollView, TouchableOpacity, Linking, ImageBackground, View,Alert } from 'react-native'
import{LinearGradient} from 'expo-linear-gradient'
import {Ionicons} from 'react-native-vector-icons';

import { Card, Badge, Button, Block, Text } from '../components';
import { theme } from '../constants';


const { width } = Dimensions.get('window');

class Favoritos extends Component {

  // static navigationOptions = ({navigation}) => {
  //   return {
  //     headerTitle:'MEALS DELIVERY',
  //     headerTitleStyle: {
  //       flex: 1,
  //       color: '#fff',
  //       textAlign: 'center',
  //       alignSelf: 'center',
  //       fontWeight: 'normal',
  //       fontSize: 16,
  //     },

  //     headerStyle: {
  //       backgroundColor: '#B3A332',
  //     },
  //   }
  // }

  
  render() {
    const {  navigation } = this.props;
    
      
  
    return (

      
      <View style={styles.back} >
        <Text>HOla</Text>
       
      </View>
    )
  }
}

// Browse.defaultProps = {
//   profile: mocks.profile,
//   categories: mocks.categories,
// }

export default Favoritos;

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    backgroundColor:'#B3A332', 
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    alignContent:'center',

  },
  viewHeader:{
    height:'15%',
    backgroundColor:'#B3A332', 
  },
  back:{
  flex:1
  },
deli:{
  width:55,
  height:55,

  
  },
  deli2:{
    width:'15%',
    height:50,

   
  },
  linearGradient: {
   padding:12,
    marginVertical:12,
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
    borderRadius: 10,
    borderColor:'white',
    borderWidth: 2,
    width:325,
    height:80,
       
    alignContent:'center',

  },
  buttonText: {
    fontSize: 15,  
    textAlign: 'left',
    color: '#ffffff',
    backgroundColor: 'transparent',
    marginVertical:12,
    padding:12,
    width:'85%'
  
  },
  text:{
    fontSize:18,
    color:'white'
  

  },
  view1:{
    height:300,
  },
  view2:{
   display:'flex',
   alignItems:'center',
   height:'85%',
  },
  
})
