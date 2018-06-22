// a library to wrap and simplify api calls
import apisauce from 'apisauce'

// our "constructor"
const create = (baseURL = 'https://pttkht.esy.es/dulich/') => {

  //
  const api = apisauce.create({
    // base URL is read from the "constructor"
    baseURL,
    // here are some default headers
    headers: {
      'Cache-Control': 'no-cache'
    },
    // 10 second timeout...
    timeout: 10000
  })

  const getNews = (topic, page) => api.get('getNewsTopic.php?idTopic=' + topic + '&page=' + page)
  const getRoot = () => api.get('')
  const getRate = () => api.get('rate_limit')
  const getUser = (username) => api.get('search/users', {q: username})


  return {
    getNews,
    getRoot,
    getRate,
    getUser
  }
}

// let's return back our create method as the default.
export default {
  create
}
