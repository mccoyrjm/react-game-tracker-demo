import entities from 'database/entities.json'
import { Entity } from 'typings/entities'

const { users } = entities

// eslint-disable-next-line import/prefer-default-export
export const authenticateLogin = (
  username: string,
  password: string
): string => {
  const user = users.find((entity: Entity) => entity.username === username)

  if (user && user.password === password) {
    return 'validToken'
  }

  return ''
}
