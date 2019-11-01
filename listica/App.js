import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Asset } from 'expo-asset';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';

import Navigation from './navigation';
import { Block } from './components';
import { red } from 'ansi-colors';



// import all used images
const images = [
  require('./assets/icons/AnInsideJob.png'),
  require('./assets/icons/app-icon.png'),
  require('./assets/icons/AppHP.png'),
  require('./assets/icons/Art.png'),
  require('./assets/icons/Carga.png'),
  require('./assets/icons/cart.png'),
  require('./assets/icons/ComeFruta.png'),
  require('./assets/icons/Construction.png'),
  require('./assets/icons/delivery.png'),
  require('./assets/icons/FondoAdventure.png'),
  require('./assets/icons/FondoArt.png'),
  require('./assets/icons/FondoArtDeko.png'),
  require('./assets/icons/FondoConstruction.png'),
  require('./assets/icons/FondoGolfCarts.png'),
  require('./assets/icons/FondoIn-HomeServices.png'),
  require('./assets/icons/FondoMain.png'),
  require('./assets/icons/FondoMainv3.png'),
  require('./assets/icons/FondoMarkets.png'),
  require('./assets/icons/FondoMeal.png'),
  require('./assets/icons/FondoMealsDelivery.png'),
  require('./assets/icons/FondoSports.png'),
  require('./assets/icons/FondoTransfers.png'),
  require('./assets/icons/FondoWellness.png'),
  require('./assets/icons/Fontaneria.png'),
  require('./assets/icons/Garden.png'),
  require('./assets/icons/GoCostaRica.png'),
  require('./assets/icons/golf-cart.png'),
  require('./assets/icons/GolfCartRentme.png'),
  require('./assets/icons/Health.png'),
  require('./assets/icons/home.png'),
  require('./assets/icons/Kids.png'),
  require('./assets/icons/LavanderíaLasOlas.png'),
  require('./assets/icons/loading-icon.png'),
  require('./assets/icons/LogoJotasBuilders.png'),
  require('./assets/icons/Main.png'),
  require('./assets/icons/massage.png'),
  require('./assets/icons/Multiservicios.png'),
  require('./assets/icons/pets.png'),
  require('./assets/icons/Prueba.png'),
  require('./assets/icons/PSA_portones_y_sistemas.png'),
  require('./assets/icons/road.png'),
  require('./assets/icons/SodaMarcela.png'),
  require('./assets/icons/SpaMaya.png'),
  require('./assets/icons/Splash.png'),
  require('./assets/icons/Sports.png'),
  require('./assets/icons/taxi.png'),
  require('./assets/icons/TheCartGuy.png'),
  require('./assets/icons/TheHealthySeduction.png'),
  require('./assets/icons/TMT.png'),
  require('./assets/icons/Trip-N-Taxi.png'),
  require('./assets/icons/warning.png'),

];

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
    
  }
  
  
  // async componentWillMount() {
  //   await Font.loadAsync({
  //     'Roboto-Black': require("./assets/fonts/Roboto-Black.ttf"),
      
  //   });
  //   this.setState({ isLoadingComplete: true });
  // }
  
  handleResourcesAsync = async () => {
    // we're caching all the images
    // for better performance on the app

    const cacheImages = images.map(image => {
      return Asset.fromModule(image).downloadAsync();
    });

    return Promise.all(cacheImages);
  }

  render() {
    
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this.handleResourcesAsync,loadResourcesAsync}
          onError={error => console.warn(error)}
          onFinish={() => this.setState({ isLoadingComplete: true })}
        />
        
      )
      
    }

    return (
   
        <Navigation /> 
             
      
        
    );
    
    
  }
  
}

async function loadResourcesAsync() {
  await Promise.all([
    Font.loadAsync({
      'McLaren-Regular': require('./assets/fonts/McLaren-Regular.ttf'),
      
    }),
  ])
}
