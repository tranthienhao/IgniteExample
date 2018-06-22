import React, { Component } from 'react'
import { View, Text, FlatList, RefreshControl,TouchableWithoutFeedback } from 'react-native'
import { connect } from 'react-redux'

// Styles
import styles from './Styles/Page2ScreenStyle'

//NewsItem
import NewsItem from '../Components/NewsItem'

//NewsRedux
import Page2Actions from '../Redux/Page2Redux'

class Page2Screen extends Component {
 constructor(props){
    super(props)
    this.state = {
      topic: 2,
      page: 1,
      listNews: this.props.listNews,
      refreshing: false 
    }
  }
  renderRow ({item}) {
    return (
      <NewsItem news={item} nav = {this.props.navigation}> </NewsItem>
    )
  }

  renderHeader = () =>
    <Text style={[styles.label, styles.sectionHeader]}> - Header - </Text>

  // Render a footer?
  renderFooter = () =>
    <Text style={[styles.label, styles.sectionHeader]}> - Footer - </Text>

  // Show this when data is empty
  renderEmpty = () =>
    <Text style={styles.label}> - Nothing to See Here - </Text>

  renderSeparator = () =>
    <Text style={styles.label}> - ~~~~~ - </Text>

  keyExtractor = (item, id) => ''+id

  oneScreensWorth = 20

  loadMore(){ 
    if (!this.props.fetching && this.props.listNews[0]){
      console.log(this.state.page)
      this.props.getNews(this.state.topic, this.state.page)
      this.setState({ page: this.state.page + 1 })
    }
  }
  onRefresh(){
    this.setState({refreshing: true, page: 2, listNews: []})
    this.props.getNews(this.state.topic, 1)
    this.setState({refreshing: false})
  }

  render () { 
    return (
      <View style={styles.container}>
        <FlatList 
          refreshControl={ <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this.onRefresh.bind(this)}
          />}
          contentContainerStyle={styles.listContent}
          data={this.state.listNews}
          renderItem={this.renderRow.bind(this)}
          keyExtractor={this.keyExtractor}
          initialNumToRender={this.oneScreensWorth}
          ListHeaderComponent={this.renderHeader}
          ListFooterComponent={this.renderFooter}
          ListEmptyComponent={this.renderEmpty}
          ItemSeparatorComponent={this.renderSeparator}
          onEndReached={this.loadMore.bind(this)}
          onEndReachedThreshold= {1}
        />
        <Text style = {styles.label}>{JSON.stringify(this.state.page)}</Text>
      </View>
    )
  }
  componentDidMount(){
    this.props.getNews(2, this.state.page)
    this.setState({ page: this.state.page + 1 })
  }
  componentDidUpdate(prevProps) {
    if (prevProps.fetching) {
      this.setState({listNews: [...this.state.listNews, ...this.props.listNews]})
    }
  }
}

const mapStateToProps = (state) => {
  return {
    listNews: state.page2.listNews,
    fetching: state.page2.fetching
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getNews: (topic, page) => dispatch(Page2Actions.newsRequest(topic, page))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Page2Screen)

