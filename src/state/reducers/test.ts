import { AnyAction } from 'redux'
import { TestState } from 'typings/reducers'

const initialState: TestState = {
  prop1: 1,
  prop2: 2,
  prop3: 3,
}

const TestReducer = (state = initialState, action: AnyAction): TestState => {
  const { type, payload } = action

  if (type === 'UPDATE_TEST_STATE') {
    return {
      ...state,
      ...payload,
    }
  }

  return state
}

export default TestReducer
