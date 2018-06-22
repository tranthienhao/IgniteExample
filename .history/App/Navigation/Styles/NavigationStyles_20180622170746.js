import { StyleSheet } from 'react-native'
import { Colors } from '../../Themes/'
import { Platform } from 'react-native'
export default StyleSheet.create({
  header: {
    backgroundColor: '#FAFAFA',
    height: 56,
    marginTop: Platform.OS == "ios" ? 20 : 0,
    justifyContent: 'center',
    alignItems: 'center',
    // shadowOffset:{  height: 1,  },
    // shadowColor: 'black',
    // shadowOpacity: .3,
    elevation: 1,
  },
  icon: {
    height: 25,
    width: 25
  }
})
