import { call, put } from 'redux-saga/effects'
import NewsActions from '../Redux/NewsRedux'


export function* getNews(api, action) {
  const { topic, page } = action
  const response = yield call(api.getNews, topic, page)

  if (response.ok) {
    // You might need to change the response here - do this with a 'transform',
    // located in ../Transforms/. Otherwise, just pass the data back from the api.
    yield put(NewsActions.newsSuccess(response.data))
  } else {
    yield put(NewsActions.newsFailure(response.problem))
  }
}
export function* getPage2(api, action) {
  const { topic, page } = action
  const response = yield call(api.getNews, topic, page)

  if (response.ok) {
    // You might need to change the response here - do this with a 'transform',
    // located in ../Transforms/. Otherwise, just pass the data back from the api.
    yield put(NewsActions.page2Success(response.data))
  } else {
    yield put(NewsActions.page2Failure())
  }
}
