import React, { Component } from 'react';
import { StyleSheet, Button, View, Text, FlatList, Image , TouchableOpacity,Dimensions,ActivityIndicator, Alert} from 'react-native';
import { createStackNavigator, createAppContainer, createDrawerNavigator } from 'react-navigation';
import { Ionicons } from 'react-native-vector-icons';
import TimedSlideshow from 'react-native-timed-slideshow'





class MealController extends Component {


  static navigationOptions = ({navigation}) => {
    return {
      headerTitle:'THE HEALTHY SEDUCTION',
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


 
constructor(props) {

  super(props);

  this.state = {

    isLoading: true,
    products:[],

  }



}

GetItem (name) {
  
  Alert.alert(name);
  
  }

FlatListItemSeparator = () => {
  return (
    <View
      style={{
        height: .5,
        width: "100%",
        backgroundColor: "red",
      }}
    />
  );
}

webCall=()=>{

 return fetch('https://lxl6ssbo-site.atempurl.com/healthy/Simple/services/listCategory')
        .then((response) => response.json())
        .then((responseJson) => {
          this.setState({
            isLoading: false,
            dataSource: responseJson.categories
          }, function() {
            // In this block you can do something with new state.
          });
        })
        .catch((error) => {
          console.error(error);
        });

}

componentDidMount(){

 this.webCall();

}

render() {
  const {  navigation } = this.props;

  if (this.state.isLoading) {
    return (

     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>

        <ActivityIndicator size="large" />

      </View>
      
    );

  }

  return (

    <View style={styles.View}>

      <FlatList 
      
       data={ this.state.dataSource }
       
       ItemSeparatorComponent = {this.FlatListItemSeparator}

       renderItem={({item}) => 
       
       <TouchableOpacity onPress={() => navigation.navigate('')}>
       <View
        style={styles.linearGradient}>
        <Image style={styles.deli2} source = {{ uri: 'https://lxl6ssbo-site.atempurl.com/healthy/Simple/uploads/category/Coming%20Back%20in%20November.png'}}/>
        <Text style={styles.name}>{item.name}
        {item.brief}</Text>
       
        
      </View>        
      </TouchableOpacity> 
       
         }

       keyExtractor={(item, index) => index.toString()}
       
       />

    </View>
  );
}


}





const styles = StyleSheet.create({
  View: {
    backgroundColor: '#C4C4B2',
    flex:1,
    justifyContent: 'center',
 
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
   deli2:{
    width:'15%',
    height:50,

   
  },
  name: {
    fontFamily:'Arial_Rounded_MT',
    fontSize: 15,  
    textAlign: 'left',
    color: '#ffffff',
    backgroundColor: 'transparent',
    marginVertical:12,
    padding:12,
    width:'85%',
    fontWeight: 'bold',
    
  },
  email: {
    color: 'red',
    fontSize: 16,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'left',

  },
  imageView: {

    width: '10%',
    height: 30 ,

 
},
 
textView: {

    width:'50%', 
    textAlignVertical:'center',

    color: '#000'
 
},
})
export default MealController;
