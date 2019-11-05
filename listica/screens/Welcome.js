import React, { Component } from 'react'
import { Dimensions, Image, StyleSheet, ScrollView, TouchableOpacity,TouchableHighlight, Linking, ImageBackground, View, Alert, Modal } from 'react-native';
import {Ionicons} from 'react-native-vector-icons';

import { Card, Badge, Button, Block, Text } from '../components';
import { theme } from '../constants';




const { width } = Dimensions.get('window');

class Welcome extends Component {

  constructor(props) {

    super(props);

    this.state = { 
        
      modalVisible: false 
    };

  }

  ShowModalFunction(visible) {

    this.setState({modalVisible: visible});
    
  }
  static navigationOptions = ({navigation}) => {
    return {
      headerTitle: 'Hacienda Pinilla Concierge Services',
      headerLeft:<Ionicons style={{marginLeft:10}} name="md-menu" size={32} color='white' onPress={()=>navigation.openDrawer()}/>,
    

      headerTitleStyle: {
        display:'flex',
        color: '#fff',
        textAlign: 'center',
        alignSelf: 'center',
        fontWeight: 'normal',
        fontSize:16,
        fontFamily:'Arial_Rounded_MT'
      },

      headerStyle: {
        display:'flex',
        backgroundColor: '#7c0000',
        height:35
        
      },
    }
  }


 
  

  render() {
    const { navigation } = this.props;
    
   
    const url ='tel://12345678'


    return (


      <View style={styles.back} >
        
        <ImageBackground source={require('../assets/Fondos/MAIN.png')}
          style={{

            display: 'flex',
            position: 'absolute',
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            resizeMode: 'stretch',

          }} />

        <View style={styles.viewHeader}>



          <Block flex={false} row center space="between" style={styles.header}>

            {/* <Text style={styles.text} >Hacienda Pinilla Concierge Services</Text> */}

          </Block>


          <Block flex={false} row center space="between" style={styles.header}>

            <Text style={styles.text2}  >MAIN MENU</Text>
            <Button style={styles.button} onPress={() =>Alert.alert()}>
              <Image
                source={require('../assets/icons/warning.png')}
                style={styles.avatar}
              />
            </Button>
          </Block>
        </View>
        <View style={styles.view2}>

          <ScrollView>


            <Block flex={false} row space="between" style={styles.categories}>
              {/* {categories.map(category => ( */}

              <TouchableOpacity
                // key={category.name}
                onPress={() => navigation.navigate('Market')}
              >
                <Card center middle shadow style={styles.category}>
                  <Badge margin={[7, 0, 15]} size={50} color="rgba(41,216,143,0.20)">
                    <Image style={styles.deli} source={require('../assets/icons/cart.png')} />
                  </Badge>
                  <Text style={styles.textCard} medium height={20} >CONVENIENCE</Text>
                  <Text style={styles.textCard} >STORES</Text>

                </Card>
              </TouchableOpacity>

              <TouchableOpacity
                // key={category.name}
                onPress={() => navigation.navigate('Meal')}
              >
                <Card center middle shadow style={styles.category}>
                  <Badge margin={[7, 0, 15]} size={50} color="rgba(41,216,143,0.20)">
                    <Image style={styles.deli} source={require('../assets/icons/delivery.png')} />
                  </Badge>
                  <Text style={styles.textCard} medium height={20} >MEALS DELIVERY</Text>

                </Card>
              </TouchableOpacity>

              <TouchableOpacity
                // key={category.name}
                onPress={() => navigation.navigate('Transfer')}
              >
                <Card center middle shadow style={styles.category}>
                  <Badge margin={[7, 0, 15]} size={50} color="rgba(41,216,143,0.20)">
                    <Image style={styles.deli} source={require('../assets/icons/taxi.png')} />
                  </Badge>
                  <Text style={styles.textCard} medium height={20} >TRANSFERS & TRIPS</Text>

                </Card>
              </TouchableOpacity>

              <TouchableOpacity
                // key={category.name}
                onPress={() => navigation.navigate('House')}
              >
                <Card center middle shadow style={styles.category}>
                  <Badge margin={[7, 0, 15]} size={50} color="rgba(41,216,143,0.20)">
                    <Image style={styles.deli} source={require('../assets/icons/home.png')} />
                  </Badge>
                  <Text style={styles.textCard} medium height={20} >HOME</Text>

                </Card>
              </TouchableOpacity>

              <TouchableOpacity
                // key={category.name}
                onPress={() => navigation.navigate('Wellness')}
              >
                <Card center middle shadow style={styles.category}>
                  <Badge margin={[7, 0, 15]} size={50} color="rgba(41,216,143,0.20)">
                    <Image style={styles.deli} source={require('../assets/icons/massage.png')} />
                  </Badge>
                  <Text style={styles.textCard} medium height={20} >WELLNESS</Text>

                </Card>
              </TouchableOpacity>

              <TouchableOpacity
                // key={category.name}
                onPress={() => navigation.navigate('Golf')}
              >
                <Card center middle shadow style={styles.category}>
                  <Badge margin={[9, 0, 15]} size={50} color="rgba(41,216,143,0.20)">
                    <Image style={styles.deli} source={require('../assets/icons/golf-cart.png')} />
                  </Badge>
                  <Text style={styles.textCard} medium height={20} >GOLF CARTS, </Text>
                  <Text style={styles.textCard} >QUADS & BIKES</Text>


                </Card>
              </TouchableOpacity>


              <TouchableOpacity
                // key={category.name}
                onPress={() => navigation.navigate('Adventure')}

              >
                <Card center middle shadow style={styles.category}>
                  <Badge margin={[7, 0, 15]} size={50} color="rgba(0,0,0,0)">
                    <Image style={styles.deli} source={require('../assets/icons/road.png')} />
                  </Badge>
                  <Text style={styles.textCard} medium height={20} >ADVENTURE</Text>

                </Card>
              </TouchableOpacity>

              <TouchableOpacity
                // key={category.name}
                onPress={() => navigation.navigate('')}
              >
                <Card center middle shadow style={styles.category}>
                  <Badge margin={[7, 0, 15]} size={50} color="rgba(41,216,143,0.20)">
                    <Image style={styles.deli} source={require('../assets/icons/Sports.png')} />
                  </Badge>
                  <Text style={styles.textCard} medium height={20} >SPORTS</Text>

                </Card>
              </TouchableOpacity>

              <TouchableOpacity
                // key={category.name}
                onPress={() => navigation.navigate('Construction')}
              >
                <Card center middle shadow style={styles.category}>
                  <Badge margin={[7, 0, 15]} size={50} color="rgba(41,216,143,0.20)">
                    <Image style={styles.deli} source={require('../assets/icons/Construction.png')} />
                  </Badge>
                  <Text style={styles.textCard} medium height={20} >CONSTRUCTION</Text>
                  <Text style={styles.textCard} >& MAINTENANCE</Text>


                </Card>
              </TouchableOpacity>

              <TouchableOpacity
                // key={category.name}
                onPress={() => navigation.navigate('Garden')}
              >
                <Card center middle shadow style={styles.category}>
                  <Badge margin={[7, 0, 15]} size={50} color="rgba(41,216,143,0.20)">
                    <Image style={styles.deli} source={require('../assets/icons/Garden.png')} />
                  </Badge>
                  <Text style={styles.textCard} medium height={20} >POOL, GARDEN </Text>
                  <Text style={styles.textCard} >& PLAGUES </Text>


                </Card>
              </TouchableOpacity>

              <TouchableOpacity
                // key={category.name}
                onPress={() => navigation.navigate('Art')}
              >
                <Card center middle shadow style={styles.category}>
                  <Badge margin={[7, 0, 15]} size={50} color="rgba(41,216,143,0.20)">
                    <Image style={styles.deli} source={require('../assets/icons/Art.png')} />
                  </Badge>
                  <Text style={styles.textCard} medium height={20} >ART & DEKO</Text>

                </Card>
              </TouchableOpacity>



              <TouchableOpacity
                // key={category.name}
                onPress={() => navigation.navigate('')}
              >
                <Card center middle shadow style={styles.category}>
                  <Badge margin={[7, 0, 15]} size={50} color="rgba(41,216,143,0.20)">
                    <Image style={styles.deli} source={require('../assets/icons/Health.png')} />
                  </Badge>
                  <Text style={styles.textCard} medium height={20} >HEALTHCARE</Text>

                </Card>
              </TouchableOpacity>


              <TouchableOpacity
                // key={category.name}
                onPress={() => Alert.alert(
                  'Owner Access',
                  'Coming Soon',
                  [

                    { text: 'OK' },
                  ],
                  { cancelable: false },
                )}
              >
                <Card center middle shadow style={styles.category}>
                  <Badge margin={[7, 0, 15]} size={50} color="rgba(41,216,143,0.20)">
                    <Image style={styles.deli} source={require('../assets/icons/AppHP.png')} />
                  </Badge>
                  <Text style={styles.textCard} medium height={20} >OWNERS ACCESS</Text>

                </Card>
              </TouchableOpacity>


            </Block>
          </ScrollView>
          {/* </ImageBackground> */}
        </View>
      </View>
    )
  }
}

