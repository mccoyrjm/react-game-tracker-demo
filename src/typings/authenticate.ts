import { Entity } from './entities'

export interface AuthenticateLoginResponse {
  accessToken: string
  user: Entity
}
