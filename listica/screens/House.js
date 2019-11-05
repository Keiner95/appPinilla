import React, { Component } from 'react'
import { Dimensions, Image, StyleSheet, ScrollView, TouchableOpacity, Linking, ImageBackground, View,Alert } from 'react-native'
import{LinearGradient} from 'expo-linear-gradient'

import { Card, Badge, Button, Block, Text } from '../components';
import { theme } from '../constants';
import {Ionicons} from 'react-native-vector-icons';


const { width } = Dimensions.get('window');

class House extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      headerTitle:'HOME',
      headerRight:<Ionicons style={{marginRight:10}} name="md-menu" size={32} color='white' onPress={()=>navigation.openDrawer()}/>,
      headerLeft:<Ionicons style={{marginLeft:10}} name="md-arrow-back" size={32} color='white' onPress={()=>navigation.goBack()}/>,

      headerTitleStyle: {
        flex: 1,
        color: '#fff',
        textAlign: 'center',
        alignSelf: 'center',
        fontWeight: 'normal',
        fontSize: 16,
        fontFamily:'Arial_Rounded_MT'
        
      },

      headerStyle: {
        backgroundColor: '#7c0000',
        color: '#fff',
        height:35
      },
    }
  }

  
  render() {
    const {  navigation } = this.props;
    
      
  
    return (

      
      <View style={styles.back} >
          <ImageBackground source={require('../assets/Fondos/HOME.png')} 
          style={{
          
            flex: 1,         
            position: 'absolute',
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            resizeMode:'stretch',
            
          }}/>
        <View style={styles.viewHeader}>
        
        <View   style={styles.header}>
           <Text style={styles.text}  ></Text>
        </View>
       
      
        <View style={styles.header}>
        <Image style ={styles.deli} source={require('../assets/icons/home.png')}/>
        </View>
        </View>
        
       
        <View style={styles.view2}>
        
     
          
           <TouchableOpacity onPress={() => navigation.navigate('')}>
           <View
            style={styles.linearGradient}>
            <Image style={styles.deli2} source={require('../assets/icons/LavanderíaLasOlas.png')}/>
            <Text style={styles.buttonText} >
            LAVANDERÍA LAS OLAS 
            </Text>
          </View>        
          </TouchableOpacity>       
              
       
          <TouchableOpacity onPress={() => navigation.navigate('')}>
           <View
            style={styles.linearGradient}>
            <Image style={styles.deli2} source={require('../assets/icons/PSA_portones_y_sistemas.png')}/>
            <Text style={styles.buttonText} >
            TECNO SEGURIDAD
            </Text>
          </View>
              
          </TouchableOpacity> 

         

          
          

      

         
        </View>
        
       
      </View>
    )
  }
}

// Browse.defaultProps = {
//   profile: mocks.profile,
//   categories: mocks.categories,
// }

export default House ;

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
    width:'85%',
    fontFamily:'Arial_Rounded_MT',
    fontWeight: 'bold',
  
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
