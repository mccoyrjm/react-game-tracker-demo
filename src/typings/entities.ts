export interface Entity {
  _id: string
  username: string
  password: string
  firstName: string
  lastName: string
}

export interface EntityGame {
  _id: string
  entityId: string
  gameId: string
  title: string
}
