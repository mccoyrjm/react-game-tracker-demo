import entities from 'database/entities.json'
import { AuthenticateLoginResponse } from 'typings/authenticate'
import { Entity } from 'typings/entities'

const { users } = entities

// eslint-disable-next-line import/prefer-default-export
export const authenticateLogin = (
  username: string,
  password: string
): AuthenticateLoginResponse => {
  const user =
    users.find((entity: Entity) => entity.username === username) ||
    ({} as Entity)

  return { accessToken: user?.password === password ? 'validToken' : '', user }
}
