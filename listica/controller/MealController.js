import React, { Component } from 'react';
import { StyleSheet, Button, View, Text, FlatList, Image , TouchableOpacitys,Dimensions} from 'react-native';
import { createStackNavigator, createAppContainer, createDrawerNavigator } from 'react-navigation';
import { Ionicons } from 'react-native-vector-icons';
import TimedSlideshow from 'react-native-timed-slideshow'
import jsonValue from '../controller/Sample'




class MealController extends Component {

//   componentDidMount(){
    
// this.setState({
//   data
// // })
// //   }

// //   async fetchjson(){
// //     var json = await fetch('json')
// //     json = await json.json(data)
// //   }
//   // render() {


// //     const items = [
// //         {
// //             uri: jsonValue(image),
// //             title: "Michael Malik",
// //             text: "Minnesota, USA",
// //             duration: 1000,
            
// //         },
// //         {
// //             uri: "http://blog.adrenaline-hunter.com/wp-content/uploads/2018/05/bungee-jumping-barcelona-1680x980.jpg",
// //             title: "Victor Fallon",
// //             text: "Val di Sole, Italy",
// //             duration: 1000,
            
// //         },
// //         {
// //             uri: "https://greatist.com/sites/default/files/Running_Mountain.jpg",
// //             title: "Mary Gomes",
// //             text: "Alps",
// //             duration: 1000,
           
// //         }
// //     ]

// //     return (
// //         <TimedSlideshow styles={styles.slider}
// //             items={items}
// //         />
// //     );
// // }



// constructor(props){
//   super(props);

//   this.state ={
//     loading: false,
//     products: [],
//     url:'https://lxl6ssbo-site.atempurl.com/healthy/Simple/services/listProduct'
//   }
// }
// componentDidMount(){
//   this.getProducto();

// }
// getProducto = () =>{
//   this.setState({loading:true})

//   fetch(this.state.url)
//   .then(res =>res.json)
//   .then(res =>{
//     this.setState({
//       products: res.products,
//       loading:false
//     })
//   })
// };

// render(){
//  return(
//    <View style={{flex:1,padding:50, paddingLeft:5}}>
// <FlatList

// data={this.state.products}
// renderItem={
// ({item}) =><Text> { item.name }</Text>
// }

// />


//    </View>
//  )
// }

}





const styles = StyleSheet.create({
  View: {
    backgroundColor: '#C4C4B2',
    flex:1,
  },
  slider:{
  

  },

})
export default MealController;
