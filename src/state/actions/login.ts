import { AnyAction } from 'redux'
import { LoginRequest } from 'typings/login'
import { LoginState } from 'typings/reducers'

export interface LoginAction extends AnyAction {
  type: 'AUTHENTICATE_LOGIN' | 'RESET_LOGIN_STATE'
  payload: LoginRequest | Partial<LoginState>
}

export const authenticateLogin = (payload: LoginRequest): LoginAction => ({
  type: 'AUTHENTICATE_LOGIN',
  payload,
})

export const resetLoginState = (): LoginAction => ({
  type: 'RESET_LOGIN_STATE',
  payload: {},
})
