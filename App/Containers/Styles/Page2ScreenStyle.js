import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors } from '../../Themes'

export default StyleSheet.create({
 ...ApplicationStyles.screen,
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA'
  },
  row: {
    flex: 1,
    backgroundColor: Colors.fire,
    marginVertical: Metrics.smallMargin,
    justifyContent: 'center'
  },
  boldLabel: {
    fontWeight: 'bold',
    alignSelf: 'center',
    color: Colors.snow,
    textAlign: 'center',
    marginBottom: Metrics.smallMargin
  },
  label: {
    textAlign: 'center',
    color: '#000000'
  },
  listContent: {
    marginTop: Metrics.baseMargin
  },
  loadding: {
    textAlign: 'center',
    color: '#FAFAFA',
    backgroundColor: 'tomato'
  }
})
