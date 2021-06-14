/* eslint-disable no-underscore-dangle */
import { createStore } from 'redux'
import rootReducer from 'state/reducers'

const store = createStore(
  rootReducer,
  // eslint-disable-next-line operator-linebreak
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
)

const rootState = store.getState()
export type RootState = typeof rootState

export default store
