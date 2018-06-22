import { StyleSheet } from 'react-native'
import { Colors } from '../../Themes/'

export default StyleSheet.create({
  header: {
    backgroundColor: '#FAFAFA',
    height: 56,
    marginTop: Platform.OS == "ios" ? 20 : 0
  },
  icon: {
    height: 25,
    width: 25
  }
})
