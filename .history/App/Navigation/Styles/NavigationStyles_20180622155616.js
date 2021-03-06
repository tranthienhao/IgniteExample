import { StyleSheet } from 'react-native'
import { Colors } from '../../Themes/'
import { Platform } from 'react-native'
export default StyleSheet.create({
  header: {
    backgroundColor: '#FAFAFA',
    height: 56,
    marginTop: Platform.OS == "ios" ? 20 : 0,
    color: 'tomato',
    textAlign: 'center'
  },
  icon: {
    height: 25,
    width: 25
  }
})
