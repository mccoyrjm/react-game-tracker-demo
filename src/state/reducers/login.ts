import { authenticateLogin } from 'api/authenticate'
import { LoginAction } from 'state/actions/login'
import { LoginRequest } from 'typings/login'
import { LoginState } from 'typings/reducers'

const initialState: LoginState = {
  loggedInUser: '',
  accessToken: '',
  error: false,
}

const TestReducer = (state = initialState, action: LoginAction): LoginState => {
  const { type, payload } = action

  if (type === 'AUTHENTICATE_LOGIN') {
    const { userId, password } = payload as LoginRequest
    const accessToken = authenticateLogin(userId, password)

    if (accessToken) {
      return {
        ...state,
        loggedInUser: userId,
        accessToken,
        error: false,
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
