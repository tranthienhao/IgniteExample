import React, { Component } from 'react'
import { ScrollView, Text, Dimensions, Button } from 'react-native'
import { connect } from 'react-redux'
import HTML from 'react-native-render-html';

// Styles
import styles from './Styles/NewsDetailScreenStyle'
const tagsStyles = {
    i: { textAlign: 'center', color: 'grey'},
    p: { textAlign: 'justify', color: 'black', margin: 10},
    b: { textAlign: 'center', color: 'black', margin: 10},
}
class NewsDetailScreen extends Component {
  
  render () {
    const {detail} = this.props.navigation.getParam('news')
    return (
      <ScrollView style={styles.container}>
        <HTML html={detail} tagsStyles={tagsStyles} imagesMaxWidth={Dimensions.get('window').width} />
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsDetailScreen)
