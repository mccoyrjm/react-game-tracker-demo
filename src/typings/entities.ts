export interface Entity {
  _id: string
  username: string
  password: string
}

export interface EntityGame {
  _id: string
  entityId: string
  gameId: string
}
