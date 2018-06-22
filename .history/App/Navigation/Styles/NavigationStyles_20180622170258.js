import { StyleSheet } from 'react-native'
import { Colors } from '../../Themes/'
import { Platform } from 'react-native'
export default StyleSheet.create({
  header: {
    backgroundColor: '#FAFAFA',
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset:{  height: 10,  },
    shadowColor: 'black',
    shadowOpacity: 1,
    shadowRadius: 1,
  },
  icon: {
    height: 25,
    width: 25
  }
})
