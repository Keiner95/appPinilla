import React from 'react';
import { Image } from 'react-native';
import { Dimensions } from "react-native";
import { createAppContainer, createStackNavigator, createDrawerNavigator, createSwitchNavigator } from 'react-navigation';
import  DrawerContent from '../components/DrawerNavigation';
import {Ionicons} from 'react-native-vector-icons';

import Welcome from '../screens/Welcome';
import Wellness from '../screens/Wellness';
import Market from '../screens/Market';
import Golf from '../screens/Golf';
import Adventure from '../screens/Adventure';
import Meal from '../screens/Meal';
import Transfer from '../screens/Transfer';
import Art from '../screens/Art';
import House from '../screens/House';
import Construction from '../screens/Construction';
import Garden from '../screens/Garden';
import MealController from '../controller/MealController'
import Favoritos from '../screens/Favoritos';


import { theme } from '../constants';

const Router = createStackNavigator({
  Welcome: {screen: Welcome},
  Meal: {screen: Meal}
});

const Drawer = createDrawerNavigator({
  App: {screen: Router}
},{
  
  
  contentComponent:DrawerContent,
  overlayColor: "transparent",
  drawerWidth: Dimensions.get("window").width * 0.75,
  drawerHeight: Dimensions.get("window").height,
});
const AppContainer = createAppContainer(Drawer)

export default () => <AppContainer />


