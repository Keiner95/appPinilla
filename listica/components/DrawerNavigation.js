import React, { Component } from 'react';
import {NavigationActions} from 'react-navigation';
import { Text, View, StyleSheet, ImageBackground } from 'react-native'
import { white } from 'ansi-colors';

export default class DrawerContent extends Component {

    navigateToScreen = ( route ) =>(
        () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
    })

  render() {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <ImageBackground source={require('../assets/icons/ListicaAppPinilla.png')} style={{flex: 1, width: 300, justifyContent: 'center'}} >
                   
                </ImageBackground>
            </View>
            <View style={styles.screenContainer}>
                <View style={[styles.screenStyle, (this.props.activeItemKey=='Welcome') ? styles.activeBackgroundColor : null]}>
                    <Text style={[styles.screenTextStyle, (this.props.activeItemKey=='Welcome') ? styles.selectedTextStyle : null]} onPress={this.navigateToScreen('Welcome')}>Welcome</Text>
                </View>
                <View style={[styles.screenStyle, (this.props.activeItemKey=='Meal') ? styles.activeBackgroundColor : null]}>
                    <Text style={[styles.screenTextStyle, (this.props.activeItemKey=='Meal') ? styles.selectedTextStyle : null]} onPress={this.navigateToScreen('Meal')}>Meal</Text>
                </View>
                <View style={[styles.screenStyle, (this.props.activeItemKey=='Market') ? styles.activeBackgroundColor : null]}>
                    <Text style={[styles.screenTextStyle, (this.props.activeItemKey=='Market') ? styles.selectedTextStyle : null]} onPress={this.navigateToScreen('Market')}>Market</Text>
                </View>
            </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    
    },
    headerContainer: {
        height:200,
    },
    headerText: {
        color: '#fff8f8',
    },
    screenContainer: { 
        paddingTop: 20,
        width: '100%',
    },
    screenStyle: {
        height: 30,
        marginTop: 2,
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%'
    },
    screenTextStyle:{
        fontSize: 20,
        marginLeft: 20, 
        textAlign: 'center'
    },
    // selectedTextStyle: {
    //     fontWeight: 'bold',
    //     color: '#00adff'
    // },
    activeBackgroundColor: {
        backgroundColor: 'white'
    }
});