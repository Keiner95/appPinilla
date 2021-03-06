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
                <View style={[styles.screenStyle, (this.props.activeItemKey=='	My Favourites') ? styles.activeBackgroundColor : null]}>
                    <Text style={[styles.screenTextStyle, (this.props.activeItemKey=='Favourites') ? styles.selectedTextStyle : null]} onPress={this.navigateToScreen('Favourites')}>Favourites</Text>
                </View>
                <View style={[styles.screenStyle, (this.props.activeItemKey=='Notifications') ? styles.activeBackgroundColor : null]}>
                    <Text style={[styles.screenTextStyle, (this.props.activeItemKey=='Notifications') ? styles.selectedTextStyle : null]} onPress={this.navigateToScreen('Notifications')}>Notifications</Text>
                </View>
                <View style={[styles.screenStyle, (this.props.activeItemKey=='Guided Tour') ? styles.activeBackgroundColor : null]}>
                    <Text style={[styles.screenTextStyle, (this.props.activeItemKey=='Guided Tour') ? styles.selectedTextStyle : null]} onPress={this.navigateToScreen('Guided Tour')}>Guided Tour</Text>
                </View>
                <View style={[styles.screenStyle, (this.props.activeItemKey=='Configuration') ? styles.activeBackgroundColor : null]}>
                    <Text style={[styles.screenTextStyle, (this.props.activeItemKey=='Configuration') ? styles.selectedTextStyle : null]} onPress={this.navigateToScreen('Configuration')}>Configuration</Text>
                </View>
                <View style={[styles.screenStyle, (this.props.activeItemKey=='Rate us') ? styles.activeBackgroundColor : null]}>
                    <Text style={[styles.screenTextStyle, (this.props.activeItemKey=='Rate us') ? styles.selectedTextStyle : null]} onPress={this.navigateToScreen('Rate us')}>Rate us</Text>
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