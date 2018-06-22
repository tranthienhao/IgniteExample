import { StackNavigator, TabNavigator } from 'react-navigation'
import React from 'react';
import NewsDetailScreen from '../Containers/NewsDetailScreen'
import NewsScreen from '../Containers/NewsScreen'
import Page2Screen from '../Containers/Page2Screen'
import styles from './Styles/NavigationStyles'
import {Image} from 'react-native'

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
        headerStyle: styles.header,
        tabBarIcon: ({ focused,tintColor }) => (
          focused ? <Image
              source={require('../Images/Icons/faq-icon.png')}
              style={[styles.icon, {tintColor: tintColor}]}
            />
            :
            <Image
              source={require('../Images/Icons/faq-icon.png')}
              style={[styles.icon, {tintColor: tintColor}]}
            />
        ),
        backgroundColor: '#000000'
      },
      tabBarPosition: "bottom",
      tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      },
      animationEnabled: true,
      swipeEnabled: true,
    })
  },
  NewsDetailScreen: { screen: NewsDetailScreen,
  navigationOptions: ({navigation}) => ({
    headerTitle: "NEWS",
    headerTintColor: 'black',
    headerTitleStyle: { color: 'black', justifyContent: 'center'}
  }), },
}, {
  // Default config for all screens
  headerMode: 'float',
  initialRouteName: 'Home',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
