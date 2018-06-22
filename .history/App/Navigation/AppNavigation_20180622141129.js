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
        headerTintColor: 'white',
        headerStyle: { backgroundColor: 'black', borderWidth: 1, borderBottomColor: 'white' },
        headerTitleStyle: { color: 'white' }
      },
      tabBarPosition: "bottom"
    })
  },
  NewsDetailScreen: { screen: NewsDetailScreen,
  navigationOptions: ({navigation}) => ({
    headerTitle: "NEWS"
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
