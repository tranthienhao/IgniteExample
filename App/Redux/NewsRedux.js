import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  newsRequest: ['topic','page'],
  newsSuccess: ['listNews'],
  newsFailure: ['problem'],
  page2Request: ['topic', 'page'],
  page2Success: ['page2List'],
  page2Failure: ['problem']
})

export const NewsTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  fetching: false,
  fetching2: false,
  listNews: [],
  page2List: [],
  error: null
})

/* ------------- Selectors ------------- */

export const NewsSelectors = {
  getData: state => state.data
}

/* ------------- Reducers ------------- */

// request the data from an api
export const request = (state) =>
  state.merge({ fetching: true })

// successful api lookup
export const success = (state, action) => {
  const { listNews } = action
  return state.merge({ fetching: false, error: null, listNews })
}

// Something went wrong somewhere.
export const failure = (state, {problem}) =>
  state.merge({ fetching: false, error: problem, listNews: [] })

// request the data from an api
export const page2request = (state) =>
  state.merge({ fetching2: true })

// successful api lookup
export const page2success = (state, action) => {
  const { page2List } = action
  return state.merge({ fetching2: false, error: null, page2List })
}

// Something went wrong somewhere.
export const page2failure = (state, {problem}) =>
   state.merge({ fetching2: false, error: problem, listNews: [] })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.NEWS_REQUEST]: request,
  [Types.NEWS_SUCCESS]: success,
  [Types.NEWS_FAILURE]: failure,
  [Types.PAGE2_REQUEST]: page2request,
  [Types.PAGE2_SUCCESS]: page2success,
  [Types.PAGE2_FAILURE]: page2failure,
})
