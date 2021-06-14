import { authenticateLogin } from 'api/authenticate'
import { LoginAction } from 'state/actions/login'
import { Entity } from 'typings/entities'
import { LoginRequest } from 'typings/login'
import { LoginState } from 'typings/reducers'

const initialState: LoginState = {
  user: {} as Entity,
  accessToken: '',
  error: false,
}

const TestReducer = (state = initialState, action: LoginAction): LoginState => {
  const { type, payload } = action

  if (type === 'AUTHENTICATE_LOGIN') {
    const { userId, password } = payload as LoginRequest
    const { accessToken, user } = authenticateLogin(userId, password)

    if (accessToken) {
      return {
        ...state,
        accessToken,
        error: false,
        user,
      }
    }
    return {
      ...state,
      error: true,
    }
  }

  if (type === 'RESET_LOGIN_STATE') {
    return {
      ...initialState,
    }
  }

  return state
}

export default TestReducer
