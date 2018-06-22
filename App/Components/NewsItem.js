import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { Image, View, Text,TouchableWithoutFeedback, Alert } from 'react-native'
import styles from './Styles/NewsItemStyle'

export default class NewsItem extends Component {
  clickItem(){
    // Alert.alert(this.props.news.id)
    this.props.nav.navigate('NewsDetailScreen', {news: this.props.news})
  }
  render () {
    return (
      <TouchableWithoutFeedback onPress= {this.clickItem.bind(this)}>
        <View style={styles.container}>
          <Image style = {styles.image}
          source={{uri: this.props.news.image}}></Image>
          <Text style={styles.title}>{this.props.news.title}</Text>
          <Text>{this.props.news.detailShort}</Text>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}
