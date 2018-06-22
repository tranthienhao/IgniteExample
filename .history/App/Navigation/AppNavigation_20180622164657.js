import { StackNavigator, TabNavigator } from 'react-navigation'
import React from 'react';
import NewsDetailScreen from '../Containers/NewsDetailScreen'
import NewsScreen from '../Containers/NewsScreen'
import Page2Screen from '../Containers/Page2Screen'
import styles from './Styles/NavigationStyles'
import {View, Text, Image, Platform} from 'react-native'
import { Header } from 'react-navigation'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  Home: {
    screen: TabNavigator({
      'Page1 Screen': {
        screen: NewsScreen
      },
      'Page2 Screen': {
        screen: Page2Screen
      }
    }, {
      navigationOptions: {
        header: props =>
        <View style={styles.header}>
          <Text>this.props.title</Text>
        </View>,
        headerTitleStyle: { color: 'tomato', textAlign: 'center', alignSelf: 'center'},
        headerTitle: "NEWS FEED",
        headerBackTitle:null,
        headerStyle: styles.header,
        tabBarIcon: ({ focused,tintColor }) => (
          focused ? <Image
              source={require('../Images/Icons/icon-api-testing.png')}
              style={[styles.icon, {tintColor: tintColor}]}
            />
            :
            <Image
              source={require('../Images/Icons/icon-api-testing.png')}
              style={[styles.icon, {tintColor: tintColor}]}
            />
        ),
      },
      tabBarPosition: "bottom",
      tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        showIcon: true,
        upperCaseLabel: false,
        indicatorStyle: {
          opacity: 0
        },
        style: {
          backgroundColor: 'white',
          height: 56,
        },
        labelStyle: {
          fontSize: 12,
        },
      },
      animationEnabled: true,
      swipeEnabled: true,
    })
  },
  NewsDetailScreen: { screen: NewsDetailScreen,
  navigationOptions: ({navigation}) => ({
    headerTitle: "NEWS",
    headerTintColor: 'tomato',
    headerTitleStyle: { color: 'tomato', textAlign: 'center'},
  }), },
}, {
  // Default config for all screens
  headerMode: 'float',
  initialRouteName: 'Home',
  navigationOptions: {
    headerStyle: styles.header,
  }
})

export default PrimaryNav
