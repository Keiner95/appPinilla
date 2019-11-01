import React, { Component } from 'react'
import { Dimensions, Image, StyleSheet, ScrollView, TouchableOpacity, Linking, ImageBackground, View,Alert } from 'react-native'
import{LinearGradient} from 'expo-linear-gradient'
import {Ionicons} from 'react-native-vector-icons';

import { Card, Badge, Button, Block, Text } from '../components';
import { theme } from '../constants';


const { width } = Dimensions.get('window');

class Meal extends Component {

  static navigationOptions = ({navigation}) => {
    return {
      headerTitle:'MEALS DELIVERY',
      headerRight:<Ionicons style={{marginRight:10}} name="md-menu" size={32} color='white' onPress={()=>navigation.openDrawer()}/>,
      headerLeft:<Ionicons style={{marginLeft:10}} name="md-arrow-back" size={32} color='white' onPress={()=>navigation.goBack()}/>,

      headerTitleStyle: {
        flex: 1,
        color: '#fff',
        textAlign: 'center',
        alignSelf: 'center',
        fontWeight: 'normal',
        fontSize: 16,
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
        <ImageBackground source={require('../assets/icons/Prueba.png')} 
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
           <Text style={styles.text}  bold></Text>
        </View>
       
      
        <View style={styles.header}>
        <Image style ={styles.deli} source={require('../assets/icons/delivery.png')}/>
        </View>
        </View>
        
       
        <View style={styles.view2}>
        {/* <ImageBackground source={require('../assets/icons/FondoMealsDelivery.png')} 
        style={{
         
              flex: 1,         
              position: 'absolute',
              width: '100%',
              height: '100%',
              justifyContent: 'center',
              resizeMode:'stretch',
              
            
          
        }}/> */}
     
          
           <TouchableOpacity onPress={() => navigation.navigate('MealController')}>
           <View
            style={styles.linearGradient}>
            <Image style={styles.deli2} source={require('../assets/icons/TheHealthySeduction.png')}/>
            <Text style={styles.buttonText}>
            THE HEALTHY SEDUCTION
            </Text>
          </View>        
          </TouchableOpacity>       
              
       
          <TouchableOpacity onPress={() => navigation.navigate('')}>
           <View
            style={styles.linearGradient}>
            <Image style={styles.deli2} source={require('../assets/icons/SodaMarcela.png')}/>
            <Text style={styles.buttonText} >
           SODA Y MARISQUERIA MARCELA
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

export default Meal;

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
    fontFamily:'McLaren-Regular',
    fontSize: 13,  
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
