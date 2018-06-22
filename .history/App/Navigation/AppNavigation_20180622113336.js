import { StackNavigator, TabNavigator } from 'react-navigation'
import NewsDetailScreen from '../Containers/NewsDetailScreen'
import NewsScreen from '../Containers/NewsScreen'
import Page2Screen from '../Containers/Page2Screen'

import styles from './Styles/NavigationStyles'

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
        tabBarIcon: ({ focused, tintColor }) => {
          const { routeName } = navigation.state;
          let iconName;
          if (routeName === 'Page1 Screen') {
            iconName = `ios-information-circle${focused ? '' : '-outline'}`;
          } else if (routeName === 'Page2 Screen') {
            iconName = `ios-options${focused ? '' : '-outline'}`;
          }

          // You can return any component that you like here! We usually use an
          // icon component from react-native-vector-icons
          return <Ionicons name={iconName} size={25} color={tintColor} />;
        },
      },
      tabBarPosition: "bottom"
    })
  },
  NewsDetailScreen: { screen: NewsDetailScreen,
  navigationOptions: ({navigation}) => ({
    title: "NEWS"
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