// Browse.defaultProps = {
//   profile: mocks.profile,
//   categories: mocks.categories,
// }

export default Welcome;

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: theme.sizes.base * 2,
    backgroundColor: '#B3A332'


  },
  back: {
    display: 'flex',
    
  },
  text: {
    fontFamily:'Arial_Rounded_MT',
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 16,
    paddingLeft: 30,

  },
  text2: {
    fontFamily:'Arial_Rounded_MT',
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 16,
    marginLeft:100,

  },
  textCard: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 11,
    color: 'white',
    fontFamily:'Arial_Rounded_MT',


  },
  deli: {
    width: 70,
    height: 70,
    margin: 5,
    alignItems: 'center',
  },
  avatar: {
    height: theme.sizes.base * 3.4,
    width: theme.sizes.base * 3.4,
    backgroundColor: '#B3A332'

  },
  button: {
    height: theme.sizes.base * 2.6,
    width: theme.sizes.base * 2.6,
    marginTop:20,
  },
  tabs: {
    borderBottomColor: theme.colors.gray2,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginVertical: theme.sizes.base,
    marginHorizontal: theme.sizes.base * 2,
  },
  viewHeader: {
    height: '15%',
    backgroundColor: '#B3A332',

  },
  view2: {
    display: 'flex',
    alignItems: 'center',
    height: '85%',
  },
  tab: {
    marginRight: theme.sizes.base * 2,
    paddingBottom: theme.sizes.base,
    backgroundColor: '#B3A332'
  },
  active: {
    borderBottomColor: theme.colors.secondary,
    borderBottomWidth: 3,
  },
  categories: {
    flexWrap: 'wrap',
    paddingHorizontal: theme.sizes.base * 2,
    marginBottom: theme.sizes.base * 3.5,
    marginTop: 3,
  },
  category: {
    // this should be dynamic based on screen width
    minWidth: (width - (theme.sizes.padding * 2.4) - theme.sizes.base) / 2,
    width: (width - (theme.sizes.padding * 2.2) - theme.sizes.base) / 2,
    height: (width - (theme.sizes.padding * 2.0) - theme.sizes.base) / 2,




  }
})
