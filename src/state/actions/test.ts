import { AnyAction } from 'redux'
import { TestState } from 'typings/reducers'

// eslint-disable-next-line import/prefer-default-export
export const updateTestState = (payload: Partial<TestState>): AnyAction => ({
  type: 'UPDATE_TEST_STATE',
  payload,
})
